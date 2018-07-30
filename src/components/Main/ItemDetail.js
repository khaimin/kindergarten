import React, { Component } from 'react';
import {FlatList, StyleSheet, Text, View, Image} from 'react-native'
class ItemDetail extends Component {
    render() {
        return (
            <View>
                <Image style={imageStyle} source={this.props.item.image} />
                <Text style={textStyle}>Kindergarten</Text>
                <Text style={textStyle}>Kindergarten</Text>
                <Text style={textStyle}>Kindergarten</Text>
            </View>
        );
    }
}
const styles = {
    viewStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    imageStyle: {
      width: 150,
      height: 150
    },
    textStyle: {
      fontSize: 16,
    }
  };
  
export default ItemDetail;
