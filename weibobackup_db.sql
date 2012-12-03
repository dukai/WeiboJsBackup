-- phpMyAdmin SQL Dump
-- version 3.2.4
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: Dec 03, 2012 at 05:42 AM
-- Server version: 5.1.41
-- PHP Version: 5.3.17

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `weibobackup_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `weibo`
--

CREATE TABLE IF NOT EXISTS `weibo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mid` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `dateline` int(11) NOT NULL,
  `comefrom` varchar(20) NOT NULL,
  `backupid` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=79 ;

-- --------------------------------------------------------

--
-- Table structure for table `weibos`
--

CREATE TABLE IF NOT EXISTS `weibos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `mid` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `dateline` bigint(13) NOT NULL,
  `comefrom` varchar(20) NOT NULL,
  `backupid` varchar(50) NOT NULL,
  `datetime` varchar(50) NOT NULL,
  `img` varchar(255) NOT NULL,
  `refer_content` text NOT NULL,
  `refer_datetime` varchar(50) NOT NULL,
  `refer_comefrom` varchar(20) NOT NULL,
  `refer_img` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 AUTO_INCREMENT=930 ;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
