# auth0-example
Credits to @brentvatne for creating the original version two years ago.

## Setup
* Create your own application client on [Auth0](https://auth0.com).
* In the application settings, you must add the **redirect URL** for your Expo application that is coming from the `AuthSession` module (built-in in Expo).

  The structure of the URL is:
  `https://auth.expo.io/@your-username/your-expo-app-slug`

  Your Expo app slug can be found in the [app.json](app.json) file.

  You can get the full redirect URL by simply logging `AuthSession.getRedirectUrl()` in your own codebase.

## Example
Feel free to run the example and test it yourself, and read through [App.js](App.js) to better understand how it works.

If you are using NPM:
```
npm install
npm start
```

If you are using yarn:
```
yarn install
yarn start
```

Make sure to replace the `auth0ClientId` and `auth0Domain` values with the ones from your Auth0 application.

![Application Settings](images/image-1.jpeg)
