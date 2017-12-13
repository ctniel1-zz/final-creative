
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var UserSchema = new Schema({
    username: { type: String, unique: true },
    email: String,
    high_score: {type: String, default: 0},
    hashed_password: String
});
mongoose.model('User', UserSchema);
