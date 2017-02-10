import Exponent from 'exponent';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native';

const redirect_uri = 'host.exp.exponent.oauth://redirect'
const auth0_client_id = 'pdnNOE8axmLRPk6opnr6pSbIxmFJxAlA'

class App extends React.Component {

  _loginWithAuth0 = async () => {
    let redirectionURL = 'https://charlesvinette.auth0.com/authorize' + this._toQueryString({
      client_id:auth0_client_id,
      response_type:'token',
      scope:'openid name',
      redirect_uri:redirect_uri,
      scope:'yeehoo'
    })
    Exponent.WebBrowser.openBrowserAsync(redirectionURL);
  }

  /**
   * Converts an object to a query string.
   */
  _toQueryString(params) {
    return '?' + Object.entries(params)
      .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
      .join('&');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Example: Auth0 login</Text>
        <Button title="Login with Auth0" onPress={this._loginWithAuth0}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 40,
  },
});

Exponent.registerRootComponent(App);
