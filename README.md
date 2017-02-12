First, you need to create your application client on https://auth0.com/, and in the settings you need to add your authorized callback URL. For this demo, we will use the development URL that the
Exponent XDE gives us. For redirection purposes, we need to remove the port and add ```/+/redirect```
at the end.

![Imgur](http://i.imgur.com/PzH19e5.png =100x100)

So here, the callback URL will be ```exp://e8-j5w.charlesvinette.exponent-auth0.exp.direct/+/redirect```

*Important: When using the development URL, make sure to remove the port (:80) from the URL when adding it to the list of Auth0 authorized callbacks URL and also when you access the app via the URL.

**Make sure the app is being run with the exp:// URL and NOT localhost.

![Imgur](http://i.imgur.com/X02h0Vt.png)

Back in your Exponent project. Using the WebBrowser module, you will redirect your user to the Auth0 authorization endpoint. Your authorization endpoint will be the domain name of your client, which you can find in your client settings such as seen in the image above, plus ```/authorize```. So in this example, our authorization URL is ```https://charlesvinette.auth0.com/authorize```. The query parameters to be sent can be found here: https://auth0.com/docs/client-auth/mobile-desktop#call-the-authorization-url


Once successful, the user will be redirected to our app and we will need to decoded the ```id_token```, which is a JWT. Once decoded, we will have access to a JSON object containing all of the attributes we previously asked in our authorization call.
