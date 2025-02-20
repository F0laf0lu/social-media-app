# social-media-app

These are the possible endpoints for the social media app

1. User Management

    - POST /api/users/register
      
    -  POST /api/users/login

    -  GET /api/users/:user_id

    -  PUT /api/users/:user_id
  
3. Post Management

    -  POST /api/posts
    -  GET /api/posts/:post_id
    -  GET /api/users/:user_id/posts
    -  DELETE /api/posts/:post_id

4. Media Upload
    -  POST /api/media/upload
  
5. Notifications
    -  GET /api/users/:user_id/notifications

6. Feed
    -  GET /api/users/:user_id/feed
      
7. Likes
    -  POST /api/posts/:post_id/like
    -  DELETE /api/posts/:post_id/like
      
8.  Comment

    -  POST /api/posts/:post_id/comment
    -  DELETE /api/posts/:post_id/comment
    -  GET /api/posts/:post_id/comments

10.  Follows
    -  POST /api/users/:user_id/follow
    -  DELETE /api/users/:user_id/unfollow

