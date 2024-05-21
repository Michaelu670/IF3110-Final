-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: db:3306
-- Generation Time: Nov 15, 2023 at 05:23 AM
-- Server version: 8.1.0
-- PHP Version: 8.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `soapdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `api_key`
--

CREATE TABLE `api_key` (
  `api_id` varchar(100) NOT NULL,
  `username` varchar(1000) NOT NULL,
  `api_key` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `api_key`
--

INSERT INTO `api_key` (`api_id`, `username`, `api_key`) VALUES
('php_api_id', 'php_app', 'sSAd7f69ast7f6sdf796SSdaUHSAI78f8ufhaYAsuasdf87asduAUYsvasf7guyvAydbsfuhdjcxvj918DSda'),
('postman_api_id', 'postman', '89fwP9e8DF00e3feowiPSIwU12gASa'),
('rest_api_id', 'rest_service', '7tdfSmthU3iT5k6iSLMZUN3sXwfcKVH2RXWsZSwhtZTxXRXWugJcLk3C6juhza7LXaEyzJK1Jq4un58KC9Pre1hFof7hSvzDRsmaPBlKxc8RUcfDtERIQUMFlIBtqpK5');

-- --------------------------------------------------------

--
-- Table structure for table `log`
--

CREATE TABLE `log` (
  `log_id` int NOT NULL,
  `ip` varchar(50) NOT NULL,
  `method_called` varchar(100) NOT NULL,
  `parameters` text NOT NULL,
  `requester` varchar(100) NOT NULL,
  `endpoint` varchar(100) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `log`
--

INSERT INTO `log` (`log_id`, `ip`, `method_called`, `parameters`, `requester`, `endpoint`, `timestamp`) VALUES
(2, '192.168.176.1', 'getSecret', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-11 11:01:12'),
(3, '192.168.176.1', 'getSecret', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-11 11:01:27'),
(4, '192.168.176.1', 'getSecret', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-11 11:01:38'),
(5, '192.168.176.1', 'getSecret', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-11 11:14:44'),
(6, '192.168.192.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-11 12:15:43'),
(7, '192.168.192.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-11 12:16:26'),
(8, '192.168.192.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-11 12:17:54'),
(9, '192.168.192.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-11 12:19:08'),
(10, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-12 10:28:11'),
(11, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-12 13:59:57'),
(12, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-12 14:17:50'),
(13, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-12 14:17:56'),
(14, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-12 14:19:28'),
(15, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-12 14:22:27'),
(16, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-12 14:24:43'),
(17, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-12 14:25:34'),
(18, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-12 14:28:42'),
(19, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-12 14:28:54'),
(20, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:12:29'),
(21, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:12:34'),
(22, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:12:59'),
(23, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:24:09'),
(24, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:27:47'),
(25, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:32:39'),
(26, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:32:40'),
(27, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:46:02'),
(28, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:46:15'),
(29, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:48:50'),
(30, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:55:05'),
(31, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 02:56:36'),
(32, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 03:03:46'),
(33, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 03:09:24'),
(34, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 04:51:39'),
(35, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 04:52:23'),
(36, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:13:15'),
(37, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:18:47'),
(38, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:19:02'),
(39, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:19:53'),
(40, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:20:05'),
(41, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:28:20'),
(42, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:28:57'),
(43, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:29:36'),
(44, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:29:42'),
(45, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:32:26'),
(46, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:32:32'),
(47, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:32:53'),
(48, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:38:53'),
(49, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:39:16'),
(50, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:39:38'),
(51, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:40:57'),
(52, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:41:18'),
(53, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:42:11'),
(54, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:42:19'),
(55, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 05:43:19'),
(56, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 06:17:24'),
(57, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 06:17:59'),
(58, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 06:18:30'),
(59, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 06:19:03'),
(60, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 06:19:21'),
(61, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 06:20:39'),
(62, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 06:20:54'),
(63, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 06:21:21'),
(64, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 06:29:40'),
(65, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:06:19'),
(66, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:08:59'),
(67, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:09:09'),
(68, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:10:16'),
(69, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:11:18'),
(70, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:11:32'),
(71, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:11:38'),
(72, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:13:38'),
(73, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:14:11'),
(74, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:14:39'),
(75, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:14:46'),
(76, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:26:30'),
(77, '172.19.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-13 07:30:19'),
(78, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 09:37:02'),
(79, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 09:37:39'),
(80, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 09:43:08'),
(81, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 09:43:12'),
(82, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 09:44:34'),
(83, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 09:50:02'),
(84, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 09:54:45'),
(85, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 09:54:51'),
(86, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 10:05:23'),
(87, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 10:06:08'),
(88, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 10:15:01'),
(89, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 10:48:51'),
(90, '172.19.0.1', 'checkBalance', '', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 10:55:37'),
(91, '172.19.0.1', 'checkBalance', 'arg0: 4e6d784c-808c-11ee-b962-0242ac120002\n', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 12:56:30'),
(92, '172.19.0.1', 'checkBalance', 'arg0: 4e6d784c-808c-11ee-b962-0242ac120002\n', 'postman_api_id', 'WalletServiceImplService', '2023-11-13 12:56:37'),
(93, '172.22.0.1', 'checkBalance', '', 'php_api_id', 'WalletServiceImplService', '2023-11-14 10:39:19'),
(94, '172.22.0.1', 'createReport', 'arg0: 4e6d784c-808c-11ee-b962-0242ac120002\narg1: Example report for testing\n', 'postman_api_id', 'WalletServiceImplService', '2023-11-15 05:11:44'),
(95, '172.22.0.1', 'createReport', 'arg0: 4e6d784c-808c-11ee-b962-0242ac120002\narg1: Example report for testing\n', 'postman_api_id', 'WalletServiceImplService', '2023-11-15 05:12:29'),
(96, '172.22.0.1', 'createReport', 'arg0: 4e6d784c-808c-11ee-b962-0242ac120002\narg1: Example report for testing\n', 'postman_api_id', 'WalletServiceImplService', '2023-11-15 05:14:33'),
(97, '172.22.0.1', 'createReport', 'arg0: 4e6d784c-808c-11ee-b962-0242ac120002\narg1: Example report for testing\n', 'postman_api_id', 'WalletServiceImplService', '2023-11-15 05:15:19'),
(98, '172.22.0.1', 'createReport', 'arg0: 4e6d784c-808c-11ee-b962-0242ac120002\narg1: Example report for testing\n', 'postman_api_id', 'WalletServiceImplService', '2023-11-15 05:15:22');

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `report_id` int NOT NULL,
  `reporter_id` varchar(100) NOT NULL,
  `description` text NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `resolved` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`report_id`, `reporter_id`, `description`, `timestamp`, `resolved`) VALUES
(1, '4e6d784c-808c-11ee-b962-0242ac120002', 'Example id', '2023-11-15 05:06:00', 1),
(2, '4e6d784c-808c-11ee-b962-0242ac120002', 'Example report for testing', '2023-11-15 05:11:44', 0),
(3, '4e6d784c-808c-11ee-b962-0242ac120002', 'Example report for testing', '2023-11-15 05:12:29', 0),
(4, '4e6d784c-808c-11ee-b962-0242ac120002', 'Example report for testing', '2023-11-15 05:14:33', 0),
(5, '4e6d784c-808c-11ee-b962-0242ac120002', 'Example report for testing', '2023-11-15 05:15:19', 0),
(6, '4e6d784c-808c-11ee-b962-0242ac120002', 'Example report for testing', '2023-11-15 05:15:22', 0);

-- --------------------------------------------------------

--
-- Table structure for table `topup_request`
--

CREATE TABLE `topup_request` (
  `request_id` varchar(50) NOT NULL,
  `amount` bigint NOT NULL,
  `wallet_id` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `wallet`
--

CREATE TABLE `wallet` (
  `user_id` varchar(100) NOT NULL,
  `balance` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `wallet`
--

INSERT INTO `wallet` (`user_id`, `balance`) VALUES
('4e6d784c-808c-11ee-b962-0242ac120002', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `api_key`
--
ALTER TABLE `api_key`
  ADD PRIMARY KEY (`api_id`);

--
-- Indexes for table `log`
--
ALTER TABLE `log`
  ADD PRIMARY KEY (`log_id`),
  ADD KEY `method_called` (`method_called`),
  ADD KEY `requester` (`requester`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`report_id`),
  ADD KEY `reporter_id` (`reporter_id`);

--
-- Indexes for table `topup_request`
--
ALTER TABLE `topup_request`
  ADD PRIMARY KEY (`request_id`),
  ADD KEY `wallet_id` (`wallet_id`);

--
-- Indexes for table `wallet`
--
ALTER TABLE `wallet`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `log`
--
ALTER TABLE `log`
  MODIFY `log_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=99;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `report_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `log`
--
ALTER TABLE `log`
  ADD CONSTRAINT `log_ibfk_1` FOREIGN KEY (`requester`) REFERENCES `api_key` (`api_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `report_ibfk_1` FOREIGN KEY (`reporter_id`) REFERENCES `wallet` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Constraints for table `topup_request`
--
ALTER TABLE `topup_request`
  ADD CONSTRAINT `topup_request_ibfk_1` FOREIGN KEY (`wallet_id`) REFERENCES `wallet` (`user_id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
