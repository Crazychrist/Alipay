import React,{Component} from 'react';
import{View,Text,StyleSheet,Image,TouchableOpacity} from 'react-native';
import { Heading2,Heading1 } from '../../widget/Text'
import { screen, system, tool } from '../../common'
import  SpacingView  from '../../widget/SpacingView'
class CellLine extends Component {
  render(){
    return(
      <View style={styles.container}>
          <SpacingView/>
          <View style={styles.fview}>
              <Image style={styles.image} source={require('../../img/Mine/avatar.png')}/>
              <View>
                  <View style={styles.line1}>
                      <Heading1>付款后你还得到了这些</Heading1>
                      <Heading2>20分钟前</Heading2>
                  </View>
                  <View style={styles.line1}>
                      <Heading1>支付助手</Heading1>
                      <Heading2>人民币14.36付款成功</Heading2>
                  </View>
              </View>
          </View>
          <SpacingView/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    width:screen.width,
    height:85,
  },
  fview:{
    flexDirection:'row',
    flex:1,
  },
  image:{
    width:65,
    height:65,
    margin:8,
  },
  line1:{
    marginTop:8,
    flexDirection:'row'
  },
});

export default CellLine;
