INSERT INTO "User" (id, name, email, role)
VALUES
    (1, 'John Doe', 'john.doe@example.com', 'user'),
    (2, 'Jane Smith', 'jane.smith@example.com', 'admin'),
    (3, 'Bob Johnson', 'bob.johnson@example.com', 'user'),
    (4, 'Alice Brown', 'alice.brown@example.com', 'user'),
    (5, 'Tom Wilson', 'tom.wilson@example.com', 'admin'),
    (6, 'Emily White', 'emily.white@example.com', 'user'),
    (7, 'Michael Lee', 'michael.lee@example.com', 'admin'),
    (8, 'Sophia Chen', 'sophia.chen@example.com', 'user'),
    (9, 'Daniel Kim', 'daniel.kim@example.com', 'user'),
    (10, 'Olivia Davis', 'olivia.davis@example.com', 'admin'),
    (11, 'James Rodriguez', 'james.rodriguez@example.com', 'user'),
    (12, 'Ava Martinez', 'ava.martinez@example.com', 'admin'),
    (13, 'William Nguyen', 'william.nguyen@example.com', 'user'),
    (14, 'Isabella Patel', 'isabella.patel@example.com', 'user'),
    (15, 'Alexander Lopez', 'alexander.lopez@example.com', 'user'),
    (16, 'Mia Garcia', 'mia.garcia@example.com', 'admin'),
    (17, 'Ethan Martinez', 'ethan.martinez@example.com', 'user'),
    (18, 'Amelia Kim', 'amelia.kim@example.com', 'user'),
    (19, 'Michaela Smith', 'michaela.smith@example.com', 'user'),
    (20, 'Elijah Johnson', 'elijah.johnson@example.com', 'admin');

INSERT INTO Book (id, book_name)
VALUES
    (1, 'Introduction to SQL'),
    (2, 'Data Science 101'),
    (3, 'Web Development Basics'),
    (4, 'Python Programming'),
    (5, 'Java for Beginners'),
    (6, 'Artificial Intelligence Essentials'),
    (7, 'Machine Learning Fundamentals'),
    (8, 'JavaScript for Web Developers'),
    (9, 'Database Design Principles'),
    (10, 'Advanced Python Techniques'),
    (11, 'Data Visualization Techniques'),
    (12, 'Algorithms and Data Structures'),
    (13, 'Operating System Concepts'),
    (14, 'Mobile App Development'),
    (15, 'Network Security Fundamentals'),
    (16, 'Cloud Computing Essentials'),
    (17, 'Big Data Analytics'),
    (18, 'UI/UX Design Principles'),
    (19, 'Digital Marketing Strategies'),
    (20, 'E-commerce Business Models');

INSERT INTO BookUser (bookid, userid)
VALUES
    (1, 1),
    (1, 2),
    (2, 3),
    (3, 1),
    (4, 4),
    (5, 5),
    (3, 2),
    (6, 6),
    (7, 7),
    (8, 8),
    (9, 9),
    (10, 10),
    (11, 11),
    (12, 12),
    (13, 13),
    (14, 14),
    (15, 15),
    (16, 16),
    (17, 17),
    (18, 18);

INSERT INTO Security (id, isin, cusip, issuer, maturitydate, coupon, type, facevalue, status)
VALUES
    (1, 'US1234567890', '123456789', 'US Treasury', '2025-08-31', 1.5, 'Government Bond', 1000, 'Active'),
    (2, 'GB0987654321', '987654321', 'UK Treasury', '2024-12-31', 2.0, 'Government Bond', 1000, 'Active'),
    (3, 'DE5678912345', '567891234', 'German Government', '2026-03-31', 1.0, 'Government Bond', 1000, 'Active'),
    (4, 'FR5432167890', '543216789', 'French Government', '2025-11-30', 1.8, 'Government Bond', 1000, 'Active'),
    (5, 'JP9876543210', '987654321', 'Japanese Government', '2024-09-30', 1.2, 'Government Bond', 1000, 'Active'),
    (6, 'US9876543210', '987654321', 'US Corporation', '2023-12-31', 3.0, 'Corporate Bond', 1000, 'Active'),
    (7, 'GB1234567890', '123456789', 'UK Corporation', '2024-06-30', 2.5, 'Corporate Bond', 1000, 'Active'),
    (8, 'DE0987654321', '987654321', 'German Corporation', '2025-04-30', 2.2, 'Corporate Bond', 1000, 'Active'),
    (9, 'FR5678912345', '567891234', 'French Corporation', '2026-09-30', 1.8, 'Corporate Bond', 1000, 'Active'),
    (10, 'JP5432167890', '543216789', 'Japanese Corporation', '2024-11-30', 2.0, 'Corporate Bond', 1000, 'Active'),
    (11, 'US1234509876', '123450987', 'US Municipality', '2030-12-31', 2.3, 'Municipal Bond', 1000, 'Active'),
    (12, 'GB0987612345', '987612345', 'UK Municipality', '2031-06-30', 2.8, 'Municipal Bond', 1000, 'Active'),
    (13, 'DE5678901234', '567890123', 'German Municipality', '2032-04-30', 2.0, 'Municipal Bond', 1000, 'Active'),
    (14, 'FR4321098765', '432109876', 'French Municipality', '2033-09-30', 2.5, 'Municipal Bond', 1000, 'Active'),
    (15, 'JP0987654321', '098765432', 'Japanese Municipality', '2034-11-30', 2.2, 'Municipal Bond', 1000, 'Active');


