# Getting Started 🚀


## Available Scripts

## In the project directory, you can run:

**Run Front End**

```
  yarn start
``` 

**Build MySQL image:**

```
  docker build -t mysql-image -f ./src/api/db/dockerfile .
```

**Run MySQL image:**

```
  docker run -d -v $(pwd)/src/api/db/data:/var/lib/mysql -p 3306:3306 --rm --name mysql-container mysql-image
``` 

**Do your database:**

```
  docker exec -i mysql-container mysql -uroot -proot < ./src/api/db/script.sql
```

**Run API**

```
  cd ./src/api 
  yarn dev
```