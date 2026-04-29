import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Photo } from '../../Types/index';

type Props = {
  data: Photo[];
};

function PhotoScreen({ data }: Props) {
  return (
    <FlatList
    data={data.slice(0, 30)}
    keyExtractor={(item) => item.id.toString()}
    renderItem={({ item }) => {
      console.log(item.thumbnailUrl); 
  
      return (
        <View
          style={{
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
          }}
        >
         <Image
            source={{ uri: `https://picsum.photos/100?random=${item.id}` }}
            style={{ width: 80, height: 80, marginRight: 10 }}
            />
            
          <Text style={{ flex: 1 }}>{item.title}</Text>
        </View>
      );
    }}
  />
    
  );
  
}

export default PhotoScreen;