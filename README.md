# Coders Profiles | Git + Github Practical.

- A basic project to allow colleagues learn git, github.

## Steps to follow
#### Get a copy of the project
1. Fork this repo.

2. Clone to your local computer.

3. Open **index.html** in a desktop browser.

4. Click the "Add New Profile" button on the page, a modal comes up. Fill in your correct profile links.

5. Click "Generate Profile HTML" button on the modal form (modal closes, profile HTML ought to be available in the textarea but not working at the moment). Below is a temporary workaround...
	1. Do not refresh page. On Chrome browser, right click and select "inspect" or do `CTRL + Shift + I`  to bring developers tool up.
	2. Click on "console" tab. Right-click on the console output '<dl class>...</dl>' and copy as html. This could be created manually by copying a previous profile and editing the content. What's the fun of coding if not to automate boring stuff?

6. Paste the copied HTML code below the last profile within the **index.html** file and save.


#### Relevant Git and Github Activities
7. Below are the relevant git steps to 
	1. `git remote add upstream https://github.com/tonyfrenzy/coders-profiles-learn-git.git` _Adds the original remote branch to your local repo so that you can check for (merged) updates from other colleagues._
	- `git remote add upstream git@github.com:tonyfrenzy/coders-profiles-learn-git.git` _Use this instead if SSH is set up else skip._
	2. `git remote -v` _To see your remote branches (origin and upstream)._
	3. `git add .`
	4. `git commit -m 'your commit message'`
	5. `git fetch upstream master` _To bring in the changes added by others or the updates available in the base remote branch._
	6. `git rebase ...` or `git merge ...` , _your choice._
	7. `git push` back to your remote branch
	8. Create a pull request on github for your updates to be added to the original project.


#### Live Project
- View the live project here: https://flamboyant-shannon-69d651.netlify.app/
