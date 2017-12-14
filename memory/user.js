/*
* @Author: Jei
* @Date:   2017-12-11 12:20:29
* @Last Modified by:   Jei
* @Last Modified time: 2017-12-14 13:02:22
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  telegram: {
    type: Schema.ObjectId,
    ref: 'TelegramUser',
    unique: true,
  },
  group: {
    type: String,
    enum: ['admins','listeners','outsiders'],
    default: 'outsiders',
  }
});

module.exports = userSchema;