INSERT INTO Counterparty (id, name)
VALUES
    (1, 'ABC Corporation'),
    (2, 'XYZ Bank'),
    (3, 'PQR Investments'),
    (4, 'LMN Fund'),
    (5, 'DEF Company'),
    (6, 'GHI Bank'),
    (7, 'JKL Investments'),
    (8, 'MNO Fund'),
    (9, 'STU Corporation'),
    (10, 'VWX Bank'),
    (11, 'YZA Investments'),
    (12, 'BCD Fund'),
    (13, 'EFG Company'),
    (14, 'HIJ Bank'),
    (15, 'KLM Investments'),
    (16, 'NOP Fund'),
    (17, 'QRS Corporation'),
    (18, 'TUV Bank'),
    (19, 'WXY Investments'),
    (20, 'ZAB Fund');

INSERT INTO Trade (id, bookid, counterpartyid, securityid, quantity, status, price, buysell, Tradedate, settlementdate)
VALUES
    (1, 1, 2, 1, 100, 'Open', 101.25, 'Buy', '2023-08-01', '2023-08-03'),
    (2, 3, 1, 2, 50, 'Closed', 89.75, 'Sell', '2023-08-02', '2023-08-04'),
    (3, 2, 3, 4, 200, 'Open', 97.50, 'Buy', '2023-08-03', '2023-08-05'),
    (4, 4, 2, 3, 75, 'Open', 105.80, 'Buy', '2023-08-03', '2023-08-06'),
    (5, 5, 1, 5, 150, 'Closed', 98.25, 'Sell', '2023-08-04', '2023-08-06'),
    (6, 6, 2, 6, 300, 'Open', 104.50, 'Buy', '2023-08-05', '2023-08-07'),
    (7, 7, 3, 7, 50, 'Open', 75.60, 'Buy', '2023-08-06', '2023-08-08'),
    (8, 8, 1, 8, 100, 'Open', 80.30, 'Buy', '2023-08-07', '2023-08-09'),
    (9, 9, 2, 9, 250, 'Closed', 92.75, 'Sell', '2023-08-08', '2023-08-10'),
    (10, 10, 3, 10, 120, 'Open', 85.20, 'Buy', '2023-08-09', '2023-08-11'),
    (11, 11, 1, 11, 80, 'Closed', 100.40, 'Sell', '2023-08-10', '2023-08-12'),
    (12, 12, 2, 12, 300, 'Open', 110.10, 'Buy', '2023-08-11', '2023-08-13'),
    (13, 13, 3, 13, 50, 'Open', 95.80, 'Buy', '2023-08-12', '2023-08-14'),
    (14, 14, 1, 14, 180, 'Closed', 82.30, 'Sell', '2023-08-13', '2023-08-15'),
    (15, 15, 2, 15, 75, 'Open', 90.50, 'Buy', '2023-08-14', '2023-08-16'),
    (16, 16, 3, 1, 200, 'Open', 98.70, 'Buy', '2023-08-15', '2023-08-17'),
    (17, 17, 1, 2, 100, 'Open', 105.20, 'Buy', '2023-08-16', '2023-08-18'),
    (18, 18, 2, 3, 50, 'Closed', 88.90, 'Sell', '2023-08-17', '2023-08-19'),
    (19, 19, 3, 4, 150, 'Open', 92.10, 'Buy', '2023-08-18', '2023-08-20'),
    (20, 20, 1, 5, 80, 'Open', 79.30, 'Buy', '2023-08-19', '2023-08-21');
