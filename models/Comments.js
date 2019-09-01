var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentsSchema = new Schema({
  title: String,
  body: String
});

var Comments = mongoose.model("Comments", CommentsSchema);

module.exports = Comments;
