import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>Profile!</Text>
    </View>
  );
}

export default ProfileScreen;
