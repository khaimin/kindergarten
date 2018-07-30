import myData from '../../asset/kindergartens.json';
import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native'
import ListItem from './ListItem';
class ListData extends Component {
    render() {
        // alert(myData);
        return (
            <View style={{flex: 1, marginTop: 22}}>
                <FlatList
                data={myData}
                renderItem={({item, index})=>{
                    // console.log(`Item= ${item}, index = ${index}`)
                    return <ListItem item={item} index={index}></ListItem>
                }}
                >
                
                </FlatList>
            </View>
        );
    }
}
const styles =StyleSheet.create({
    FlatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16
    }
})
export default ListData;