import React, { Component } from 'react';

import { Text, Button,View } from 'react-native';

const _module = 'Lists';

export default class Lists extends Component
{
    constructor ( props )
    {
        super( props );
        
        this.state = {
            props:{}
        };

  
    }
    

   //  componentWillMount() {
   // if(this.props.url) {
   // alert(this.props.url)
   //      this.props.navigation.navigate('List') 
   //      }
   //  }

   //  navigateToList = () => {
   //      if(this.props.url) {

   //      this.props.navigation.navigate('List') 
   //      }
   //  }


  
    render()
    {
        const _function = _module + '.render';

        console.log( _function + ": Started" );
        
        return (
            <View  >
                <Text>All Lists</Text>
                <Button onPress={ () => this.props.navigation.navigate('List') } title="Go to list" />
            </View>
        );
    }
 }
