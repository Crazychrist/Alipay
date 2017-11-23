import React,{Component} from 'react';
import{StyleSheet,Image,View,ScrollView,Text} from 'react-native';
import { screen, system, tool } from '../../common'
class HomeBananer extends Component{
  // getInitialState(){
  //            return{
  //                // 初始化当前页码
  //                currentPage: 0
  //            }
  //        }
  constructor(props) {
   super(props);
   this.state = { currentPage: 0 }
 }
  getImageData(){
    return[
      {image: require('../../img/Test/timg0.jpeg')},
      {image: require('../../img/Test/timg1.jpeg')},
      {image: require('../../img/Test/timg2.jpeg')},
      {image: require('../../img/Test/timg3.jpeg')},
      {image: require('../../img/Test/timg4.jpeg')},
    ]
  }

  renderItem(){
    let items = []
    let images = this.getImageData()
    for (var i = 0; i < images.length; i++) {
       let model = images[i]
       console.log(model);
       items.push(<Image key={i} style={styles.itemStyle} source={{uri:model.img}}/>)
    }
    return items
  }
  // 监听滚动
  onAnimationEnd(e){
              // 求出水平方向上的偏移量
       var offSetX = e.nativeEvent.contentOffset.x;
              // 计算当前页码
        var currentPage = offSetX / width;
              // 重新绘制UI
      this.setState({
           currentPage:currentPage
    });
  }
  renderPagingIndicator(){
    var itemAry = [],autoColor;
    let imgAry = this.getImageData();
    for (var i = 0; i < imgAry.length; i++) {
      var item = imgAry[i]

      // {this.state.currentPage == i}?{color:'orange'}:{color:'white'}
      autoColor = (this.state.currentPage === i) ? {color:'orange'} : {color:'white'}
      itemAry.push(<Text key={i} style={[{fontSize:30}, autoColor]}>•</Text>)
    }
    return itemAry;

  }

  render(){
    return(
      <View style={styles.container}>
          <ScrollView
          style={styles.scrollviewStyle}
          horizontal={true}
          PagingEnabled={true}//开启分页功能
          onMomentumScrollEnd={this.onAnimationEnd}//当一帧滚动完毕的时候调用
          >
            {this.renderItem()}
          </ScrollView>
          <View style={styles.pagingIndicatorStyle}>
              {this.renderPagingIndicator()}
          </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'white'
  },
  scrollviewStyle:{
    // 背景色
    backgroundColor:'yellow',
    // // 上边距
    marginTop:20
  },
  pagingIndicatorStyle:{
    // 背景色(使背景色为全透明)
    backgroundColor:'rgba(255,255,255,0.0)',
    // 尺寸
    width:screen.width,
    // 主轴方向与对齐方式
    flexDirection:'row',
    justifyContent:'center',
    // 绝对定位,使页码指示器盖在scrollView上面
    position:'absolute',
    bottom:0
  },
  itemStyle:{
    // 尺寸
    width:screen.width,
    height:200,
    // 图片等比例拉伸
    resizeMode:'contain'
  }
});
export default HomeBananer;
