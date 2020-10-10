import React, { Component } from 'react';

import { Text, Button } from 'react-native';

const _module = 'List';

export default class List extends Component
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
                <Text>A List</Text>
                <Button onPress={ () => this.props.navigation.navigate('Items') } title="Go to items" />
            </React.Fragment>
        );
    }
 }
