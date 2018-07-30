
import React, { Component } from 'react';
import {View, Image, Text} from 'react-native';

export default class Welcome extends Component {
	render() {	
    const {viewStyle, imageStyle, textStyle} = styles;
    return (
			<View style={viewStyle}>
				<Image style={imageStyle} source={require('../../asset/images/logo.png')} />
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
    fontSize: 20,
  }
};
