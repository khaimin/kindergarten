import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native'
import ItemDetail from './ItemDetail';
class ListItem extends Component {
    handlePress = () => {
        return <ItemDetail item={this.props.item}></ItemDetail>
    }
    render() {
        return (
            <View style={{flex:1, backgroundColor: this.props.index % 2 == 0 ? "mediumseagreen" : "tomato" }}>
                <Text style={styles.flatListItem} onPress={()=>{this.handlePress()}}>{this.props.item.title}</Text>
            </View>
        );
    }
}
const styles =StyleSheet.create({
    flatListItem: {
        color: 'white',
        padding: 10,
        fontSize: 16
    }
})
export default ListItem;