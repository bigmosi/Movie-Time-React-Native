import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

const DetailsScreen = () => {
    return (
      <View style={styles.mainView}>
        <Text>Details Screen</Text>
          <Button
            title="Go to Image"
            onPress={() => {console.log("Go to BigImageView")}}/>
      </View>
    )
};

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;