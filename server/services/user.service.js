import User from "../schemas/user.model.js";

const createUser = async ({
  email,
  password,
  firstName,
  verificationToken,
}) => {
  const newUser = new User({ email, firstName, verificationToken });
  newUser.setPassword(password);
  return newUser.save();
};

const getUserByEmail = async (email) => {
  return User.findOne({ email });
};

const getUserById = async (id) => {
  return User.findOne({ _id: id });
};

const getUserByVerificationToken = async (verificationToken) => {
  return User.findOne({ verificationToken });
};

const saveToken = (id, token) => {
  return User.findByIdAndUpdate(
    { _id: id },
    { $set: { token } },
    { new: true }
  );
};

const removeToken = (id) => {
  return User.findByIdAndUpdate(
    { _id: id },
    { $set: { token: null } },
    { new: true }
  );
};

const setUserAsVerified = (id) => {
  return User.findByIdAndUpdate(
    { _id: id },
    { $set: { isVerified: true } },
    { new: true }
  );
};

const service = {
  createUser,
  getUserByEmail,
  getUserById,
  getUserByVerificationToken,
  saveToken,
  removeToken,
  setUserAsVerified,
};

export default service;
