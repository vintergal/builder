import { useState } from 'react';
import { StyleSheet, Text, View, Image,TouchableOpacity } from 'react-native';
import {sharedContent} from '../../shared-content';
import {users} from '../../example_template/example-info';
import Details from '../details/details'

export default function Searcher() {
   const [userId,setUserId]=useState(0);
   const onPress = () => {
      console.log(users.length)
      if (userId<(users.length-1)){
         setUserId(userId + 1);
      }
      else{
         setUserId(0);
      }
   };
   let img=users[userId].img;
   return(
      <View style={[sharedContent.container,styles.searcher]}>
         <TouchableOpacity onPress={onPress}><Image source={img} style={styles.profileImage} /></TouchableOpacity>
         <Details details={users[userId]} />
      </View>
   )
}

const styles = StyleSheet.create({
   profileImage:{
      height:200,
      width:200,
      borderRadius:100,
   },
   searcher:{
      flexDirection:'column',
   },
});