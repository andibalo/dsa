-- You are given a table visits representing visits to several web pages. It has the following structure:
--   create table visits (
--       user_ipv4 varchar(15) not null,
--       web_page_ipv4 varchar(15) not null
--   );
-- Every row of the table visits contains information about a single visit: the user IP (user_ipv4) and web page IP (web_page_ipv4). Notice that some users may visit the same web page multiple times.
-- Your task is to write an SQL query that reveals the number of unique visitors for each of the web pages. Users and web pages are differentiated by their IPv4 addresses. You can assume that two IPv4 addresses differ if the strings representing them in the table differ.
-- Your query should return a table containing two columns: web_page_ipv4 (IP address of web page) and users_cnt (number of unique visitors to that web page) in this exact order. Every value in the web_page_ipv4 column should appear only once. The order of rows in the returned table does not matter.
-- Example:
-- Given:
--   visits:
--   +--------------+---------------+
--   |    user_ipv4 | web_page_ipv4 |
--   +--------------+---------------+
--   | 198.51.100.2 | 192.0.2.241   |
--   | 203.0.113.78 | 192.0.2.241   |
--   | 198.51.100.2 | 203.0.113.1   |
--   | 198.51.100.2 | 192.0.2.241   |
--   +--------------+---------------+

-- One of two possible correct outputs is:
--   +---------------+-----------+
--   | web_page_ipv4 | users_cnt |
--   +---------------+-----------+
--   |   192.0.2.241 | 2         |
--   |   203.0.113.1 | 1         |
--   +---------------+-----------+
-- The other possible correct answer can be created by swapping the rows in the above output table, as the order of rows does not matter.
-- Assume that:

-- • the visits table has at most 100 rows;
-- • all strings in the visits table are IPv4 addresses in dotted decimal octet format without leading zeros;
-- • an IPv4 address cannot be both the address of one of the users and the address of one of the web pages.

-- Copyright 2009–2025 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.

SELECT 
    web_page_ipv4, 
    count(distinct user_ipv4) as users_cnt
from visits 
group by web_page_ipv4
