## Homework Cheat sheet

***Homework will be assigned on Monday. On Wednesday, we will have an opportunity to review and ask questions about the HW. It will then be due the following Monday. All grading and feedback will be done by Wednesday.***

#### Before starting HW

1. Open up your repo in the Finder on your Mac

2. In your terminal, type `cd `. Please note: there should be a space after "cd". Do not press enter yet.

3. Click and drag the main repo folder (the one from step one) into the Terminal. Now press enter.

4. Pull down the latest code from GitHub
  ```
  git pull origin master
  ```

5. Back in the Finder, create a new folder (aka directory) inside your repo with a descriptive title. Ex: Week_03_HW.

6. Complete all HW inside this new directory

#### After you are done with HW

1. Follow steps 1-3 above to make sure your terminal is pointed to the correct directory.

2. Check the status of your git repo to make sure your HW is there. This is always a good habit to get into. You can use it at any time. It will tell you about any differences between where the code is now, vs where it was at the last commit.
  ```
  git status
  ```

3. Add your changes (tells git you're about to commit them)
  ```
  git add -A
  ```
*Note: the A must be capitalized*

4. Commit your changes
  ```
  git commit -m "Your commit message goes here"
  ```
*Note: Don't forget an opening quotation and closing quotation around your commit message. Commit messages should be a good description of what you just did. Ex: "Homework submission for week 3: CSS for Relaxr landing page"*

5. Push your changes to GitHub
  ```
  git push origin master
  ```

6. Go to your repo on GitHub. Navigate to the new directory. Copy and paste that URL into a Slack message to the TAs. This signifies you are done with the HW and it is ready to be reviewed.

#### Grading and feedback

*You should receive an email when your HW has been graded and another email when feedback has been provided . These emails will have links to review the grading and feedback. If you are having trouble finding these links, please contact a TA or the instructor*
