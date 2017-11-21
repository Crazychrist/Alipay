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
  state: {
    isRefreshing:boolean
  }
  constructor(props: Object) {
      super(props)

      this.state = {
          isRefreshing: false
      }
  }

  onHeadRefresh(){
    this.setState({isRefreshing: true})
    setTimeout(()=>{
      this.setState({isRefreshing: false})
    },2000);
  }
  renderHeader(){
    return(
        <View style = {styles.header}>
              <Image style={styles.avatar} source={require('../../img/Mine/avatar.png')} />
              <View style={{flexDirection: 'column'}}>
                  <Heading1 style={{ color: 'white' ,marginTop:30,font:14}}>张厚国</Heading1>
                  <Paragraph style={{ color: '#666', marginTop: 4 }}>158******80 ></Paragraph>
              </View>

        </View>

    )
  }
  renderCells() {
    let cells = []
    let dataList = this.getData()
    for (let i = 0; i < dataList.length; i++) {
      let sublist = dataList[i]
      for (let j = 0; j < sublist.length; j++) {
        let data = sublist[j]
        let cell = <DetailCell image={data.image} title={data.title} subtitle={data.subtitle} key={data.title} />
        cells.push(cell)
      }
      cells.push(<SpacingView key={i} />)
    }
    return (
        <View style={{ flex: 1 }}>
            {cells}
        </View>
    );
  }
  getData(){
    return (
      [
        [
          {title: '蚂蚁会员', subtitle: '提现免提现服务费', image: require('../../img/Mine/icon_mine_wallet.png')},
          {title: '商家服务', image: require('../../img/Mine/icon_mine_wallet.png')},
        ],
        [
          {title: '账单', image: require('../../img/Mine/icon_mine_wallet.png')},
          {title: '总资产', subtitle: '账户安全保护中', image: require('../../img/Mine/icon_mine_wallet.png')},
          {title: '余额', subtitle: '0.00元', image: require('../../img/Mine/icon_mine_wallet.png')},
          {title: '余额宝', image: require('../../img/Mine/icon_mine_wallet.png')},
          {title: '余利宝', image: require('../../img/Mine/icon_mine_friends.png')},
          {title: '银行卡', image: require('../../img/Mine/icon_mine_friends.png')},
        ],
        [
          {title: '蚂蚁财富', image: require('../../img/Mine/icon_mine_comment.png')},
          {title: '芝麻信用', image: require('../../img/Mine/icon_mine_comment.png')},
          {title: '保险服务', image: require('../../img/Mine/icon_mine_comment.png')},
          {title: '花呗', image: require('../../img/Mine/icon_mine_comment.png')},
          {title: '网商贷', image: require('../../img/Mine/icon_mine_comment.png')},
          {title: '网上银行', image: require('../../img/Mine/icon_mine_comment.png')},

        ],
        [
          {title: '爱心捐赠', image: require('../../img/Mine/icon_mine_customerService.png')},
          {title: '娱乐宝', image: require('../../img/Mine/icon_mine_customerService.png')},
        ]
      ]

    )
  }

  render(){
      return (
          <View style={styles.container}>
              <ScrollView
                  refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={() => this.onHeadRefresh()}
                        tintColor='gray'
                    />
                  }>
                  {this.renderHeader()}
                  {this.renderCells()}
              </ScrollView>
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
