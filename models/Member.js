const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    karyakarni: {
        type: String,
        required: true
    },
    familyID: {
        type: String,
        required: true,
        unique: true
    },
    contact: {
        type: String,
        default: ''
    },
    DOB: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: ''
    },
    relation: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    }
},
{
    toJSON: {
        transform(doc, ret) {
            ret.id = ret._id;
            delete ret._id;
            delete ret.__v;
        }
    }
}
);

const Member = mongoose.model('Member', memberSchema);

module.exports = Member;