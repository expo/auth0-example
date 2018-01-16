First, you need to create your application client on https://auth0.com/, and in the settings you need to add your authorized callback URL. As indicated in the docs, the URL will follow this structure: `https://auth.expo.io/@your-username/your-app-slug`. So in our example, the URL to white list is `https://auth.expo.io/@community/expo-auth0`

![Imgur](https://imgur.com/LCWac5g.png)

Back in your Expo project. Using the `AuthSession` module, you will redirect your user to the Auth0 authorization endpoint. Your authorization endpoint will be the domain name of your client, which you can find in your client settings such as seen in the image above, plus ```/authorize```. So in this example, our authorization URL is ```https://brentvatne.auth0.com/authorize```. The query parameters to be sent can be found here: https://auth0.com/docs/client-auth/mobile-desktop#call-the-authorization-url. The call should be similar to this:
```javascript
const result = await AuthSession.startAsync({
      authUrl:
        'https://brentvatne.auth0.com/authorize' +
        toQueryString({
          connection: 'twitter',
          client_id: auth0ClientId,
          response_type: 'token',
          scope: 'openid name',
          redirect_uri: redirectUrl,
        }),
    })
```


Once successful, the user will be redirected to our app, and `result` will contain all of the data that was returned in the URL. We will need to decoded the ```id_token```, which is a JWT. Once decoded, we will have access to a JSON object containing all of the attributes we previously asked in our authorization call.
