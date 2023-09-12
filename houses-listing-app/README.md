# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3002) to view it in your browser.
THE FETCH URL IS SETUP TO WORK ON PORT: 3002. Make sure to "npm start" on PORT 3002.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# Rental-House-App
This app is about advertising / renting / buying a house. 


NAME: 
House/Apartment Listing App

DESCRIPTION: 
This app can be used to advertise/rent/buy a house or an apartment with information about the location, price, and pictures.

INSTALLATION INSTRUCTION: 
Global setup:
  Download and install Git
  git config --global user.email EMAIL_ADDRESS

Next steps:
  mkdir PROJECT_NAME
  cd PROJECT_NAME
  git init
  touch README
  git add README
  git commit -m 'first commit'
  git remote add origin git@github.com:USER/PROJECT_NAME.git
  git push origin master

Existing Git Repo?
  cd existing_git_repo
  git remote add origin git@github.com:USER/PROJECT_NAME.git
  git push origin master

You may also want to track the master branch for easy pull/push
  git config branch.master.merge refs/heads/master
  git config branch.master.remote origin

HOW TO USE THE APP
This is an app for listing a house for rent or sell

CONTRIBUTOR'S GUIDE

Make changes locally
Fork the repository.

Using GitHub Desktop:

Getting started with GitHub Desktop will guide you through setting up Desktop.
Once Desktop is set up, you can use it to fork the repo!
Using the command line:

Fork the repo so that you can make your changes without affecting the original project until you're ready to merge them.
Install or update to Node.js, at the version specified in .node-version. For more information, see the development guide.

Create a working branch and start with your changes!

Commit your update
Commit the changes once you are happy with them. Don't forget to self-review to speed up the review process⚡.

Pull Request
When you're finished with the changes, create a pull request, also known as a PR.

Fill the "Ready for review" template so that we can review your PR. This template helps reviewers understand your changes as well as the purpose of your pull request.
Don't forget to link PR to issue if you are solving one.
Enable the checkbox to allow maintainer edits so the branch can be updated for a merge. Once you submit your PR, a Docs team member will review your proposal. We may ask questions or request additional information.
We may ask for changes to be made before a PR can be merged, either using suggested changes or pull request comments. You can apply suggested changes directly through the UI. You can make any other changes in your fork, then commit them to your branch.
As you update your PR and apply changes, mark each conversation as resolved.
If you run into any merge issues, checkout this git tutorial to help you resolve merge conflicts and other issues.
Your PR is merged!
Congratulations 🎉🎉 The GitHub team thanks you ✨.

Once your PR is merged, your contributions will be publicly visible on the GitHub docs.

Now that you are part of the GitHub docs community, see how else you can contribute to the docs.

Windows
This site can be developed on Windows, however a few potential gotchas need to be kept in mind:

Regular Expressions: Windows uses \r\n for line endings, while Unix-based systems use \n. Therefore, when working on Regular Expressions, use \r?\n instead of \n in order to support both environments. The Node.js os.EOL property can be used to get an OS-specific end-of-line marker.
Paths: Windows systems use \ for the path separator, which would be returned by path.join and others. You could use path.posix, path.posix.join etc and the slash module, if you need forward slashes - like for constructing URLs - or ensure your code works with either.
Bash: Not every Windows developer has a terminal that fully supports Bash, so it's generally preferred to write scripts in JavaScript instead of Bash.
Filename too long error: There is a 260 character limit for a filename when Git is compiled with msys. While the suggestions below are not guaranteed to work and could cause other issues, a few workarounds include:
Update Git configuration: git config --system core.longpaths true
Consider using a different Git client on Windows
