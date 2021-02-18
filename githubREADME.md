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
