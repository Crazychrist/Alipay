import React,  { Component }  from 'react'
import { View, Text, StyleSheet, } from 'react-native'
import { screen, system, tool } from '../../common'
import { color } from '../../widget'
import HomeMenuItem from './HomeMenuItem'
class HomeMenuView extends Component{
  getData(){
    return (
      [
        {title: '扫一扫', image: require('../../img/Home/icon_homepage_map_old.png')},
        {title: '付钱', image: require('../../img/Home/icon_homepage_map_old.png')},
        {title: '收钱', image: require('../../img/Home/icon_homepage_map_old.png')},
        {title: '卡包', image: require('../../img/Home/icon_homepage_map_old.png')},
      ]
    );
  }

  render(){
    let data = this.getData();
    let views = [];
    for (var i = 0; i < data.length; i++) {
      let model = data[i]
      let view = <HomeMenuItem icon={model.image} title={model.title} />
      views.push(view)
    }
    return(
      <View style={styles.container}>
          {views}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    backgroundColor:color.theme
  }
})
export default HomeMenuView;
