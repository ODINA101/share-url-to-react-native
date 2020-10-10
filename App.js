// 'use strict';

// import React, { Component } from 'react';

// import {
//   Text,
//   Linking,
//   StyleSheet,
//   View,
// } from 'react-native';

// class App extends Component {
//   componentDidMount = () => {
//     alert(this.props.url)
//     Linking.addEventListener(url => {
//       alert(url)
//     })
//   }
//   render() {
//     return (
//       <View style={{flex:1,backgroundColor:'black'}} >
//       <Text style={{color:'#FFF',fontSize:17}}>this is your text: {this.props.url}</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({

// });


// export default App;


import 'react-native-gesture-handler';

import React, { createRef, Component } from 'react';

import { Linking } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import ShareMenu from 'react-native-share-menu';
import { createBottomTabNavigator          } from '@react-navigation/bottom-tabs';
import { createStackNavigator              } from '@react-navigation/stack';
import { NativeModules,NativeEventEmitter } from 'react-native';
import Lists       from "./src/Screen/Lists";
import List        from "./src/Screen/List";
import Items       from "./src/Screen/Items";
import Item        from "./src/Screen/Item";

import Friends     from "./src/Screen/Friends";
import GuestList   from "./src/Screen/GuestList";
const _module = 'App';

const ListStack = createStackNavigator();
const Stack = createStackNavigator();
const navigationRef = React.createRef();
class ListStackScreen extends Component
{
  constructor(props) {
    super(props);
  
    this.state = {};

  }
  componentDidMount() {
 


    // setInterval(() => {
    //  // NativeModules.CBShareInApp.sampleMethod('test',2,(data) => {
    //  //  alert(data)
    //  // })
    // },1000)
  }

  // alert(JSON.stringify(props.url))
  render() {
    return (
        <ListStack.Navigator>
            {
            //   props.url && (
            // <ListStack.Screen name="Item"        component={() =>  <Item  url={props.url}/>       } />
            //     )
            }
            <ListStack.Screen name="Lists"       component={Lists} />
            <ListStack.Screen name="List"        component={ List        } />
            <ListStack.Screen name="Items"       component={ Items       } />
            
            <ListStack.Screen name="Item"   component={ Item        } />
              
        </ListStack.Navigator>
    );
}
}

const FriendStack = createStackNavigator();

function FriendStackScreen()
{
    return (
        <FriendStack.Navigator>
            <FriendStack.Screen name="Friends"   component={ Friends   } />
            <FriendStack.Screen name="GuestList" component={ GuestList } />
        </FriendStack.Navigator>
    );
}

const Tab = createBottomTabNavigator();
 
// create a reference so we can control navigation later, with incoming URLs


export default class App extends Component

{

  state = {
    url:""
  }
    componentDidMount( props )
    {

          const EventEmitter = new NativeEventEmitter(NativeModules.CBShareInApp);
          EventEmitter.addListener("NewShareEvent",(txt) => {
                   handleUrl(txt.data)
                  this.setState({url:txt.data})
          })

      // ShareMenu.addNewShareListener((txt) => {
      //   handleUrl(txt.data)
      //   this.setState({url:txt.data})
      // })
    
        
        // Linking.addEventListener(url => {
      
        //     handleUrl(url);
        // })
      if(this.props.url) {

        handleUrl(this.props.url)
      }
    }

    render()
    {
        // console.log( "App render: ", this.props );

        return (
          <NavigationContainer ref={ navigationRef } >
                <Tab.Navigator>
                    <Tab.Screen name="ListStack"    component={ (props) => <ListStackScreen   {...props} url={this.props.url}   />  } />
                    <Tab.Screen name="FriendStack"  component={ FriendStackScreen  } />
                </Tab.Navigator>
          </NavigationContainer>
        );
    }
}

async function handleUrl( url )
{
    const _function = _module + '.handleUrl';
    
    console.log( _function + ": Handling URL: " + url );

    // get the scheme

    const scheme = url.substring( 0, url.indexOf(':') );

    console.log( _function + ": Scheme is '" + scheme + "'" );

  navigationRef.current?.navigate( 'ListStack' );
        if(url) {
    setTimeout(() => {
     navigationRef.current?.navigate( 'List' );
     navigationRef.current?.navigate( 'Items' );
     navigationRef.current?.navigate( 'Item',{
      url
     } );
    },1000)
  }

        // navigationRef.current?.reset({
        //     index: 0,
        //     routes: [ { name: 'Lists' }, { name: 'List' }, { name: 'Items'}, { name: 'Item', params: { url: url } } ],
        // });



    // if ( scheme === 'ttgm' )
    // {
    //     const key = url.substring( url.indexOf('/list') + 6 );

    //     console.log( _function + ": Key to use in API call is '" + key + "'" );

    //     console.log( _function + ": Now redirecting to the list page (for key " + key + ")" );

    //     navigationRef.current?.navigate( 'ListStack' );

    //     navigationRef.current?.reset({
    //         index: 0,
    //         routes: [ { name: 'Lists' }, { name: 'List' } ],
    //     });
    // }
    // else
    // {
    //     console.log( _function + ": Now redirecting to the item page (with url " + url + ")" );

    //     navigationRef.current?.navigate( 'ListStack' );

    //     navigationRef.current?.reset({
    //         index: 0,
    //         routes: [ { name: 'Lists' }, { name: 'List' }, { name: 'Items'}, { name: 'Item', params: { url: url } } ],
    //     });
    // }
}


