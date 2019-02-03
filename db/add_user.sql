INSERT INTO users2 (username,password,user_img)
VALUES (${username},${password},${user_img});

SELECT * FROM users2
WHERE username = ${username};