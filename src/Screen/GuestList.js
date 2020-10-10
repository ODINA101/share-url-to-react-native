import React, { Component } from 'react';

import { Text, Button } from 'react-native';

const _module = 'GuestList';

export default class GuestList extends Component
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
            <Text>Guest List</Text>           
        );
    }
 }
