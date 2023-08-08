INSERT INTO Users (id, name,password, email, role)
VALUES
    (1, 'John Doe','JohnDue', 'john.doe@example.com', 'user'),
    (2, 'Jane Smith','JaneSmith', 'jane.smith@example.com', 'admin'),
    (3, 'Bob Johnson','BobJohnson', 'bob.johnson@example.com', 'user'),
    (4, 'Alice Brown','AliceBrown', 'alice.brown@example.com', 'viewer');


INSERT INTO Book (id, book_name)
VALUES
    (1, ' Government bond'),
    (2, 'Global bond'),
    (3, 'Convertible bonds'),
    (4, 'Corporate Treasury'),
    (5, 'Municipal Bonds');

INSERT INTO Book_User (bookid, userid)
VALUES
    (1, 1),
    (1, 2),
    (1, 3),
    (2, 2),
    (2, 4),
    (3, 1),
    (3, 2),
    (3, 4),
    (4, 1),
    (4, 2),
    (5, 2),
    (5, 4);

INSERT INTO Security (id, issuer, maturitydate, coupon, type, facevalue, status)
VALUES
(1,'Apple Corporation','2025-08-31','4.50','Corporate',1000,'Due'),
(2,'MH Road Corp.','2023-07-29','3.25','Government',500,'Pending'),
(3,'Mumbai Builders Ltd.','2030-05-20','2.75','Municipal',2000,'Due'),
(4,'LG Corp.','2023-05-01','5.00','Corporate',2000,'Completed'),
(5,'DHFL Ltd.','2035-03-08','6.00','Corporate',4000,'Due'),
(6,'Samsung Inc.','2032-11-30','3.75','Corporate',2500,'Due'),
(7,'Pune Road Corp.','2023-06-25','2.25','Municipal',5000,'Pending'),
(8,'UP Highway Developers Inc.','2031-09-10','4.00','Government',1500,'Due'),
(9,'Amazon Estates','2023-05-18','3.50','Corporate',3000,'Completed'),
(10,'Mumbai Tech ltd.','2023-04-01','3.90','Muncipal',1000,'Completed');


INSERT INTO Trade (id, bookid, counterpartyname, securityid, quantity, price, buysell, tradedate, settlementdate)
VALUES
(1, 1, 'Rakesh Kumar', 1, 10, 1000, 'Buy', '2023-08-01', NULL),
(2, 1, 'Ramesh Verma', 1, 50, 1000, 'Buy', '2023-07-29', NULL),
(3, 1, 'Verma Suresh', 1, 5, 1000, 'Buy', '2023-06-03', NULL),
(4, 2, 'Virendra Savant', 2, 10, 500, 'Buy', '2018-08-03', '2023-07-29'),
(5, 2, 'Saket Verma', 2, 20, 500, 'Buy', '2018-07-04', '2023-07-29'),
(6, 2, 'Ravindra Kamlesh', 2, 8, 500, 'Buy', '2018-10-05', NULL),
(7, 3, 'Sundar Ravindra', 3, 5, 2000, 'Buy', '2023-08-01', NULL),
(8, 3, 'Saket Verma', 3, 10, 2000, 'Buy', '2023-07-07', NULL),
(9, 3, 'Ravindra Kamlesh', 3, 12, 2000, 'Buy', '2023-10-09', NULL),
(10, 4, 'Ravi Surendra', 4, 5, 2000, 'Buy', '2019-08-02', '2023-05-01'),
(11, 4, 'Vijendra Sharma', 4, 9, 2000, 'Buy', '2019-07-08', '2023-05-01'),
(12, 4, 'Abhishkek Sunder', 4, 12, 2000, 'Buy', '2019-10-10', '2023-05-01'),
(13, 4, 'Gayan Nivasan', 4, 10, 2000, 'Buy', '2019-12-09', '2023-05-01'),
(14, 5, 'Sundar Gajesh', 5, 15, 4000, 'Buy', '2023-02-02', NULL),
(15, 5, 'Hirendra Verma', 5, 9, 4000, 'Buy', '2023-04-08', NULL),
(16, 5, 'Jagan Sharma', 5, 2, 4000, 'Buy', '2023-03-10', NULL),
(17, 5, 'Vijesh Ramnujan', 5, 12, 4000, 'Buy', '2023-10-09', NULL),
(18, 6, 'Vinayak Vajesh', 6, 5, 2500, 'Buy', '2022-02-04', NULL),
(19, 6, 'Rupesh Sharma', 6, 4, 2500, 'Buy', '2022-04-09', NULL),
(20, 6, 'Jagesh Verma', 6, 12, 2500, 'Buy', '2022-03-11', NULL),
(21, 6, 'Vijesh Ravi', 6, 2, 2500, 'Buy', '2022-10-09', NULL),
(22, 7, 'Rupendar Sharma', 7, 15, 5000, 'Buy', '2019-03-04', NULL),
(23, 7, 'Rakesh Verma', 7, 4, 5000, 'Buy', '2019-05-09', '2023-06-25'),
(24, 7, 'Ravi Sharma', 7, 2, 5000, 'Buy', '2019-04-11', '2023-06-25'),
(25, 8, 'Surendra Ravindra', 8, 15, 1500, 'Buy', '2023-01-04', NULL),
(26, 8, 'Raj Vishesh', 8, 4, 1500, 'Buy', '2023-02-09', NULL),
(27, 8, 'Vijendra Sharma', 8, 12, 1500, 'Buy', '2023-04-11', NULL),
(28, 9, 'Surendra Ravindra', 9, 5, 3000, 'Buy', '2019-12-04', '2023-05-18'),
(29, 9, 'Raj Vishesh', 9, 14, 3000, 'Buy', '2019-02-09', '2023-05-18'),
(30, 9, 'Vijendra Sharma', 9, 2, 3000, 'Buy', '2019-05-11', '2023-05-18'),
(31, 10, 'Suresh Ravi', 10, 15, 1000, 'Buy', '2017-12-04', '2023-04-01'),
(32, 10, 'Rajesh Verma', 10, 4, 1000, 'Buy', '2017-02-09', '2023-04-01'),
(33, 10, 'Vishesh Sharma', 10, 12, 1000, 'Buy', '2017-05-11', '2023-04-01');