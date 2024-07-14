import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, ToastAndroid, TouchableOpacity, View } from 'react-native';
import Header from './Header';
import PlayerProfile from './PlayerProfile';
import ClubEvents from './ClubEvents';
import ClubNews from './ClubNews';

export default function HomePage() {
  const [searchTerm,setSearchTerm] = useState('');
  const footballClubEvents = {
    events: [
      {
        id: 1,
        title: "Training Session",
        description: "Regular training",
        date: "2024-07-15",
        time: "08:00 AM",
        location: "Main Football Ground",

      },
      {
        id: 2,
        title: "Friendly Match",
        description: "Friendly match .",
        date: "2024-07-20",
        time: "03:00 PM",
        location: "Neighboring Town Stadium",

      },
      {
        id: 3,
        title: "Team Meeting",
        description: "Monthly team meeting .",
        date: "2024-07-25",
        time: "06:00 PM",
        location: "Clubhouse",

      },
      {
        id: 4,
        title: "Community Outreach",
        description: "Volunteering event.",
        date: "2024-07-30",
        time: "10:00 AM",
        location: "Community Center",

      },
      {
        id: 5,
        title: "Fitness Test",
        description: "Quarterly fitness test",
        date: "2024-08-05",
        time: "09:00 AM",
        location: "Fitness Center",
  
      }
    ]
  };
  
  const malePlayers = [
    {
      name: "James Maina",
      age: 27,
      rate: 8.6,
      position: "Defensive Midfielder",
      weight: 74, 
      profilePic: require('../assets/players.jpg'),
      key:1 
    },
    {
      name: "Michael Mwangi",
      age: 24,
      rate: 8.2,
      position: "Right Back",
      weight: 70, 
      profilePic: require('../assets/player.jpg'),
      key:2 
    },
    {
      name: "Owen Munene",
      age: 23,
      rate: 8.4,
      position: "Right Winger",
      weight: 68, 
      profilePic: require('../assets/player.jpg'),
      key:3 
    },
    {
      name: "Kelvin Chege",
      age: 26,
      rate: 8.9,
      position: "Goalkeeper",
      weight: 80, 
      profilePic: require('../assets/player.jpg'),
      key:4
    },
    {
      name: "Peter Macharia",
      age: 25,
      rate: 8.5,
      position: "Attacking Midfielder",
      weight: 72, 
      profilePic: require('../assets/player.jpg'),
      key:5
    }
  ];
  
  const handleSearch = ()=>{
    ToastAndroid.show(searchTerm, ToastAndroid.SHORT);
  }
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.players}>
        <View style={styles.player}>
          <TextInput style={styles.search} onChangeText={(val)=>setSearchTerm(val)} placeholder='Search news  here...' />
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.playersprofile}>
        <PlayerProfile data={malePlayers} />
      </View>
      <View style={styles.playersprofile}>
        <ClubEvents data= {footballClubEvents.events} />
      </View>
      <ScrollView style={{marginTop:5}}>
        <ClubNews data={footballClubEvents.events}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f7f9f6',
  },
  players: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 10,
  },
  search: {
    padding: 4,
    borderRadius: 20,
    borderWidth: 1,
    paddingHorizontal:2,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
    width: '75%',
    paddingStart:15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginRight: 10,
  },
  player: {
    marginEnd:5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 1,
  },
  searchButton: {
    backgroundColor: '#ffa358',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
  },
  searchButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
