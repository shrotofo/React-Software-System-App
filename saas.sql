-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 24, 2023 at 01:25 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `saas`
--

-- --------------------------------------------------------

--
-- Table structure for table `module`
--

CREATE TABLE `module` (
  `MNAME` varchar(200) NOT NULL,
  `MCOST` int(200) NOT NULL,
  `MDESC` varchar(200) NOT NULL,
  `PIID1` int(200) NOT NULL,
  `MID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `module`
--

INSERT INTO `module` (`MNAME`, `MCOST`, `MDESC`, `PIID1`, `MID`) VALUES
('HCM', 100, 'Human Resource Management ', 1, 1),
('SCM', 200, 'Supply Chain Management ', 1, 2),
('FIN', 300, 'Financial Module', 1, 3),
('SOP', 400, 'Standard Operating Module', 1, 4),
('IPAD', 100, 'DIMENSION', 2, 5),
('AIRPOD', 200, 'EARBUD', 2, 6),
('Sports', 100, 'Sports Booking App', 3, 7),
('Food', 200, 'Food Recipe App', 3, 8),
('School', 300, 'School Student App', 3, 9);

-- --------------------------------------------------------

--
-- Table structure for table `module_register`
--

CREATE TABLE `module_register` (
  `GROUPID` int(200) NOT NULL,
  `MNAME` varchar(200) NOT NULL,
  `ID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `module_register`
--

INSERT INTO `module_register` (`GROUPID`, `MNAME`, `ID`) VALUES
(9000, 'HCM', 1),
(9000, 'SCM', 2),
(10, 'IPAD', 3);

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `PNAME` varchar(200) NOT NULL,
  `PLOGO` varchar(200) NOT NULL,
  `LCOST` int(200) NOT NULL,
  `PDESC` varchar(200) NOT NULL,
  `PIID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`PNAME`, `PLOGO`, `LCOST`, `PDESC`, `PIID`) VALUES
('Adler', 'image-1690197030438.jpeg', 100, 'A Software App', 1),
('Apple', 'image-1690197148466.jpeg', 200, 'Apple Software', 2),
('Mobile', 'image-1690197297688.jpeg', 200, 'A Mobile App', 3);

-- --------------------------------------------------------

--
-- Table structure for table `product_register`
--

CREATE TABLE `product_register` (
  `GroupID` int(200) NOT NULL,
  `ProductName` varchar(200) NOT NULL,
  `Time` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product_register`
--

INSERT INTO `product_register` (`GroupID`, `ProductName`, `Time`) VALUES
(9000, 'Adler', 10),
(10, 'Apple', 8);

-- --------------------------------------------------------

--
-- Table structure for table `register`
--

CREATE TABLE `register` (
  `Email` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `GroupID` int(200) NOT NULL,
  `GroupCode` varchar(200) NOT NULL,
  `GroupDesc` varchar(200) NOT NULL,
  `ContactPerson` varchar(200) NOT NULL,
  `Designation` varchar(200) NOT NULL,
  `MobileNumber` int(200) NOT NULL,
  `Users` int(200) NOT NULL,
  `Country` varchar(200) NOT NULL,
  `Address` varchar(200) NOT NULL,
  `City` varchar(200) NOT NULL,
  `Postal` int(200) NOT NULL,
  `RegisterDate` varchar(200) NOT NULL,
  `PToken` varchar(200) NOT NULL,
  `Type` varchar(200) NOT NULL DEFAULT 'Employee',
  `Status` int(200) NOT NULL DEFAULT 0,
  `Emailsent` varchar(200) NOT NULL,
  `Pay` varchar(200) NOT NULL DEFAULT 'Payment Due',
  `Lkey` varchar(200) NOT NULL,
  `ACTIVITY` varchar(200) NOT NULL DEFAULT 'INACTIVE',
  `CL` int(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `register`
--

INSERT INTO `register` (`Email`, `Password`, `GroupID`, `GroupCode`, `GroupDesc`, `ContactPerson`, `Designation`, `MobileNumber`, `Users`, `Country`, `Address`, `City`, `Postal`, `RegisterDate`, `PToken`, `Type`, `Status`, `Emailsent`, `Pay`, `Lkey`, `ACTIVITY`, `CL`) VALUES
('admin@gmail.com', 'admin', 0, '', '', '', '', 0, 0, '', '', '', 0, '', '', 'Admin', 1, '', '', '', '', 0),
('shrutikund@gmail.com', 'shruti', 9000, '123-DEF', 'BUSINESS COOPERATION', 'Shruti Kunder', 'Software', 974123456, 4, 'Qatar', 'Building 12 West Bay Street', 'Doha ', 32123, '2023/09/08', '', 'Employee', 1, '', 'Payment Due', 'U2FsdGVkX19JYFTKXH9iC1yAMHD/rzPhVY8P5CYgxtElCTwFc6sG3GboY7BoltRGL/Q9/mTo81WhPvjeekLDhD/Tsuj/LCPlcvq1z2lA9+aSF9I5fYtsiOKO5c0sEtFA', 'LOGIN', 2),
('rahul@gmail.com', 'rahul', 10, '123', 'consultant', 'Rahul Sharma', 'CEO', 975654152, 12, 'Brazil', 'Building 12 street 12', 'Brazil', 1245, '2023/04/05', '', 'Employee', 0, '', 'Payment Due', '', 'INACTIVE', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `Email` varchar(200) NOT NULL,
  `Password` varchar(200) NOT NULL,
  `GroupID` int(200) NOT NULL,
  `Name` varchar(200) NOT NULL,
  `Designation` varchar(200) NOT NULL,
  `Mobile` int(200) NOT NULL,
  `ID` int(11) NOT NULL,
  `ACTIVITY` varchar(200) NOT NULL DEFAULT 'INACTIVE'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`Email`, `Password`, `GroupID`, `Name`, `Designation`, `Mobile`, `ID`, `ACTIVITY`) VALUES
('arun@gmail.com', 'arun', 9000, 'Arun', 'student', 76756123, 1, 'INACTIVE');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `module`
--
ALTER TABLE `module`
  ADD PRIMARY KEY (`MID`);

--
-- Indexes for table `module_register`
--
ALTER TABLE `module_register`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`PIID`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `module`
--
ALTER TABLE `module`
  MODIFY `MID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `module_register`
--
ALTER TABLE `module_register`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `PIID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
