import React from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions } from 'react-native';

const data = [
  { id: '1', uri: require('../../../assets/user_data/img1.png') },
  { id: '2', uri: require('../../../assets/user_data/img2.png') },
  { id: '3', uri: require('../../../assets/user_data/img3.png') },
  { id: '4', uri: require('../../../assets/user_data/img4.png') },
 
];

const numColumns = 2;
const size = Dimensions.get('window').width / numColumns;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  imageContainer: {
    width: size,
    height: size,
    margin: 2,
  },
});

const ImageGrid = () => {
  const renderItem = ({ item }) => {
    return (
        <View style={styles.imageContainer}>
          <Image source={item.uri } style={styles.image} />
        </View>
      );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
      />
    </View>
  );
};

export default ImageGrid;
