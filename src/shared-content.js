import { StyleSheet} from 'react-native';

    const sharedContent=StyleSheet.create({
        container:{   
        paddingTop:50, 
        flex:1,
        backgroundColor: '#0cf',
        alignSelf: 'stretch',
        justifyContent: 'flex-start',
        alignItems:'center',
        //borderBottomEndRadius:50,
        //borderBottomStartRadius:50,
        borderRadius:40,
        paddingHorizontal:20,
        marginBottom:20,
        elevation:20
        }
   });

   export {sharedContent}