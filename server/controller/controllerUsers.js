import userService from '../service/serviceUsers.js';
import joi from 'joi';
import User from '../service/schemas/user.js';
import jwt from 'jsonwebtoken';
import passport from 'passport';
import dotenv from 'dotenv';
import contactService from '../service/serviceContacts.js';
import gravatar from 'gravatar';
import Jimp from 'jimp';
import path from 'path';
import { nanoid } from 'nanoid';
import { storeImageDir } from '../middlewares/fileUpload/upload.js';
import fs from 'fs/promises';
import {
	generateVerificationToken,
	sendVerificationEmail,
} from '../helpers/emailVerification.js';

dotenv.config();

const secret = process.env.SECRET;

const userSchema = joi.object({
	email: joi.string().email().required(),
	password: joi.string().required().pattern('^[a-zA-Z0-9]{3,30}$'),
});

export const authUser = async (req, res, next) => {
	passport.authenticate('jwt', { session: false }, async (error, user) => {
		if (!user || error) {
			return res.status(401).json({
				status: 'error',
				code: 401,
				ResponseBody: {
					message: 'Unauthorized',
				},
			});
		}
		try {
			const foundUser = await userService.getUserByEmail(user.email);

			if (foundUser.token !== user.token) {
				return res.status(401).json({
					status: 'error',
					code: 401,
					ResponseBody: {
						message: 'Unauthorized: Invalid token',
					},
				});
			}
			req.user = user;
			next();
		} catch (error) {
			next(error);
		}
	})(req, res, next);
};

const get = async (req, res, next) => {
	try {
		const results = await userService.getUsers();

		res.status(200).json({
			status: 'success',
			code: 200,
			ResponseBody: {
				users: results,
			},
		});
	} catch (error) {
		next(error);
	}
};

const register = async (req, res, next) => {
	if (!req.body)
		return res.status(400).json({
			status: 'error',
			ResponseBody: {
				message: 'Missing fields',
			},
			code: 400,
		});
	try {
		const value = await userSchema.validateAsync(req.body);
		const { email, password } = value;

		const user = await userService.getUserByEmail(email);

		if (user) {
			return res.status(409).json({
				status: 'Conflict',
				code: 409,
				ResponseBody: {
					message: 'Email in use',
				},
			});
		}
		try {
			const newUser = new User({ email });
			newUser.setPassword(password);
			const avatarURL = gravatar.url(newUser.email, {
				protocol: 'https',
				s: '100',
			});
			newUser.avatarURL = avatarURL;
			try {
				const verificationToken = generateVerificationToken();
				newUser.emailVerificiationToken = verificationToken;
				sendVerificationEmail(newUser.email, verificationToken);

				await newUser.save();
				return res.status(201).json({
					status: 'Created',
					code: 201,
					ResponseBody: {
						user: {
							email: newUser.email,
							subscription: newUser.subscription,
						},
					},
				});
			} catch (error) {
				next(error);
			}
		} catch (error) {
			console.log(error);
			next(error);
		}
	} catch (error) {
		res.status(400).json({
			status: 'Bad Request',
			code: 400,
			ResponseBody: {
				message: error.message,
			},
		});
		next(error);
	}
};

const login = async (req, res, next) => {
	if (!req.body)
		return res.status(400).json({
			status: 'error',
			ResponseBody: {
				message: 'Missing fields',
			},
			code: 400,
		});
	try {
		const value = await userSchema.validateAsync(req.body);
		const { email, password } = value;
		const user = await userService.getUserByEmail(email);

		if (!user || !user.validatePassword(password)) {
			return res.status(401).json({
				status: 'error',
				code: 400,
				ResponseBody: {
					message: 'Invalid login or password',
				},
			});
		}

		const payload = {
			id: user._id,
		};

		const token = jwt.sign(payload, secret, { expiresIn: '1h' });
		user.token = token;
		await user.save();

		res.status(200).json({
			status: 'success',
			code: 200,
			ResponseBody: {
				token,
				user: {
					_id: user._id,
					email: user.email,
					subscription: user.subscription,
				},
			},
		});
	} catch (error) {
		res.status(400).json({
			status: 'Bad Request',
			code: 400,
			ResponseBody: {
				message: error.message,
			},
		});
	}
};

const logout = async (req, res, next) => {
	const { _id } = req.user;
	try {
		const user = await userService.getUserById(_id);
		if (!user) {
			return res.status(401).json({
				status: 'error',
				code: 401,
				ResponseBody: {
					message: 'Unauthorized',
				},
			});
		}
		user.token = null;
		await user.save();
		return res.status(204).json({
			status: 'success',
			code: 204,
			ResponseBody: {
				message: 'Logout successful',
			},
		});
	} catch (error) {
		next(error);
	}
};

const currentUser = async (req, res, next) => {
	const { _id } = req.user;
	try {
		const user = await userService.getUserById(_id);
		if (!user) {
			return res.status(401).json({
				status: 'error',
				code: 401,
				ResponseBody: {
					message: 'Unauthorized',
				},
			});
		}
		return res.status(200).json({
			status: 'OK',
			code: 200,
			ResponseBody: {
				email: user.email,
				subscription: user.subscription,
			},
		});
	} catch (error) {
		next(error);
	}
};

