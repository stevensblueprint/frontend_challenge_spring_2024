# Blueprint Frontend Challenge

## Challenge Description

Thank you for taking the time to apply to the Blueprint Project Teams and participating in this frontend challenge. In this challenge you will be creating the following features in a simple React application:

1. A form that takes 3 fields: Name, Email, and Graduation Year. Users should be able to enter their information in these fields. When they press submit, the information they entered should show in a table below the form.

2. Display JSON data: Fetch from local JSON file called `content.json` inside of the `src/assets/data` folder. It will contain all of the text needed to be displayed (apart from the form). You can import the json data directly into your component and display it according to the Figma Design File below.

You will do all of this in a branch within a forked repository and then open a Pull Request to your OWN forked repository to submit. This will help familiarize you with some of the key features of git and GitHub. There are more details in the Getting Started section regarding creating forks and branches.

You can refer to this [Figma Design File](https://www.figma.com/file/CYHTDweja1x3V58aNAfSfZ/Blueprint-Frontend-Assessment-S24?type=design&node-id=1%3A3&mode=design&t=MvITKiSPF3MXzYek-1) for a better representation of what we would like to see. You do NOT have to implement the designs exactly. This Figma is provided as a general structure - think of it as what you might receive from a designer and it is up to you to implement it. Being able to implement designs is a core skill of our project team members so we hope you try your best!

You can use any additional libraries that you like and you can perform styling however you wish (Vanilla CSS, Tailwind, SCSS, etc.). If you have any questions about this challenge, please do not hesitate to reach out to Shawn Aviles (saviles@stevens.edu) or Christian Apostol (caposto1@stevens.edu). You can also send us messages on the discord too!

## Getting Started

You will need *git* and *Node* installed in order to work on this project. You can read this [Blueprint Developer Guide](https://wiki.sitblueprint.com/books/onboarding/page/blueprint-developer-setup) for details on how to download and install these softwares. You will also need to make an account on [GitHub](https://github.com) in order to access the code repository. Once you have everything installed you can follow these steps:

### Step 1: Fork the Repository

The first step is to fork the repository that contains the Frontend Challenge starter code. This creates a copy of the repository in your own GitHub account that you can work on without affecting the original.

To fork the repository:

1. Navigate to the repository on GitHub (https://github.com/stevensblueprint/frontend-application)
2. Click the "Fork" button in the top right corner of the page
3. Select your GitHub account as the destination for the fork

### Step 2: Clone the Repository

Next, you need to clone the repository to your local machine. This creates a local copy of the repository that you can make changes to.

To clone the repository:

1. Open a terminal window
2. Navigate to the directory where you want to clone the repository
3. Run the following command:
```git clone <repository-url>```
Replace `<repository-url>` with the URL of your forked repository. The repository URL can be found by pressing the green 'Code' button and copying the HTTPS link. It will be a github link that includes your github username and forked repo name. 

### Step 3: Create a New Branch

Before you make changes to the HTML file, you should create a new branch. This allows you to make changes without affecting the main branch of the repository. All development work for our teams exists in branches and are later merged into main with Pull Requests!

To create a new branch:

1. Navigate to the cloned repository directory in your terminal
2. Run the following command:
```git checkout -b feature/yourName```
Replace `yourName` with your first name. So your full branch name could be ```feature/shawn```.

### Step 4: Download Dependencies and Run Project

1. Run the following command:
```npm install```
This will install all of the proper node modules that are needed to run the base code.
2. Run the following command:
```npm run dev```
Your application should now be viewable at http://localhost:5173/. You are now ready to start developing - good luck! Don't forget to look at the Figma for guidance on what should be in your submission.

### _Optional_ Extra Features
If you have additional time and want to add some extra features to your application feel free to add one or more following. Keep in mind, these are not neccessary by any means, just cool add-ons.

1. Componentization: Ensure your Form and Content blocks are their own respective components, and they are used in the main App file.
2. Form Validation: On form submission, if a field is invalid, an error message specifying which fields were incorrect will appear. Empty fields should throw an error too. How you want to display the message is up to you! 
3. Animations: On form submission you can include a loading spinner and/or a load-in animation for the data populating the table

## Submission

1. Commit your code to your branch on your forked repository.
2. Create a Pull Request (PR). Steps to do that can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request).
3. Email a link to your Pull Request (PR) to **sit.blueprint@gmail.com**. Please make the subject of your email "Frontend Challenge: YOURNAME" i.e "Frontend Challenge: Christian Apostol". 

This challenge is due on March 28 @ 11:59 P.M. Challenges will be discussed during the 3rd round of applications: Coffee Chats. Thank you for your time!

Adding Vercel.
