import passport from 'passport';
import userService from '../services/user.service.js';


 const auth = async (req, res, next) => {
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

export default auth;