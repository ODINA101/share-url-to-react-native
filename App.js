
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

  const EventEmitter = new NativeEventEmitter(NativeModules.CBShareInApp);



class ListStackScreen extends Component
{
  render() {
    return (
        <ListStack.Navigator>
            <ListStack.Screen name="Lists"       component={Lists} />
            <ListStack.Screen name="List"        component={List} />
            <ListStack.Screen name="Items"       component={Items} />
            <ListStack.Screen name="Item"        component={Item} />
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

    componentWillUnmount()  {
     EventEmitter.remove()
    }
    componentDidMount( props )
    {     
          //if app was in foreground share listener will receive shared data
          EventEmitter.addListener("NewShareEvent",(url) => {
                   //we got the shared url object 
                   handleUrl(url.data)
          })

          //if app launched from the share panel prop url will be shared text
          if(this.props.url) {
            handleUrl(this.props.url)
          }
    }

    render()
    {
        return (
          <NavigationContainer ref={ navigationRef } >
                <Tab.Navigator>  
                    <Tab.Screen name="ListStack"    component={ ListStackScreen   } />
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


    //first navigation step when the url is shared into app
    navigationRef.current?.navigate( 'ListStack' );


    if(url) {
    //setting timeout to wait for mounting components
    setTimeout(() => {
     navigationRef.current?.navigate( 'List' );

     navigationRef.current?.navigate( 'Items' );

     navigationRef.current?.navigate( 'Item', {
      url
     } );
    },1000)
  }
}


