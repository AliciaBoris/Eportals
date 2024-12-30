CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(255) NOT NULL,
    address TEXT NOT NULL,
    phone VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL,
    qualification VARCHAR(255) NOT NULL,
    duration VARCHAR(50) NOT NULL,
    sponsor VARCHAR(255) NOT NULL,
    submitted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


GRANT ALL PRIVILEGES ON eportalsdb.* TO 'root'@'localhost';
FLUSH PRIVILEGES;

SELECT * FROM students;