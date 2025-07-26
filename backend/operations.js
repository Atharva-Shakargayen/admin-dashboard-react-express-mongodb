const db = require('./usermodel');

const createUser = (user) => {
    const newUser = new db(user);
    return newUser.save();
};

const getAllUsers = () => {
    return db.find();
}
module.exports = { createUser ,getAllUsers};
