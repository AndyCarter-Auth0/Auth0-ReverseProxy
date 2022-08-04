# Reverse Proxy NodeJS Test Application

This is a NodeJS application, to test a reverse proxy setup in Auth0

## What is Auth0?

Auth0 helps you to:

- Add authentication with multiple authentication sources, either social like Google, Facebook, Microsoft Account, LinkedIn, GitHub, Twitter, Box, Salesforce, among others, or enterprise identity systems like Windows Azure AD, Google Apps, Active Directory, ADFS or any SAML Identity Provider.
- Add authentication through more traditional username/password databases.
- Add support for linking different user accounts with the same user.
- Support for generating signed Json Web Tokens to call your APIs and flow the user identity securely.
- Analytics of how, when and where users are logging in.
- Pull data from other sources and add it to the user profile, through JavaScript rules.

## Create a free Auth0 account
- Go to Auth0 and click Sign Up.
- Use Google, GitHub or Microsoft Account to login.

## Application Features

- Authenticate to your Auth0 tenant via this application acting as a reverse proxy

This application is purely for testing, and is not production ready. Do not use in a production environment.

## Tech

This application uses a number of open source projects to work properly:

- [node.js]
- [Express]



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [node.js]: <http://nodejs.org>
   [express]: <http://expressjs.com>

## Installation

- Configure your Auth0 tenant for use with a reverse proxy - https://auth0.com/docs/customize/custom-domains/self-managed-certificates
- Update proxy.js with the settings provided by the above step

Requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and start the server.

```sh
npm i
npm start 
```

You can test the proxy is running correctly by attempting to access https://localhost/.well-known/openid-configuration (unless you have changed the URL you are running the proxy under)

## Authors

- [@andycarter](mailto:andy.carter@okta.com)


## License

This project is licensed under the MIT license. See the LICENSE file for more info.

