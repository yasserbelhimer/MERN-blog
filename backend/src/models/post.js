const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const post = new Schema({
    title: String,
	body: String,
});

const Post = mongoose.model('Post', post);

module.exports = Post;