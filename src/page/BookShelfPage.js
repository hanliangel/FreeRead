
'use strict';
import React, { Component } from "react";
import {
    Text,
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import { BookShelfListItemView } from '../View/BookShelfListItemView';

export default class BookShelfPage extends Component{

    constructor(props : Props){
        super(props);
        this.state = {
            showText : "书架终于有书了",
            listData : [
                {
                    imgUri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3600180168,1023402890&fm=27&gp=0.jpg' ,
                    bookname: '混沌灵界',
                    bookdesc: "可好看了",
                } ,
                {
                    imgUri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102321612,2060985139&fm=27&gp=0.jpg',
                    bookname : "霸道总裁的小鱼塘",
                    bookdesc : "什么玩意啊",
                },
                {
                    imgUri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3600180168,1023402890&fm=27&gp=0.jpg' ,
                    bookname: '混沌灵界',
                    bookdesc: "可好看了",
                } ,
                {
                    imgUri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102321612,2060985139&fm=27&gp=0.jpg',
                    bookname : "霸道总裁的小鱼塘",
                    bookdesc : "什么玩意啊",
                },
                {
                    imgUri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3600180168,1023402890&fm=27&gp=0.jpg' ,
                    bookname: '混沌灵界',
                    bookdesc: "可好看了",
                } ,
                {
                    imgUri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102321612,2060985139&fm=27&gp=0.jpg',
                    bookname : "霸道总裁的小鱼塘",
                    bookdesc : "什么玩意啊",
                },
                {
                    imgUri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3600180168,1023402890&fm=27&gp=0.jpg' ,
                    bookname: '混沌灵界',
                    bookdesc: "可好看了",
                } ,
                {
                    imgUri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102321612,2060985139&fm=27&gp=0.jpg',
                    bookname : "霸道总裁的小鱼塘",
                    bookdesc : "什么玩意啊",
                },
                {
                    imgUri:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3600180168,1023402890&fm=27&gp=0.jpg' ,
                    bookname: '混沌灵界',
                    bookdesc: "可好看了",
                } ,
                {
                    imgUri:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1102321612,2060985139&fm=27&gp=0.jpg',
                    bookname : "霸道总裁的小鱼塘",
                    bookdesc : "什么玩意啊",
                },
            ],
        }
    }

    render() {
        return (
            <View 
            style = {this.styles.container}
            >

                <Text style = {{fontSize : 30}}> {this.state.showText} </Text>
                <FlatList style = {{flex : 1 , backgroundColor: "#ff0000"}} 
                        data = {this.state.listData}
                        renderItem = {({item}) => {
                            return <BookShelfListItemView  bookcover = {item.imgUri}
                            bookname = {item.bookname}
                            bookdesc = {item.bookdesc}/>}} />
                        
            </View>

                            
        );
    }

    styles = StyleSheet.create({
            container : {
                flex : 1
            }
    });
}