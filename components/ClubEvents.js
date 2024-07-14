import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ClubEvents({ data }) {
  return (
    <View style={styles.container}>
   <View style={styles.viewmore}>
   <Text style={styles.playerProfileText}>Club Events</Text>
     <TouchableOpacity>
     <Text style={styles.viewAll}>View All</Text>
     </TouchableOpacity>
    </View>
    <FlatList 
        data={data}
        horizontal={true}
        showsHorizontalScrollIndicator={false} 
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.eventTitle}>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Time: {item.time}</Text>
            <Text>Location: {item.location}</Text>
          </View>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    viewAll:{
     backgroundColor:"#ffa358",
     borderRadius:20,
     paddingHorizontal:5,
     color:"white",
     paddingVertical:1,
    },
    viewmore:{
     flexDirection:'row',
     justifyContent:'space-between'
    },
  container: {
    paddingHorizontal: 10,
    marginTop: 20,
  },
  playerProfileText:{
    marginBottom:6,
    fontSize:14,
    fontWeight:'bold'  
  },
  card: {
    borderRadius: 1,
    padding: 20,
    marginStart: 1,
    marginEnd:4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})
