import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import { color, DetailCell, NavigationItem, SpacingView } from '../../widget'

class FriendScene extends Component {
  static navigationOptions = ({navigation})=>({
    headerRight: (
        <NavigationItem
            icon={require('../../img/Home/icon_navigationItem_message_white.png')}
            onPress={() => {

            }}
        />,
        <NavigationItem
            icon={require('../../img/Home/icon_navigationItem_message_white.png')}
            onPress={() => {

            }}
        />

      ),
      title: '朋友',
      headerTintColor: color.title,
      headerStyle: { backgroundColor: color.theme },
  })

  render(){
      return (
          <View style={styles.container}>
              <Text>朋友</Text>
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
export default FriendScene;
