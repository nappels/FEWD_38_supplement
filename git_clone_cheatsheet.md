Notes on cloning a repo, making a commit, and pushing it to GitHub.

1. Create a new folder somewhere on your computer where will you will “clone” a new repo into. This is a repo that you should have already creating on GitHub.com.
2. In your terminal, type “cd “ (and then a space). Don’t press enter yet.
3. Click and drag the folder you created in step 1 into the terminal. Now press enter. This should bring the terminal into the new directory you created in step 1.
4. Visit the repo you created on GitHub.com. (From your profile page on GitHub, click on a tab called Repositories. You should see a link to it there).
5. You will find the cloning link right next to a button that says "HTTPS". Copy this link.
6. Back in the terminal type:
```
git clone [paste URL to GitHub repo here]
```
7. Press enter. This should now create a new directory inside the one you created in step 1. cd into this new directory just like we did in steps 2 and 3.
8. In your finder, place the the cookie recipe folder I sent out into repo (the new directory that appeared last step).
9. Back in the terminal, add the new files to be committed:
```
git add -A
```
10. Now let's commit the new files:
```
git commit -m "Added cookie recipe starter code."
```
11. Now, we push our commit to GitHub:
```
git push origin master
```
12. That's all! Visit the repo on GitHub, refresh the page, and you should now see the cookie recipe folder there.
