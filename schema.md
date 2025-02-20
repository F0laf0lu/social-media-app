## Social Media NoSql Schema Design


1. Users Collection

```{
  "_id": ObjectId
  "username": String
  "email": String
  "password_hash": String
  "full_name": String,
  "bio": String,
  "profile_picture_url": String,
  "followers_count": Number,
  "following_count": Number, 
  "created_at": Date,
  "updated_at": 
}
```
2.  Posts Collection

```
  {
    "_id": ObjectId
    "user_id": ObjectId
    "content": String
    "media": [
      {
        "type": String, // Type of media (e.g., "image", "video", "gif")
        "url": String, // URL to the media file
        "thumbnail_url": String, // URL to a thumbnail (for videos or high-res images)
        "width": Number, // Width of the media (in pixels)
        "height": Number, // Height of the media (in pixels)
        "duration": Number // Duration of the media in seconds (for videos/GIFs)
      }
    ],
    "likes_count": Number
    "comments_count": Number
    "created_at": Date,
    "updated_at": Date
  }
```

3.  Comments Collection

```
    {
    "_id": ObjectId, 
    "post_id": ObjectId, 
    "user_id": ObjectId, 
    "content": String,
    "media": [
      {
        "type": String, // Type of media (e.g., "image", "video", "gif")
        "url": String, // URL to the media file
        "thumbnail_url": String, // URL to a thumbnail (for videos or high-res images)
        "width": Number, // Width of the media (in pixels)
        "height": Number, // Height of the media (in pixels)
        "duration": Number // Duration of the media in seconds (for videos/GIFs)
      }
    ],
    "created_at": Date, 
    "updated_at": Date 
  }
```

4.  Likes Collection

```
    {
    "_id": ObjectId
    "post_id": ObjectId
    "comment_id": ObjectId
    "user_id": ObjectId
    "created_at": Date
  }
```


5.  Followers Collection

```
    {
    "_id": ObjectId,
    "follower_id": ObjectId,
    "followee_id": ObjectId, 
    "created_at": Date 
  }
```

6. Notifications Collection
```
  {
    "_id": ObjectId,
    "user_id": ObjectId,
    "type": String, 
    "source_user_id": ObjectId,
    "post_id": ObjectId, 
    "comment_id": ObjectId, 
    "is_read": Boolean, 
    "created_at": Date 
  }
```
