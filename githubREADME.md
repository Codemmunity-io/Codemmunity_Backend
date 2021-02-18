# Getting start with collaboration on github
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

### Branches 
Before you begin work on a new feature, create a new branch to work on:
```bash
git branch <Branch name>
```
Then switch to that branch
```bash
git checkout <Branch name>
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

The first time you push a branch you will see an error with a command suggestion

copy and run it


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
