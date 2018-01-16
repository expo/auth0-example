# auth0-example

Try it at https://expo.io/@community/expo-auth0

## Setup

- Create your application client on https://auth0.com/
- In the application settings you need to add the [AuthSession docs](https://docs.expo.io/versions/latest/sdk/auth-session.html) callback url, which looks something like this: `https://auth.expo.io/@your-username/your-app-slug`. In the app code we have `https://auth.expo.io/@community/expo-auth0` because I am signed in as `@community` and the slug for this app is `expo-auth0`. You will need to replace `community` with your Expo username.
- Find references to `https://brentvatne.auth0.com/authorize` in `App.js` and replace it with the authorization endpoint for your Auth0 account, which you can see on your Auth0 dashboard.
