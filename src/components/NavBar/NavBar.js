import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';

const searchUri='https://e7.pngegg.com/pngimages/629/480/png-clipart-gray-magnifying-glass-illustration-cartoon-search-icon-icons-logos-emojis-search.png';
const settingsUri='https://images.emojiterra.com/google/android-10/512px/2699.png';
const chatsUri='https://images.emojiterra.com/google/noto-emoji/v2.034/share/1f4ac.jpg';

export default function NavBar() {
    return(
       <View style={styles.navList}>
             <TouchableOpacity><Image source={{uri:searchUri}} style = {styles.navButtons} /></TouchableOpacity>
             <TouchableOpacity><Image source={{uri:settingsUri}} style = {styles.navButtons} /></TouchableOpacity>
             <TouchableOpacity><Image source={{uri:chatsUri}} style = {styles.navButtons} /></TouchableOpacity>
             
       </View>
    )
 }

const styles = StyleSheet.create({
    navList:{
        flex:1,
        backgroundColor: '#ccc',
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
        
    
    },
    navButtons:{
        width: 50, 
        height: 50
    }

    
});