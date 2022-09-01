import { StyleSheet, Text, View, Image } from 'react-native';
//import AwesomeButton  from '@chuhoanglong/rn-really-awesome-button';
import AwesomeButtonRick from '@chuhoanglong/rn-really-awesome-button/src/themes/rick';

export default function Details({details}) {
    const {name,city,birthYear,lvl,properties,freeText}=details;
    const FONT_SIZE=15;
    
    return(
        <View style={styles.detailsList}>
            <View><Text style={{fontSize:FONT_SIZE}}>שם: {name}</Text></View>
            <View><Text style={{fontSize:FONT_SIZE}}>עיר: {city}</Text></View>
            <View><Text style={{fontSize:FONT_SIZE}}>שנת לידה: {birthYear}</Text></View>
            <View style={{flexDirection:'row'}}><Text style={{fontSize:FONT_SIZE}}>רמה: </Text>
            <View style={styles.weightsList}>
            {
            getWeight(lvl)
            }
            </View>
           </View>
            <View style={{alignSelf:'center'}}>
            <AwesomeButtonRick backgroundColor="#fdd22e" backgroundDarker="#e59d24" borderColor="#000"
             type="anchor" backgroundProgress='#e59d24' width={150} onPress={()=>console.log('f')}>קטגוריות אימון</AwesomeButtonRick>
            </View>
            <View><Text style={{fontSize:FONT_SIZE}}>תיאור: {freeText}</Text></View>
            
        </View>


   )}

   const styles=StyleSheet.create({
    detailsList:{
        flex:0.8,
        marginTop:50,
        //backgroundColor:'#f00',
        fontSize:'11px',
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'flex-start',
        width:300,
    },
    weightsList:{
        flexDirection:'row',
        //flexWrap:'wrap',
    },
    weight:{
        marginHorizontal:5,
    }
   });
   //<Image source={require('../../rate.png')} />
   function getWeight(num)
   {
    const ddd=[];
    
    for (let i=0;i<num;i++)
    {
        ddd.push('');
    }
    
    return ddd.map((val,i)=> <Image key={i} style={styles.weight} source={require('../../rate.png')} />);
   }
