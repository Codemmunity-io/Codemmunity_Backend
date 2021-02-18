<img src="./CodemmunityLogo.png"/>

# Codemmunity Backend 
//TODO maybe a quick description of the project?
## Table of contents
- <a href="#quick-start">Quick start</a>
- <a href="#docker">Docker Basics</a>
- <a href="#docker-compose">docker-compose</a>
- <a href="#getting-started-with-collaboration-on-github">Github Basics</a>

## Quick start

This branch contains the basic boilerplate for an ExpressJs/NodeJs environment. Here is how to set it up on your machine:

- Pull the most recent code by running `git pull` in your terminal
- Run the setup shell scripts for your operating system (.ps1 is powershell)
- Run `node app.js` to start the server
- You can use `npm run dev` command for the server to update dynamically with file changes

## Docker
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

## Docker-Compose

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




### Issues

```
WARNING: The {VarName} variable is not set. Defaulting to a blank string.
```
If you see an error like this 

Your .env file is not configured properly. Please make sure it matches the format in .env.example

_Or_

The path to your .env file is incorrect, ensure the .env file is in the project root directory, and you're running docker-compose from within docker folder.



## Getting started with collaboration on github
### Clone the Repo
clone the repository 
```bash
git clone git@github.com:rohit0110/Codemmunity_Backend.git
```
then enter the repo directory
```bash
cd Codemmunity_Backend
```

### Sync local repo with github 
Pull any changes
```bash
git pull
```

### Local status
To see the current status of your local repo run:
```bash
git status
```
This will tell you any changes made that need to be added and committed.




### Branches 
Before you begin work on a new feature, create a new branch to work on:
```bash
git branch <Branch name>
```
Then switch to that branch
```bash
git checkout <Branch name>
```
To see the list of branches, and your current branch, run:
```bash 
git branch
```

### Committing changes
Once you have made your changes, add them to git
```bash
git add .
```
And commit the changes:
```
git commit -m "Commit message"
```

The commit message should be short but also explain the changes.

Then push your changes to the branch on github
```bash
git push
```

The first time you push a branch you will see an error with a command suggestion
```
fatal: The current branch github_docs has no upstream branch.
To push the current branch and set the remote as upstream, use

    git push --set-upstream origin <branch name>
```

Copy the command and run it

To change back to the main branch run:
```bash
git checkout main
```


### Forgot to make a new branch before making changes?

Stash your changes
```bash
git stash
```

This will safely store your changes and revert to the last pull

Follow the steps to create a new branch.

Then to get your changes back run:
```bash
git stash pop
```
