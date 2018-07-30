import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView
  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Container from '../common/Container';
import Button from '../common/Button';
import Label from '../common/Label';
import ListData from '../Main/ListData';

class Login extends Component {
    render() {
        return (
            <ScrollView style={styles.scroll}>
            <View style={
                {
                    justifyContent: 'center',
                }
            }>
                <Container>
                        <Label text="Username" />
                        <TextInput
                            style={styles.textInput}
                        />
                    </Container>
                    <Container>
                        <Label text="Password" />
                        <TextInput
                            secureTextEntry={true}
                            style={styles.textInput}
                        />
                    </Container>
                    <View style={styles.footer}>
                        <Container>
                            <Button 
                                label="Login"
                                styles={{button: styles.primaryButton, label: styles.buttonWhiteText}} 
                                onPress={() => this.props.navigation.navigate('Main')} />
                        </Container>
                    </View>
            </View>
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    scroll:{
        backgroundColor: '#E1D7D8',
        padding: 30,
        flexDirection: 'column'
    },
    label: {
        color: '#0d8898',
        fontSize: 20
    },
    alignRight: {
        alignSelf: 'flex-end'
    },
    textInput: {
        height: 60,
        fontSize: 30,
        backgroundColor: '#FFF'
    },
    buttonWhiteText: {
        fontSize: 20,
        color: '#FFF',
    },
    primaryButton: {
        backgroundColor: '#34A853'
    },
    footer: {
       marginTop: 50
    }
});

export default StackNavigator({
    Login: {
      screen: Login,
    },
    Main: {
        screen: ListData
    }
  });