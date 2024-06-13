CREATE DATABASE IF NOT EXISTS `taskmanagement` DEFAULT CHARACTER SET utf8 COLLATE
utf8_general_ci;

USE `taskmanagement`;

CREATE TABLE IF NOT EXISTS `accounts` (
	`id` int(11) NOT NULL AUTO_INCREMENT,
	`username` varchar(50) NOT NULL,
	`password` varchar(255) NOT NULL,
	`email` varchar(100) NOT NULL,
	`role` varchar(10) NOT NULL,
    `status` varchar(10) NOT NULL,
    `group_id` VARCHAR(255),
    CONSTRAINT accounts_pk PRIMARY KEY (id)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8 ;

ALTER TABLE `accounts` MODIFY `id` int(11) NOT NULL
AUTO_INCREMENT,AUTO_INCREMENT=2;

-- DROP TABLE accounts;

select * from accounts;

ALTER TABLE accounts
ADD CONSTRAINT unique_email UNIQUE (email);

INSERT INTO `accounts` (`username`, `password`, `email`, `role`, `status`) VALUES ('John', 'temp1234', 'john.testmail.com', 'admin', 'active');
INSERT INTO `accounts` (`username`, `password`, `email`, `role`, `status`) VALUES ('Joy', 'temp1234', 'joy.testmail.com', 'user', 'active');