SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE TABLE `trips` (
  `id` bigint(20) NOT NULL,
  `fname` varchar(32) NOT NULL,
  `lname` varchar(32) NOT NULL,
  `phone` varchar(13) NOT NULL,
  `email` varchar(255) NOT NULL,
  `adults` int(11) NOT NULL,
  `children` int(11) NOT NULL,
  `destination` int(11) NOT NULL,
  `dates` date NOT NULL,
  `activities` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `users` (
  `id` bigint(20) NOT NULL,
  `username` varchar(32) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `access` int(11) NOT NULL DEFAULT 0,
  `token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `users` (`id`, `username`, `email`, `password`, `access`, `token`) VALUES
(1, 'siteadmin', 'email@me.com', 'd616c582e0d3c3b5aaba1d36cb501bf9', 9, 'z4msvVcQcX4d7TAt6ETIgBMznlAyqUDFgyeJuE4UzRA8qK18bJGNmNGeIbyKWrZavQdBRgTXR15vuA5IemEKTvAP8nXBUGRS23CCZlQVba1sh1NQjLBy8bXC2NqOGknQ');

ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `users`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;
