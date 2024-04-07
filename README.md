# postgres-vs-mongodb
Performance benchmark comparisons between two of the most used RDBMS and NoSQL DBMS


# Postgres

1. "npm init - y" followed by "npm i postgres"
2. Get latest postgres docker image:    "docker pull postgres"
3. Run the following command to run the postgres container: 
    " docker run --name postgres-container -e POSTGRES_PASSWORD=mysecret -d -p 5432:5432 postgres "
4. List down the containers and pick up your container, and its ip address as host


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
(a) All of 1000 rows : 0.018906 seconds = 18.906 ms
(b) Self Join on 1000 rows : 0.811307 seconds = 811.307 ms
(c) Self Conditional Join: 0.011466 seconds = 11.466 ms