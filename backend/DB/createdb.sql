drop database REISSUETRACKER;
create database REISSUETRACKER;
use REISSUETRACKER;

create table user(
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    local_id varchar(50) NOT NULL UNIQUE KEY,
    password varchar(50) NOT NULL,
    nickname varchar(50) NOT NULL,
    provider varchar(50) NOT NULL
);
create table label(
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    title varchar(20),
    description varchar(30),
    color varchar(10),
)
create issue_label(
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    issue_id int(10),
    label_id int(10),
)
create table issue(
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    title varchar(100) NOT NULL,
    isClosed boolean,
    milestone_id int,
)
create table milestone(
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    due_date DATE,
    title varchar(50),
    description varchar(50),
    isClosed boolean,
)
create table user_issue(
    id int(10) PRIMARY KEY AUTO_INCREMENT,
    issue_id int 
    user_id int
    isOwner boolean
)
