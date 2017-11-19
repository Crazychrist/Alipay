import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'

import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import { color, DetailCell, NavigationItem, SpacingView } from '../../widget'

class MineScene extends Component {
  static navigationOptions = ({navigation})=>({
    headerRight: (
        <NavigationItem
            title='设置'
            titleStyle={{ color: 'white' }}
            onPress={() => {

            }}
        />
      ),
      title: '我的',
      headerTintColor: color.title,
      headerStyle: { backgroundColor: color.theme },
  })
  renderHeader(){
    return(
        <View style = {styles.header}>
              <Image style={styles.avatar} source={require('../../img/Mine/avatar.png')} />
              <View style={{flexDirection: 'column'}}>
                  <Heading1 style={{ color: 'white' ,marginTop:30,font:14}}>张厚国</Heading1>
                  <Paragraph style={{ color: '#666', marginTop: 4 }}>158******80 ></Paragraph>
              </View>

        </View>

    );
  }
  render(){
      return (
          <View style={styles.container}>
                {this.renderHeader()}
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
  header:{
    width:screen.width,
    height:95,
    flexDirection:'row',
    backgroundColor:color.theme,
  },
  avatar:{
    width:75,
    height:75,
    margin:10,
  },
})
export default MineScene;
