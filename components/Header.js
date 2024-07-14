import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
          source={require('../assets/Chui.jpg')} 
          style={styles.imageStyle}
        />
      </View>
      <View ><Text style={styles.clubText}>Welcome To Chui Football Club</Text></View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    shadowColor: 'black',
    alignItems: 'center',
    shadowRadius: 10,
    color: 'white',
    paddingHorizontal: 15,
    height: 100,
    flexDirection: 'row',
    paddingTop:20,
    borderBottomStartRadius:10,
    borderBottomEndRadius:10,
    paddingBottom:5,
    width: '100%',
    backgroundColor:'#ffa358' 
  },

  imageStyle: {
    width: 60,
    height: 60,
    borderRadius:50,

  },
  clubText:{
    marginHorizontal:20,
    fontWeight:'bold',
    color:'white',
    fontSize: 15
    
  }
})
