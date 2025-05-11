INSERT INTO users(name,lastname,email,username,password) VALUES('Juan', 'Sala', 'juan@gmail.com','jsalsa','$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS');
INSERT INTO users(name,lastname,email,username,password) VALUES('Pedro', 'Tomate', 'pedro@gmail.com','ptomate','$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS');
INSERT INTO users(name,lastname,email,username,password) VALUES('Diego', 'Pan', 'diego@gmail.com','dpan','$2a$10$DOMDxjYyfZ/e7RcBfUpzqeaCs8pLgcizuiQWXPkU35nOhZlFcE9MS');

INSERT INTO roles(name) VALUES('ROLE_ADMIN');
INSERT INTO roles(name) VALUES('ROLE_USER');


INSERT INTO users_roles(user_id,role_id) VALUES(1,1);
INSERT INTO users_roles(user_id,role_id) VALUES(2,1);
INSERT INTO users_roles(user_id,role_id) VALUES(3,2);




