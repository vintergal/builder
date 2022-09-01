//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView,StatusBar } from 'react-native';
import NavBar from './src/components/navbar/navbar';
import Searcher from './src/components/searcher/searcher';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View  style={styles.navbar}>
        <NavBar />
      </View>
      <View style={styles.content}>
        <Searcher />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView:{
    flex:1,
    direction:'rtl',
    backgroundColor: '#fff',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    paddingHorizontal:20,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  navbar:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    
  },
  content: {
    flex:10,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
   
  },
});
//<StatusBar style="auto" />