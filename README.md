# postgres-vs-mongodb
Performance benchmark comparisons between two of the most used RDBMS and NoSQL DBMS


# Postgres

1. "npm init - y" followed by "npm i postgres"
2. Get latest postgres docker image:    "docker pull postgres"
3. Run the following command to run the postgres container: 
    " docker run --name postgres-container -e POSTGRES_PASSWORD=mysecret -d -p 5432:5432 postgres "
4. List down the containers and pick up your container, and its ip address as host