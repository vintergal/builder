import { StyleSheet} from 'react-native';

    const sharedContent=StyleSheet.create({
        container:{   
        paddingTop:50, 
        flex:1,
        backgroundColor: '#0cf',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems:'center',
        borderBottomEndRadius:50,
        borderBottomStartRadius:50,
        paddingHorizontal:20,
        
        }
   });

   export {sharedContent}