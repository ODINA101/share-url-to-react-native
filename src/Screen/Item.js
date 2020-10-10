import React, { Component } from 'react';

import { Text } from 'react-native';

const _module = 'Item';

export default class Item extends Component
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
                <Text>An Item</Text>
                <Text>{ this.props.route.params.url }</Text>
            </React.Fragment>
        );
    }
 }
