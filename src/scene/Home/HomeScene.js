import React, { Component } from 'react'
import { View, Text, StyleSheet, StatusBar, Image, TouchableOpacity, ScrollView, RefreshControl } from 'react-native'
import { Heading1, Heading2, Paragraph } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import { color, DetailCell, NavigationItem, SpacingView,SearchBar } from '../../widget'
import HomeMenuView from './HomeMenuView'
import HomeMenuItem from './HomeMenuItem'
import CellLine from './CellLine'
class HomeScene extends Component {
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
      headerStyle: { backgroundColor: color.theme },
  })
getData(){
  return(
    [
      { title: '转账',  image: require('../../img/Mine/icon_mine_wallet.png') },
      { title: '充值中心',  image: require('../../img/Mine/icon_mine_balance.png') },
      { title: '余额宝', image: require('../../img/Mine/icon_mine_voucher.png') },
      { title: '充值中心',  image: require('../../img/Mine/icon_mine_membercard.png') },
      { title: '蚂蚁深林', image: require('../../img/Mine/icon_mine_friends.png') },
      { title: '运动', image: require('../../img/Mine/icon_mine_comment.png') },
      { title: '花呗', image: require('../../img/Mine/icon_mine_collection.png') },
      { title: '芝麻信用', image: require('../../img/Mine/icon_mine_membercenter.png') },
      { title: '共享单车',  image: require('../../img/Mine/icon_mine_member.png') },
      { title: '蚂蚁庄园', image: require('../../img/Mine/icon_mine_customerService.png') },
      { title: '更多', image: require('../../img/Mine/icon_mine_customerService.png') },
    ]
  )
}
rederSecondView(){
  let datas = this.getData()
  let views = []
  for (var i = 0; i < datas.length; i++) {
    let model= datas[i]
    let view=<HomeMenuItem title={model.title} icon={model.image}/>
    views.push(view)
  }
  views.push(<SpacingView />)
  return(
    <View style={styles.second}>
        {views}
    </View>
  )
}
  render(){
      return (
          <View style={styles.container}>
              <ScrollView>
              <HomeMenuView />
              {this.rederSecondView()}
              <CellLine />
              </ScrollView>
          </View>
      );
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: 'white'
  },
  searchBar:{
      width: screen.width * 0.8,
      height: 30,
      borderRadius: 4,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      alignSelf: 'center',
  },
  second:{
    flexDirection:'row',
    width:screen.width,
    flexWrap:'wrap'
  }
})
export default HomeScene;
