# Docker
___Get Docker [here](https://docs.docker.com/get-docker/)___

__To build the image with Docker run:__
```bash
docker build  -t codemmunity_backend/codemmunity_backend .
```
```docker build``` - use docker to build

``` -t codemmunity_backend/codemmunity_backend``` - tag it _\<ImageName\>/\<ImageTag\>_

``` . ``` - using the Dockerfile in the current directory

This will build it using environment variables in the .env file

<br/>

__To run the Docker Image:__
```bash
docker run -p 8080:8080  -t codemmunity/codemmunity_backend -d
```

```docker run``` - run a docker image

```-p 8080:8080``` - expose port 8080 of the container to 8080 of your machine

```-t codemmunity_backend/codemmunity_backend``` - with this name

```-d``` - run container in background, detatch

<br/>

__To see your running docker containers run:__
```bash
docker ps
```

<br/> 

__To stop a container run:__
```bash
docker container stop <First 2 or more characters of the containerID>
```
<br/>

__To remove a container run:__
```bash
docker container rm <First 2 or more characters of the containerID>
```



# Docker-Compose

___Get Docker Compose [here](https://docs.docker.com/compose/install/)___

_Ensure your environment variables are set in your .env file_

__To start MYSQL Container with docker-compose:__
```bash
cd docker
docker-compose --env-file ../.env up -d
```

```docker-compose [..] up``` - start the docker compose services

```--env-file ../.env``` - use the environment variables from our .env file in the root directory

```-d``` - detatch, run in the background

<br/>

__To stop MYSQL Container:__
```bash
docker-compose --env-file ../.env down
```




# Issues

```
WARNING: The {VarName} variable is not set. Defaulting to a blank string.
```
If you see an error like this 

Your .env file is not configured properly. Please make sure it matches the format in .env.example

_Or_

The path to your .env file is incorrect, ensure the .env file is in the project root directory, and you're running docker-compose from within docker folder.