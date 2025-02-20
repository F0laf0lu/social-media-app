const mongoose = require("mongoose");

// Users Schema
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password_hash: { type: String, required: true },
  full_name: { type: String },
  bio: { type: String },
  profile_picture_url: { type: String },
  followers_count: { type: Number, default: 0 },
  following_count: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Posts Schema
const PostSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  media: [
    {
      type: { type: String },
      url: { type: String },
      thumbnail_url: { type: String },
      width: { type: Number },
      height: { type: Number },
      duration: { type: Number }
    }
  ],
  likes_count: { type: Number, default: 0 },
  comments_count: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Comments Schema
const CommentSchema = new mongoose.Schema({
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  content: { type: String, required: true },
  media: [
    {
      type: { type: String },
      url: { type: String },
      thumbnail_url: { type: String },
      width: { type: Number },
      height: { type: Number },
      duration: { type: Number }
    }
  ],
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Likes Schema
const LikeSchema = new mongoose.Schema({
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  comment_id: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  created_at: { type: Date, default: Date.now }
});

// Followers Schema
const FollowerSchema = new mongoose.Schema({
  follower_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  followee_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  created_at: { type: Date, default: Date.now }
});

// Notifications Schema
const NotificationSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  type: { type: String, required: true },
  source_user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  comment_id: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  is_read: { type: Boolean, default: false },
  created_at: { type: Date, default: Date.now }
});

module.exports = {
  User: mongoose.model("User", UserSchema),
  Post: mongoose.model("Post", PostSchema),
  Comment: mongoose.model("Comment", CommentSchema),
  Like: mongoose.model("Like", LikeSchema),
  Follower: mongoose.model("Follower", FollowerSchema),
  Notification: mongoose.model("Notification", NotificationSchema)
};
