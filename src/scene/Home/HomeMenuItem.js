import React,{Component} from 'react';
import{View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { Heading2 } from '../../widget/Text'
import { screen, system, tool } from '../../common'
class HomeMenuItem extends Component {
  render(){
    return(
        <TouchableOpacity
        style={styles.container}
        onPress = {this.props.onPress}>
            <Image source={this.props.icon} resizeMode='contain' style={styles.icon}/>
            <Heading2 >
            {this.props.title}
            </Heading2>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
    width:screen.width/4,
    height:screen.width/4,
  },
  icon:{
    width:screen.width/7,
    height:screen.width/7,
    margin:8,
  },

});
export default HomeMenuItem;
