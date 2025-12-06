const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const passport = require("passport");
const jwt = require("jsonwebtoken");
const { Strategy: JwtStrategy, ExtractJwt } = require("passport-jwt");

const userService = require("./user-service.js");

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());
app.use(passport.initialize());

// JWT Strategy Setup
const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET
};

passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    userService.getUser(jwt_payload.userName)
        .then(user => done(null, user))
        .catch(err => done(null, false));
}));

// Middleware to protect routes
const authenticate = passport.authenticate("jwt", { session: false });


// ------------------ ROUTES ------------------

// REGISTER
app.post("/api/user/register", (req, res) => {
    userService.registerUser(req.body)
        .then(msg => res.json({ message: msg }))
        .catch(msg => res.status(422).json({ message: msg }));
});

// LOGIN (return JWT!)
app.post("/api/user/login", (req, res) => {
    userService.checkUser(req.body)
        .then((user) => {

            // 1. Create payload with _id and userName
            const payload = {
                _id: user._id,
                userName: user.userName
            };

            // 2. Sign JWT using secret from .env
            const jwt = require("jsonwebtoken");
            const token = jwt.sign(payload, process.env.JWT_SECRET);

            // 3. Return with token included
            res.json({
                message: "login successful",
                token: token
            });

        }).catch(msg => {
        res.status(422).json({ "message": msg });
    });
});



// ---------- Protected Routes (require JWT) ----------

app.get("/api/user/favourites", passport.authenticate("jwt", { session: false }), (req, res) => {
    userService.getFavourites(req.user._id)
        .then(data => res.json(data))
        .catch(msg => res.status(422).json({ error: msg }));
});

app.put("/api/user/favourites/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    userService.addFavourite(req.user._id, req.params.id)
        .then(data => res.json(data))
        .catch(msg => res.status(422).json({ error: msg }));
});

app.delete("/api/user/favourites/:id", passport.authenticate("jwt", { session: false }), (req, res) => {
    userService.removeFavourite(req.user._id, req.params.id)
        .then(data => res.json(data))
        .catch(msg => res.status(422).json({ error: msg }));
});


// ------------------ START SERVER ------------------

userService.connect()
    .then(() => app.listen(HTTP_PORT, () => console.log("API listening on: " + HTTP_PORT)))
    .catch(err => {
        console.log("unable to start server: " + err);
        process.exit();
    });
