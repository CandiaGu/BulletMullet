import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, View, Dimensions, TouchableWithoutFeedback, Alert, TextInput} from 'react-native';



class Touchables extends Component {
  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }


  render() {
    return (
        <TouchableWithoutFeedback
            onPress={this._onPressButton}
            >
          <View style={styles.button}>
            <Text style={styles.buttonText}></Text>
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

export default class WeeklyLog extends Component {


  constructor(props){
    // day
    super(props)
    this.findDaysOfWeek = this.findDaysOfWeek.bind(this)
    this.state = { bulletTexts:['','','','','','',''] };

    
  }

  findDaysOfWeek(){
    var currWeekDay = this.props.day.getDay()

    // to make monday -> 0
    // M0, T1, W2, Th3, F4, S5, SU6


    //find all the days of the week

    var allWeekDays = []
    var i; var diff; var currDay;
    for( i = 0; i < 7; i++) {

      diff = i - currWeekDay
      currDay = new Date()
      currDay.setDate(this.props.day.getDate() + diff)
      allWeekDays.push(currDay)


    }

    return allWeekDays

  }

  formatDailyEntry(i, currWeekDay){

    let Arr = this.state.bulletTexts.map((a, i) => {
      return(
        <TextInput
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
      )

    })  

    return (
      <View key={i}>
      <Text className='day' key={i}>{currWeekDay.getMonth()+1}/{currWeekDay.getDate()}</Text>
      <TextInput
        key={i}
        style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        //onSubmitEditing={(text) => this._update(index, text)}
        onChangeText={(text) => this[i].setState({text})}
        value={this.state.bulletTexts}
      />
      <Touchables key={i}></Touchables>
      </View>

    )
  }
  render() {

    
    var allWeekDays = this.findDaysOfWeek()

    var days = [];
    for (var i = 0; i < 7; i++) {
      days.push(this.formatDailyEntry(i, allWeekDays[i]));
    }
    return days;
    
  }
}

const styles = StyleSheet.create({
  page: {
    minHeight: Dimensions.get('window').height,
    flexDirection: 'column',
    justifyContent: 'center',
    borderColor:'red',
    borderBottomWidth:2,
    margin:30

  },
  button: {
    marginBottom: 30,
    flex: 1, flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});

module.exports = WeeklyLog;