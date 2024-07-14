import { View, Text, StyleSheet,TouchableOpacity, Image, FlatList } from 'react-native'
import React from 'react'

export default function PlayerProfile({ data }) {
  return (
    <View style={styles.container}>
    <View style={styles.viewmore}>
      <Text style={styles.playerProfileText}>Player's Profile</Text>
      <TouchableOpacity>
     <Text style={styles.viewAll}>View All</Text>
     </TouchableOpacity>
      </View>
      <FlatList 
        data={data}
        keyExtractor={(item) => item.name}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={{flexDirection:'row', alignItems:"center"}}>
            <Image
              source={item.profilePic} 
              style={styles.imageStyle}
            />
            <View>
            <Text style={styles.name}><Text style={{color:'black', fontSize:12, fontWeight:'bold'}}>Name:</Text>  {item.name}</Text>
            <Text style={styles.name}><Text style={{color:'black',fontSize:12, fontWeight:'bold'}}>Age:</Text>   {item.age} Years</Text>
            <Text style={styles.name}><Text style={{color:'black',fontSize:12, fontWeight:'bold'}}>Rate:</Text>  {item.rate}</Text>
            <View style={styles.name}>
            <Text style={{color:'black', fontSize:12,fontWeight:'bold'}}>Position: </Text>
            <Text>{item.position}</Text>
            </View>
            <Text style={styles.name}><Text style={{color:'black',fontSize:12, fontWeight:'bold'}}>Weight:</Text> {item.weight} kg</Text>
            </View>
            </View>
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
    paddingHorizontal: 10,
    paddingVertical:10,
    marginStart: 1,
    marginEnd:4,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  imageStyle: {
    width: 100,
    height: 130,
    borderRadius: 10,
    marginEnd:20,
  },
  name: {
    fontSize: 14,
    marginBottom:4,
  },
})
