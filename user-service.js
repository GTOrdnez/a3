const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

let mongoDBConnectionString = process.env.MONGO_URL;
let Schema = mongoose.Schema;

let userSchema = new Schema({
    userName: { type: String, unique: true },
    password: String,
    favourites: [String],
    role: {
        type: String,
        required: true,
        enum: ['public', 'admin', 'editor'],
        default: 'public'
    }
});

let User;

// Connect to DB
module.exports.connect = function () {
    return new Promise((resolve, reject) => {
        let db = mongoose.createConnection(mongoDBConnectionString);

        db.on('error', err => reject(err));
        db.once('open', () => {
            User = db.model("users", userSchema);
            resolve();
        });
    });
};

// Register
module.exports.registerUser = function (userData) {
    return new Promise((resolve, reject) => {
        if (userData.password !== userData.password2)
            return reject("Passwords do not match");

        bcrypt.hash(userData.password, 10).then(hash => {
            userData.password = hash;

            let newUser = new User(userData);
            newUser.save()
                .then(() => resolve(`User ${userData.userName} successfully registered`))
                .catch(err => {
                    if (err.code == 11000)
                        reject("User Name already taken");
                    else
                        reject("There was an error creating the user: " + err);
                });
        });
    });
};

// Login
module.exports.checkUser = function (userData) {
    return new Promise((resolve, reject) => {
        User.findOne({ userName: userData.userName })
            .then(user => {
                if (!user) return reject("Unable to find user " + userData.userName);

                bcrypt.compare(userData.password, user.password).then(result => {
                    if (result) resolve(user);
                    else reject("Incorrect password for user " + userData.userName);
                });
            })
            .catch(() => reject("Unable to find user " + userData.userName));
    });
};

// Needed for JWT
module.exports.getUser = function (userName) {
    return User.findOne({ userName }).exec();
};

// Favourites
module.exports.getFavourites = id => User.findById(id).exec().then(u => u.favourites);
module.exports.addFavourite = (id, favId) => User.findByIdAndUpdate(id, { $addToSet:{ favourites:favId }},{ new:true }).exec().then(u=>u.favourites);
module.exports.removeFavourite=(id, favId)=>User.findByIdAndUpdate(id,{ $pull:{ favourites:favId }},{ new:true }).exec().then(u=>u.favourites);