const currentContacts = async (req, res, next) => {
	const { _id } = req.user;
	try {
		const user = await userService.getUserById(_id);
		if (!user) {
			return res.status(401).json({
				status: 'error',
				code: 401,
				ResponseBody: {
					message: 'Unauthorized',
				},
			});
		}
		const results = await contactService.getUserContacts(user._id);
		return res.status(200).json({
			status: 'success',
			code: 200,
			ResponseBody: {
				contacts: results,
			},
		});
	} catch (error) {
		next(error);
	}
};

const subscriptionStatus = async (req, res, next) => {
	const { _id } = req.user;
	try {
		const user = await userService.getUserById(_id);
		if (!user) {
			return res.status(401).json({
				status: 'error',
				code: 401,
				ResponseBody: {
					message: 'Unauthorized',
				},
			});
		}
		try {
			const { subscription } = req.body;
			if (!req.body) {
				return res.status(400).json({
					status: 'error',
					message: 'missing fields',
					code: 400,
				});
			}
			user.subscription = subscription;
			await user.save();

			return res.status(200).json({
				status: 'OK',
				code: 200,
				ResponseBody: {
					email: user.email,
					subscription: user.subscription,
				},
			});
		} catch (error) {
			next(error);
		}
	} catch (error) {
		next(error);
	}
};

const uploadAvatar = async (req, res, next) => {
	try {
		const { _id } = req.user;
		const user = await userService.getUserById(_id);
		if (!user) {
			return res.status(401).json({
				status: 'error',
				code: 401,
				ResponseBody: {
					message: 'Unauthorized',
				},
			});
		}

		const file = req.file;
		if (!file)
			return res
				.status(400)
				.json({ status: false, code: 400, message: 'Missing file' });

		const avatarPath = file.path;
		Jimp.read(avatarPath)
			.then(image => {
				return image.resize(250, 250);
			})
			.catch(error => console.log(error));

		const newAvatarName = `${nanoid()}_${user._id}_${file.originalname}`;
		const destinationPath = path.join(storeImageDir, newAvatarName);
		try {
			await fs.rename(avatarPath, destinationPath);
		} catch (error) {
			await fs.unlink(avatarPath);
			return next(error);
		}

		user.avatarURL = `/avatars/${newAvatarName}`;
		await user.save();
		return res.status(200).json({
			success: true,
			message: 'Avatar uploaded successfully',
			ResponseBody: {
				avatarURL: user.avatarURL,
			},
		});
	} catch (error) {
		next(error);
	}
};
const verifyUserEmail = async (req, res, next) => {
	const { _id } = req.user;
	try {
		const user = await userService.getUserById(_id);
		if (!user) {
			return res.status(401).json({
				status: 'error',
				code: 401,
				ResponseBody: {
					message: 'Unauthorized',
				},
			});
		}
		const { token } = req.params;

		if (!token) {
			return res.status(404).json({
				status: 'error',
				code: 404,
				ResponseBody: {
					message: 'There is no token in request params',
				},
			});
		}

		const userVerification = await userService.getUserByVerificationEmailLink(
			user._id,
			token
		);

		if (user.emailVerification === true) {
			return res.status(404).json({
				status: 'error',
				code: 404,
				ResponseBody: {
					message: `User ${user.email} already confirmed`,
				},
			});
		}

		if (!userVerification && user.emailVerification === false) {
			return res.status(404).json({
				status: 'error',
				code: 404,
				ResponseBody: {
					message: `User does not have a valid verification token`,
				},
			});
		}

		userVerification.emailVerification = true;
		userVerification.emailVerificiationToken = null;
		await userVerification.save();

		return res.status(200).json({
			status: 'OK',
			code: 200,
			ResponseBody: {
				message: `Email ${user.email} confirmed successfully`,
				verification: userVerification.emailVerification,
			},
		});
	} catch (error) {
		next(error);
	}
};
const resendViryficationEmail = async (req, res, next) => {
	const { _id } = req.user;
	try {
		const user = await userService.getUserById(_id);
		if (!user) {
			return res.status(401).json({
				status: 'error',
				code: 401,
				ResponseBody: {
					message: 'Unauthorized',
				},
			});
		}
		if (user.emailVerification) {
			return res.status(400).json({
				status: 'error',
				code: 400,
				ResponseBody: {
					message: `User ${user.email} already confirmed`,
				},
			});
		}

		const verificationToken = generateVerificationToken();
		user.emailVerificiationToken = verificationToken;

		try {
			sendVerificationEmail(user.email, verificationToken);

			return res.status(200).json({
				status: 'OK',
				code: 200,
				ResponseBody: {
					message: `Verify link send to the ${user.email}`,
				},
			});
		} catch (error) {
			next(error);
		}
	} catch (error) {
		next(error);
	}
};

const userController = {
	get,
	register,
	login,
	logout,
	currentUser,
	currentContacts,
	subscriptionStatus,
	uploadAvatar,
	verifyUserEmail,
	resendViryficationEmail,
};
export default userController;
