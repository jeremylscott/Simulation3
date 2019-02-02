INSERT INTO users2 (username,password)
VALUES (${username},${password});

SELECT * FROM users2
WHERE username = ${username};