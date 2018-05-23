# auth0-example

Try it at https://expo.io/@community/expo-auth0

## Setup

1. Create your application client on https://auth0.com/
2. In the application settings you need to add the [AuthSession docs](https://docs.expo.io/versions/latest/sdk/auth-session.html) callback url, which looks something like this: `https://auth.expo.io/@your-username/your-app-slug`.
3. In the app code we have `https://auth.expo.io/@community/expo-auth0` because I am signed in as `@community` and the slug for this app is `expo-auth0`. (You will need to replace `community` with your Expo username.)

> **Note**: You need to **disable** the **OIDC Conformant** flag from Auth0's config. (_Your App_ > Settings > Show Advanced Settings > OAuth > OIDC Conformant) for this to work. Otherwise, the first token Auth0 sends is an `access_token` instead of the `id_token` we expect.
