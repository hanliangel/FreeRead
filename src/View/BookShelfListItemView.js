import React, { Component } from 'react'
import { Text, View, Image, Vibration } from 'react-native';

export class BookShelfListItemView extends Component {
  render() {
    console.log("设置到封面图片：" + this.props.bookcover);
    return (
      <View style={{
          flexDirection : 'row',
          flex :1 , 
          height : 100
      }}>
        <Image 
            source = {{uri : this.props.bookcover}} 
            style = {{width:50 , height: 100}}
        ></Image>

        <View >
            <Text style = {{
                fontSize : 20,
                color : "#000000"
            }}>
                {this.props.bookname}
            </Text>

            <Text style={{
                fontSize : 10,
                color : "#c4c4c4"
            }}>
                {this.props.bookdesc}
            </Text>
        </View>
      </View>
    )
  }
}

export default BookShelfListItemView