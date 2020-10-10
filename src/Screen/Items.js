import React, { Component } from 'react';

import { Text, Button } from 'react-native';

const _module = 'Items';

export default class Items extends Component
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
                <Text>All Items</Text>
                <Button onPress={ () => this.props.navigation.navigate('Item') } title="Go to an item" />
            </React.Fragment>
        );
    }
 }
