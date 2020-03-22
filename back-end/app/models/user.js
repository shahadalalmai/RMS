const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  admin: { // this states the role of any user. True, he's an admin, otherwise, he's a normal user
    type: Boolean,
    required: true
  },
  hashedPassword: {
    type: String,
    required: true
  },
  token: String
}, {
  timestamps: true,
  toObject: {
    transform: (_doc, user) => {
      delete user.hashedPassword
      return user
    }
  }
})

userSchema.virtual('examples', {
  ref: 'Example',
  localField: '_id',
  foreignField: 'owner'
});

module.exports = mongoose.model('User', userSchema)
