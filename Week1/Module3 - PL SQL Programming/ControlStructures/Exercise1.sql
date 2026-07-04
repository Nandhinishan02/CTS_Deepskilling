CREATE TABLE Customers (
    CustomerID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Age NUMBER,
    Balance NUMBER,
    IsVIP VARCHAR2(5)
);

CREATE TABLE Loans (
    LoanID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    InterestRate NUMBER(5,2),
    DueDate DATE,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

INSERT INTO Customers VALUES (101,'John',65,15000,'FALSE');
INSERT INTO Customers VALUES (102,'Alice',45,8000,'FALSE');
INSERT INTO Customers VALUES (103,'Robert',72,12000,'FALSE');
INSERT INTO Customers VALUES (104,'Emma',58,5000,'FALSE');
INSERT INTO Customers VALUES (105,'David',61,18000,'FALSE');

INSERT INTO Loans VALUES (1001,101,9.5,DATE '2026-07-15');
INSERT INTO Loans VALUES (1002,102,10.0,DATE '2026-08-10');
INSERT INTO Loans VALUES (1003,103,8.75,DATE '2026-07-20');
INSERT INTO Loans VALUES (1004,104,11.25,DATE '2026-09-05');
INSERT INTO Loans VALUES (1005,105,9.0,DATE '2026-07-30');

COMMIT;

-- ===========================================
-- Exercise 1 : Control Structures
-- ===========================================

-- Scenario 1
BEGIN
    FOR c IN (SELECT CustomerID, Age FROM Customers) LOOP

        IF c.Age > 60 THEN
            UPDATE Loans
            SET InterestRate = InterestRate - 1
            WHERE CustomerID = c.CustomerID;
        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Interest rates updated successfully.');

END;
/

-- Scenario 2
BEGIN
    FOR c IN (SELECT CustomerID, Balance FROM Customers) LOOP

        IF c.Balance > 10000 THEN
            UPDATE Customers
            SET IsVIP = 'TRUE'
            WHERE CustomerID = c.CustomerID;
        END IF;

    END LOOP;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('VIP status updated successfully.');

END;
/

-- Scenario 3
BEGIN
    FOR l IN (
        SELECT CustomerID, LoanID, DueDate
        FROM Loans
        WHERE DueDate BETWEEN SYSDATE AND SYSDATE + 30
    ) LOOP

        DBMS_OUTPUT.PUT_LINE(
            'Reminder: Loan ID '
            || l.LoanID
            || ' for Customer ID '
            || l.CustomerID
            || ' is due on '
            || TO_CHAR(l.DueDate, 'DD-MON-YYYY')
        );

    END LOOP;

END;
/