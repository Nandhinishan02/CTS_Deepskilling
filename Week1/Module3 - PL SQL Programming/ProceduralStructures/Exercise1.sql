-- ============================================
-- Exercise 3 : Stored Procedures
-- ============================================

-------------------------------------------------
-- Create Tables
-------------------------------------------------

CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerName VARCHAR2(50),
    AccountType VARCHAR2(20),
    Balance NUMBER(10,2)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    EmployeeName VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER(10,2)
);

-------------------------------------------------
-- Insert Sample Data
-------------------------------------------------

INSERT INTO Accounts VALUES (101,'John','Savings',10000);
INSERT INTO Accounts VALUES (102,'Alice','Savings',20000);
INSERT INTO Accounts VALUES (103,'Robert','Current',15000);
INSERT INTO Accounts VALUES (104,'Emma','Savings',25000);

INSERT INTO Employees VALUES (1,'David','IT',50000);
INSERT INTO Employees VALUES (2,'Sophia','HR',45000);
INSERT INTO Employees VALUES (3,'James','IT',60000);
INSERT INTO Employees VALUES (4,'Olivia','Finance',55000);

COMMIT;

-------------------------------------------------
-- Scenario 1
-- Process Monthly Interest
-------------------------------------------------

CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN

    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Monthly interest processed.');

END;
/

-------------------------------------------------
-- Execute Procedure
-------------------------------------------------

BEGIN
    ProcessMonthlyInterest;
END;
/

SELECT * FROM Accounts;

-------------------------------------------------
-- Scenario 2
-- Update Employee Bonus
-------------------------------------------------

CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(
    p_department IN VARCHAR2,
    p_bonus IN NUMBER
)
IS
BEGIN

    UPDATE Employees
    SET Salary = Salary + (Salary * p_bonus / 100)
    WHERE Department = p_department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Employee bonus updated.');

END;
/

-------------------------------------------------
-- Execute Procedure
-------------------------------------------------

BEGIN
    UpdateEmployeeBonus('IT',10);
END;
/

SELECT * FROM Employees;

-------------------------------------------------
-- Scenario 3
-- Transfer Funds
-------------------------------------------------

CREATE OR REPLACE PROCEDURE TransferFunds(
    p_fromAccount IN NUMBER,
    p_toAccount IN NUMBER,
    p_amount IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_fromAccount;

    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_fromAccount;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_toAccount;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE('Transfer Successful.');

    ELSE

        DBMS_OUTPUT.PUT_LINE('Insufficient Balance.');

    END IF;

END;
/

-------------------------------------------------
-- Execute Procedure
-------------------------------------------------

BEGIN
    TransferFunds(101,102,2000);
END;
/

SELECT * FROM Accounts;