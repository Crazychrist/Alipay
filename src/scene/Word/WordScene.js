import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import { color, DetailCell, NavigationItem, SpacingView } from '../../widget'

class WordScene extends Component {
  static navigationOptions = ({navigation})=>({
    headerTitle:(
      <TouchableOpacity style={styles.searchBar}>
          <Image source={require('../../img/Home/icon_search.png')} style={styles.searchBar} />
      </TouchableOpacity>
    ),
    headerRight: (
        <NavigationItem
            icon={require('../../img/Home/icon_navigationItem_message_white.png')}
            onPress={() => {

            }}
        />
      ),
      headerLeft:(
        <NavigationItem
            title='重庆'
            titleStyle={{ color: 'white' }}
            onPress={() => {
            }}
        />
      ),
      headerStyle: { backgroundColor: color.theme },
  })

  render(){
      return (
          <View style={styles.container}>
              <Text>口碑</Text>
          </View>
      );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: color.background
  },
  searchBar: {
      width: screen.width * 0.7,
      height: 30,
      borderRadius: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      alignSelf: 'center',
  },
})
export default WordScene;
