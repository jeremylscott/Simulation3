SELECT COUNT(*), p.id
FROM posts p
JOIN users2 u ON p.user_img = u.user_img
HAVING u.userid = $1;

