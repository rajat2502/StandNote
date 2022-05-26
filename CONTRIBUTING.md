# Contributing guidelines

When contributing to this repository, please first discuss the change you wish to make via issue,
email, or any other method with the owners of this repository before making a change.

Please note we have a code of conduct, please follow it in all your interactions with the project.

### Setting things up

To set up the development environment, follow the instructions in [README.md](https://github.com/rajat2502/StandNote#how-to-get-started-locally).

### Finding something to work on

If you find something that interests you, feel free to open an issue and we’ll help get you started.

Alternatively, if you come across a new bug on the site, please file a new issue and comment if you would like to be assigned. The existing issues are tagged with one or more labels, based on the part of the website it touches, its importance etc., that can help you in selecting one.

### Instructions to submit code

Before you submit code, please get the issue assigned to you so we know you are working on it.

We have definite branching structure, please find the details in [README.md](https://github.com/rajat2502/StandNote#github-repository-structure). To submit code, follow these steps:

1.  Create a new branch off of master. Select a descriptive branch name.

    ```
      git remote add upstream git@github.com:rajat2502/StandNote.git
      git fetch upstream
      git checkout master
      git merge upstream/master
      git checkout -b your-branch-name
    ```

    We highly encourage using [black](http://www.github.com/psf/black)
    to format your backend code. It sticks to PEP8 for the most part and is in
    line with the rest of the repo. 
    
2.  Commit and push code to your branch:

    - Commits should be self-contained and contain a descriptive commit message.

      ### Rules for a great git commit message style

      - Separate subject from body with a blank line
      - Do not end the subject line with a period
      - Capitalize the subject line and each paragraph
      - Use the imperative mood in the subject line
      - Wrap lines at 72 characters
      - Use the body to explain what and why you have done something. In most cases, you can leave out details about how a change has been made.

      ### Example for a commit message

            Subject of the commit message

            Body of the commit message...
            ....

    - Please make sure your code is well-formatted and adheres to PEP8 conventions (for Python) and the airbnb style guide (for JavaScript).
    - Please ensure that your code is well tested.
    - We highly encourage to use `autopep8` to follow the PEP8 styling. Run the following command before creating the pull request:

            autopep8 --in-place --exclude env,docs --recursive .
            git commit -a -m “{{commit_message}}”
            git push origin {{branch_name}}

    - Also, For Pretifying the Frontend Code Use `HTML/JS/CSS Pretifier`.

3.  Once the code is pushed, create a pull request:

    - On your GitHub fork, select your branch and click “New pull request”. Select the relevant branch as the base branch and your branch in the “compare” dropdown.

    If the code is mergeable (you get a message saying “Able to merge”), go ahead and create the pull request. Once you are done, comment below each review comment marking it as “Done”. Feel free to use the thread to have a discussion about comments that you don’t understand completely or don’t agree with.

    - Once all comments are addressed, the maintainer will approve the PR.

4.  Once you get reviewed by a mentor and done with all the required changes, squash all the commits:

         git checkout <branch_name>
         git rebase -i HEAD~N (N is the number of commits to be squashed)

    - Then a screen will appear with all N commits having "pick" written in front of every commit.Change pick to s for the last `N-1` commits and let it be pick for the first one.
    - Press esc button and type ":wq" to save the change and close the screen. Now a new screen will appear asking you to change commit message. Change it accordingly and save it.

      ```
      git push origin <branch_name> --force
      ```

    - For further query regarding rebasing, visit https://github.com/todotxt/todo.txt-android/wiki/Squash-All-Commits-Related-to-a-Single-Issue-into-a-Single-Commit
    - Once rebasing is done, the reviewer will approve and merge the PR.

Congratulations, you have successfully contributed to Project StandNote!

## Pull Request Process

1. Ensure any install or build dependencies are removed before the end of the layer when doing a
   build.
2. Update the README.md with details of changes to the interface, this includes new environment
   variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this
   Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you
   do not have permission to do that, you may request the second reviewer to merge it for you.

## Code of Conduct

### Our Pledge

In the interest of fostering an open and welcoming environment, we as
contributors and maintainers pledge to making participation in our project and
our community a harassment-free experience for everyone, regardless of age, body
size, disability, ethnicity, gender identity and expression, level of experience,
nationality, personal appearance, race, religion, or sexual identity and
orientation.

### Our Standards

Examples of behavior that contributes to creating a positive environment
include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or
  advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others' private information, such as a physical or electronic
  address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a
  professional setting

### Our Responsibilities

Project maintainers are responsible for clarifying the standards of acceptable
behavior and are expected to take appropriate and fair corrective action in
response to any instances of unacceptable behavior.

Project maintainers have the right and responsibility to remove, edit, or
reject comments, commits, code, wiki edits, issues, and other contributions
that are not aligned to this Code of Conduct, or to ban temporarily or
permanently any contributor for other behaviors that they deem inappropriate,
threatening, offensive, or harmful.

### Scope

This Code of Conduct applies both within project spaces and in public spaces
when an individual is representing the project or its community. Examples of
representing a project or community include using an official project e-mail
address, posting via an official social media account, or acting as an appointed
representative at an online or offline event. Representation of a project may be
further defined and clarified by project maintainers.

### Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported by contacting the project team at standnote@gmail.com. All
complaints will be reviewed and investigated and will result in a response that
is deemed necessary and appropriate to the circumstances. The project team is
obligated to maintain confidentiality with regard to the reporter of an incident.
Further details of specific enforcement policies may be posted separately.

Project maintainers who do not follow or enforce the Code of Conduct in good
faith may face temporary or permanent repercussions as determined by other
members of the project's leadership.

### Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage], version 1.4,
available at [http://contributor-covenant.org/version/1/4][version]

[homepage]: http://contributor-covenant.org
[version]: http://contributor-covenant.org/version/1/4/
