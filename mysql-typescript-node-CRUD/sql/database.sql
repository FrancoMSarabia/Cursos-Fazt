CREATE DATABASE node_mysql_ts;

CREATE TABLE posts(
    id int(11) not null AUTO_INCREMENT primary key, 
    title varchar(200) not null, 
    description text not null, 
    image_url text, 
    created_at timestamp DEFAULT CURRENT_TIMESTAMP
);

DESCRIBE posts