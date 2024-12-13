# MyBookmark
Nest.js website

## Step by step guide

#### Install Node first from the node website then verify.
```
node -v
```

#### Install nest js and verify
```
sudo npm i -g @nestjs/cli
nest -v
```

#### Create nest js project with yarn package manager
```
npm new project-name
```

#### Run the project to check if it's working or not
```
yarn start:dev
```

#### Create a module with service and controller
Commands will automatically import the module name in the main app module.</br>
Some test file will be generated - but we will not needed them for now.
```
nest g module auth
nest g controller auth
nest g provider auth
```

#### Test sample endpoints
Here I have written 2 [sample](https://github.com/gobinda1547/MyBookmark/commit/0f3c239877a9b4b88b9613f2582eec520c541775) endpoints. (auth/signup & auth/signin)

Now run the server by using yarn and test both post request by using 'insomnia' app.
```
http://localhost:3333/auth/signup
http://localhost:3333/auth/signin
```

## Install a database via docker

#### Check if we have docker and docker-compose already
If you don't have docker already, then install it from server
```
docker -v
docker-compose -v
```

Now create the docker compose yml [my example]() and run it using below command.
```
docker compose up dev-db -d
```
According to my docker-compose.yml file, the above command wil run a database, named 'dev-db' inside a container with postgres image. You can check the log or the container via docker desktop application. First time the postgres image will be unavailable, but docker compose will take care of that.






```

```






```

```






```

```






```

```






```

```






```

```






```

```






```

```






```

```
