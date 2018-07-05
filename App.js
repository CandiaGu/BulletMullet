import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions} from 'react-native';
import WeeklyLog from './WeeklyLog' 



export default class App extends Component {


  render() {


    const today = new Date(2018, 8, 1); //monthIndex not month (july)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    return (

      <ScrollView style={styles.container}>

        <View style={styles.page}>
            <Text style={{textAlign: 'center'}}>{today.getFullYear()}</Text>

        </View>
        <View style={styles.page}>
            <Text style={{textAlign: 'center'}}>INDEX</Text>
        </View>
        <View style={styles.page}>
            <Text style={{textAlign: 'center'}}>{months[today.getMonth()]}</Text>
        </View>
        <View style={styles.page}>
            <WeeklyLog day={today}/>
        </View>
        <View style={styles.page}>
            <Text style={{textAlign: 'center'}}>EXTRA</Text>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  page: {
    minHeight: Dimensions.get('window').height,
    flexDirection: 'column',

    justifyContent: 'center',
    borderColor:'red',
    borderBottomWidth:2,
    marginLeft:30,
    marginRight:30,
    paddingTop:30,
    paddingBottom:30

  }
});


