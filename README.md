# Coders Profiles | Git + Github Practical.

- A basic project to allow colleagues learn git, github.

## Steps to follow
#### Get a copy
- Fork this repo
- Clone to your local computer
- Open index.html in browser and write down current total number of profiles.
- Click the "Add New Profile" button on the page, a modal comes up. Fill in your correct profile links
- Click "Generate Profile HTML" button on the modal form (modal closes, profile HTML ought to be available in the textarea but working at the moment). Next is a temporary workaround...

- Do not refresh page. On Chrome browser, right click and select "inspect" or do `CTRL + Shift + I`  to bring developers tool up.
- Click on "console" tab. Right-click on the console output '<dl class>.....' and copy as html. (You could have created this manually by simply copying a previous profile and editing the content. This oculd be prone to errors but there are many ways to skin a cat afterall. What's the fun of coding if not to automate boring stuff?
- Paste the copied HTML code below the last profile within the index.html code and save.
- Use profile counts noted up there to update the "Total Profiles (before)" section.


#### Relevant Git and Github Activities
- `git remote add upstream https://github.com/tonyfrenzy/coders-profiles-learn-git.git` Adds the original remote branch to your local repo so that you can check for (merged) updates from other colleagues
- `git remote add upstream git@github.com:tonyfrenzy/coders-profiles-learn-git.git` Use this if SSH is set up else skip.
- `git remote -v` to see your remote branches (origin and upstream).

- `git add .`
- `git commit -m 'your comit message'`
- `git fetch upstream master` to bring in the changes added by others or the updates available in the base remote branch.

- Take note of total number of profiles now (could have changed). Use it to update the "Total Profiles (after)" section.

- `git rebase ...` or `git merge ...` , your choice
- `git push` back to your remote branch
- create a pull request on github for your updates to be added to the original project.

- Go to here to see the live project.
