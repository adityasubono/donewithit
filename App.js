import React from 'react';
import { 
  StyleSheet, 
  Text, 
  Image,
  TouchableWithoutFeedback, 
  SafeAreaView,
  TouchableOpacity,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
  Button,
  Alert,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';
import ViewImageScreen from './app/screens/ViewImageScreen';

import WelcomeScreen from './app/screens/WelcomeScreen';



export default function App() {
  return (
    <ViewImageScreen/>
  );
}


const containerStyle = { backgroundColor: "orange"};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  
  },
});
