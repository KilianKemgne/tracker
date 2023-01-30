const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    firstName : {
        type: String,
        required: true,
        unique: [true, "The firstname has already been taken."]
    },
    lastName : {
        type: String,
        required: true,
        unique: [true, "The lastname has already been taken."]
    },
    phoneNumber : {
        type: Number,
        required: true,
        unique: [true, 'Duplicate phone number found.']
    },
    emailAddress : {
        type: String,
        required: true,
        unique: [true, 'Duplicate email address found.']
    },
    // image : {
    //     data: Buffer,
    //     contentType: String
    // },
    image : {
        type: String,
    },
    password: {
        type: String,
        required: 'Password can\'t be empty',
        minlength: [8, 'Password must be atleast 8 character long']
    },
    address: {
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    aboutMe: {
        type: String,
    },
    saltSecret: String,
    fleets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "fleet"
    }]
});

// Custom validation for email
userSchema.path('emailAddress').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

userSchema.path('phoneNumber').validate((val) => {
    phoneRegex = /^(6[0-9]{8})$/;
    return phoneRegex.test(val);
}, 'Invalid phone Number.');

// Events
userSchema.pre('save', function (next) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });
});


// Methods
userSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

userSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}

const user = mongoose.model("user", userSchema);

module.exports = user;