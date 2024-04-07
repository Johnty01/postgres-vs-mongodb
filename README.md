# postgres-vs-mongodb
Performance benchmark comparisons between two of the most used RDBMS and NoSQL DBMS


# Postgres

1. "npm init - y" followed by "npm i postgres express"
2. Get latest postgres docker image:    "docker pull postgres"
3. Run the following command to run the postgres container: 
    " docker run --name postgres-container -e POSTGRES_PASSWORD=mysecret -d -p 5432:5432 postgres "
4. List down the containers (docker ps) and pick up your container, and its ip address as host


# Data dump in postgres

1. interactive view to postgres container: docker exec -it postgres-container bash
2. connect postgres: psql -h localhost -U postgres
3. \l : to see all databases
4. CREATE DATABASE performance
5. \c or \connect performance : to connect with "performance" db
6. CREATE TABLE test_one ( id SERIAL PRIMARY KEY, sequence INTEGER, constext TEXT );
7. INSERT INTO test_one (sequence, constext) SELECT generate_series(1000,2000), 'input random string to check the performance';
8. \dt
9. curl -s -o /dev/null -w "Response time : %{time_total} seconds\n" GET http://localhost:8240/data
Response times:
Command: 
"curl -s -o /dev/null -w "Response time : %{time_total} seconds\n" GET http://localhost:8240/data"
(a) All of 1000 rows : 0.018906 seconds = 18.906 ms
(b) Self Join on 1000 rows : 0.811307 seconds = 811.307 ms
(c) Self Conditional Join: 0.011466 seconds = 11.466 ms


# mongodb

1. "npm init - y" followed by "npm i mongoose express"
2. Get latest mongo docker image:    "docker pull mongo"
3. Run the following command to run the postgres container: 
    " docker run -d --name mongodb-instance -p 27017:27017 mongo "
4. docker exec -it mongodb-instance bash

# Data dump in mongodb

1. docker exec -it mongodb-instance bash
2. mongosh
3. use performance
4. for (let i = 0; i<1000; i++) {
... db.Test.insertOne({ sequence: i, constext: "random string" + i });
... }

5. db.Test.find().count();

7. Response times:
Command: 
"curl -s -o /dev/null -w "Response time : %{time_total} seconds\n" GET http://localhost:8280/test"
(a) All of 1000 rows : 0.021102 seconds = 21.102 ms
(b) Self Join : NA
