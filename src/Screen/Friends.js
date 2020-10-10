import React, { Component } from 'react';

import { Text, Button } from 'react-native';

const _module = 'Friends';

export default class Friends extends Component
{
    constructor ( props )
    {
        super( props );
        
        this.state = {};
    }

    render()
    {
        const _function = _module + '.render';

        console.log( _function + ": Started" );
        
        return (
            <React.Fragment>
                <Text>All Friends</Text>
                <Button onPress={ () => this.props.navigation.navigate('GuestList') } title="Go to guest list" />
            </React.Fragment>
        );
    }
 }
