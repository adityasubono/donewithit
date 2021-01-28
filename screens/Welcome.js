import React, {Component} from 'react';
import {StyleSheet} from 'react-native';

import {Button, Block, Text} from '../components';
import {theme} from '../constants';

export default class Welcome extends Component {

    static navigationOptions = {
        header: null
    }

    renderIlustrations() {
        return (
        <Block>
            <Text>Image</Text>
        </Block>)
    }

    renderSteps() {
        return(
        <Block>
            <Text>* * *</Text>
        </Block>
        )
    }

    render() {
        return (
            <Block center="center" middle="middle">
                <Block center="center" middle="middle" flex={0.3}>
                    <Text h1="h1" center="center" bold="bold">Your Home.
                        <Text h1="h1" primary="primary">Greener.</Text>
                        <Text
                            h3="h3"
                            gray="gray"
                            styles={{
                                marginTop: theme.sizes.padding / 2
                            }}>Enjoy the experience.</Text>
                    </Text>
                </Block>
                <Block center="center" middle="middle">
                    {this.renderIlustrations}
                    {this.renderSteps()}
                </Block>

                <Block middle flex={0.5} margin={[0, theme.sizes.padding * 2 ]}>
                    <Button gradient onPress={() => {}}>
                        <Text center semibold white>Login</Text>
                    </Button>
                              
                    <Button  shadow onPress={() => {}}>
                        <Text center semibold>Signin</Text>
                    </Button>
                              
                    <Button onPress={() => {}}>
                        <Text center caption semibold gray>Terms of services</Text>
                    </Button>

                </Block>
            </Block>
        )
    }
}

const styles = StyleSheet.create({})
