
drop table if exists Users;
CREATE TABLE Users (
    id INT NOT NULL PRIMARY KEY,
    name VARCHAR(250) NOT NULL,
    password VARCHAR(250) NOT NULL,
    email VARCHAR(250) NOT NULL,
    role VARCHAR(100) NOT NULL
);

drop table if exists Book;
CREATE TABLE Book (
    id INT NOT NULL PRIMARY KEY,
    book_name VARCHAR(250) NOT NULL
);

drop table if exists Book_User;
CREATE TABLE Book_User (
    bookid INT NOT NULL,
    userid INT NOT NULL
);


drop table if exists Security;
CREATE TABLE Security (
    id INT NOT NULL PRIMARY KEY,
    issuer VARCHAR(250) NOT NULL,
    maturitydate DATE NOT NULL,
    coupon DECIMAL(10, 2) NOT NULL,
    type VARCHAR(100) NOT NULL,
    facevalue DECIMAL(10, 2) NOT NULL,
    status VARCHAR(50) NOT NULL
);

drop table if exists Trade;
CREATE TABLE Trade (
    id INT NOT NULL PRIMARY KEY,
    bookid INT NOT NULL,
    counterpartyName VARCHAR(100) NOT NULL,
    securityid INT NOT NULL,
    quantity INT NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    buysell VARCHAR(10) NOT NULL,
    tradedate DATE NOT NULL,
    settlementdate DATE
);