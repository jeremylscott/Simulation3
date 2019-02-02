UPDATE posts
SET title = $2
WHERE id = $1;

SELECT * FROM posts;