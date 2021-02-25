# Coders Profiles | Git + Github Practical.

- A basic project to allow colleagues learn git, github.

## Steps to follow
#### Get a copy of the project
1. Fork this repo.

2. Clone to your local computer.

3. Open index.html in browser and write down current total number of profiles.

4. Click the "Add New Profile" button on the page, a modal comes up. Fill in your correct profile links.

5. Click "Generate Profile HTML" button on the modal form 
	(modal closes, profile HTML ought to be available in the textarea but not working at the moment). Next is a temporary workaround...
	1. Do not refresh page. On Chrome browser, right click and select "inspect" or do `CTRL + Shift + I`  to bring developers tool up.
	2. Click on "console" tab. Right-click on the console output '<dl class>.....' and copy as html. This could be created manually by copying a previous profile and editing the content. There are many ways to skin a cat but what's the fun of coding if not to automate boring stuff?

6. Paste the copied HTML code below the last profile within the index.html code and save.

7. Use profile counts noted up there to update the "Total Profiles (before)" section.


#### Relevant Git and Github Activities
8. 
	1. `git remote add upstream https://github.com/tonyfrenzy/coders-profiles-learn-git.git` Adds the original remote branch to your local repo so that you can check for (merged) updates from other colleagues
	- `git remote add upstream git@github.com:tonyfrenzy/coders-profiles-learn-git.git` Use this if SSH is set up else skip.
	2. `git remote -v` to see your remote branches (origin and upstream).
	3. `git add .`
	4. `git commit -m 'your comit message'`
	5. `git fetch upstream master` to bring in the changes added by others or the updates available in the base remote branch.
	6. Take note of total number of profiles now (could have changed). Use it to update the "Total Profiles (after)" section.
	7. `git rebase ...` or `git merge ...` , your choice
	8. `git push` back to your remote branch
	9. create a pull request on github for your updates to be added to the original project.

- View the live project here: https://flamboyant-shannon-69d651.netlify.app/
