import React from 'react';
import { View, Text } from 'react-native';

class Screen extends React.Component {

    static navigatorStyle = {
        navBarTextColor: '#000000', // change the text color of the title (remembered across pushes)
    }

    render() {
        return (
          <View>
              <Text onPress={() => {
                  console.log('Log...')
              }}>
                  A screen :)
              </Text>
          </View>
        );
    }
}

export default Screen;
