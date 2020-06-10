const express = require("express");
const session = require("express-session");
const passport = require("passport");
const discordStrategy = require("./strategies/discordstrategy");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

const authRoute = require('./routes/auth');

app.use('/auth', authRoute);
app.use(session({
    secret: 'secret',
    cookie: {
        maxAge: 60000 * 60 * 24
    },
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session())

app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`);
});