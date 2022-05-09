import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { withAuthenticator, AmplifyTheme } from 'aws-amplify-react-native';
import { Amplify } from 'aws-amplify';
import config from './aws-exports';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

Amplify.configure(config);

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}

const customTheme = {
  ...AmplifyTheme,
  container: {
    ...AmplifyTheme.container,
    backgroundColor: 'black',
    padding: 10,
  },
  button: {
    ...AmplifyTheme.button,
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 20,
    marginTop: 40,
  },
  sectionHeaderText: {
    ...AmplifyTheme.sectionHeaderText,
    color: 'white',
    fontSize: 26,
    textAlign: 'center',
    paddingTop: 40,
  },
  input: {
    ...AmplifyTheme.input,
    color: 'white',
    borderWidth: 1,
    borderColor: 'white',
    padding: 20,
    fontSize: 16,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
  sectionFooterLink: {
    ...AmplifyTheme.sectionFooterLink,
		width: '100%',
		fontSize: 15,
    color: 'white',
    textAlign: 'center',
    padding: 20,
  },



};


export default withAuthenticator(App, {theme: customTheme});