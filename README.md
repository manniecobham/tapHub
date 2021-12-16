# InstaHub Front End Repository 2.0

IAM User Credential: https://docs.google.com/spreadsheets/d/1qviHTeI0xfotxIrZ8aKnkeshXo_z5ogc/edit#gid=20439718

Under Google Drive: WEBDEV(Web Development)/Front End Credentials/Siqing

For Front End Intern:
  1. AWS Course: [Coursera Course](https://www.coursera.org/specializations/aws-python-serverless-development?utm_source=gg&utm_medium=sem&utm_campaign=01-BrandedSearch-US&utm_content=01-BrandedSearch-US&campaignid=380484307&adgroupid=37885224444&device=c&keyword=coursera%20courses&matchtype=b&network=g&devicemodel=&adpostion=&creativeid=453161125901&hide_mobile_promo=&gclid=Cj0KCQiAqbyNBhC2ARIsALDwAsANiv_eB84-AYD4YBDb9D-K-QUWCpm12XOM2douhstfWJZqkPZdq2UaAu1OEALw_wcB)
  2. To use AWS Amplify, install it globally in your locall environment: [Amplify CLI](https://docs.amplify.aws/cli/)
  3. Log into one of the IAM users using credentials (locally)
  4. Log into AWS, go to Amplify -> front_end_2.0, go to backend, log into Amplify Studio. If it is your first time doing this, you have to go to Amplify Studio Settings in Amplify to give yourself an invitation link.
  5. You can either make changes to backend directly using AWS Amplify on your browser, or pull one of the copy to your locally machine and make those changes, then push it to the cloud. Further information please refer to the Amplify CLI link under (2.)
  6. [React](https://reactjs.org/)
  7. [React Apex Charts](https://apexcharts.com/docs/react-charts/)



# Create-react-app with AWS Amplify Auth 

This auth starter implements withAuthenticator HOC to provide a basic authentication flow for signing up signing in users as well as protected client side routing using AWS Amplify. Auth features: User sign up, User sign in, Multi-factor Authentication, User sign-out.

[View Demo](https://master.d2ka7y7551sk8n.amplifyapp.com/)

![Amplify Auth](src/images/auth.gif)

## Deploy with the AWS Amplify Console

The AWS Amplify Console provides hosting for fullstack serverless web apps. [Learn more](https://console.amplify.aws). Deploy this app to your AWS account with a single click:

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/aws-samples/create-react-app-auth-amplify)

The Amplify Console will fork this repo in your GitHub account, and then build and deploy your backend and frontend in a single workflow. Your app will be available at `https://master.appid.amplifyapp.com`.

## Run locally with the Amplify CLI

1. Clone the repo that was just forked in your account

  ```
  git clone git@github.com:<username>/create-react-app-auth-amplify.git

  cd create-react-app-auth-amplify && npm install
  ```

2. Import the backend environment deployed by the Amplify Console to your repo (the `amplify/team-provider.json` file contains information on all backend environments in your AWS account). The GIF below shows how you to copy the `amplify env import` command from the Amplify Console. 

<img src="https://github.com/aws-samples/create-react-app-auth-amplify/blob/master/src/images/import-backend.gif" width="800"/>

3. Paste this command into your terminal at the root of your repo. You should see the `amplify/team-provider.json` updated with a backend named `amplify`.

  ```
  amplify pull
  ```

![img](src/images/amplify-pull.mov)

4. Run locally

  ```
  npm start
  ```

Checkout Nader Dabit's [Complete Guide to User Authentication](https://dev.to/dabit3/the-complete-guide-to-user-authentication-with-the-amplify-framework-2inh).
