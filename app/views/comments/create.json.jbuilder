json.text @comment.text
json.image @comment.image.thumb.url
json.id @comment.id
json.created_at @comment.created_at.strftime("%Y-%m-%d %H:%M")
json.user_id @comment.user_id
json.post_id @comment.post_id
json.user_name @comment.user.name