# Docker
##### Get Docker [here](https://docs.docker.com/get-docker/)
To build the image with Docker run:
```bash
docker build  -t codemmunity_backend/codemmunity_backend .
```
```docker build``` - use docker to build

``` -t codemmunity_backend/codemmunity_backend``` - tag it _\<ImageName\>/\<ImageTag\>_

``` . ``` - using the Dockerfile in the current directory

This will build it using environment variables in the .env file

<br/>

To run the Docker Image:
```bash
docker run -p 8080:8080  -t codemmunity/codemmunity_backend -d
```

```docker run``` - run a docker image

```-p 8080:8080``` - expose port 8080 of the container to 8080 of your machine

```-t codemmunity_backend/codemmunity_backend``` - with this name

```-d``` - run container in background, detatch

<br/>

To see your running docker containers run:
```bash
docker ps
```

<br/> 

To stop a container run:
```bash
docker container stop <2 or more characters of the containerID>
```
<br/>

To remove a container run:
```bash
docker container rm <2 or more characters of the containerID>
```