import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';

const PRODUCTS_DATA = [
  {
    title: 'GetABoat - For Sale',
    boatname: 'Sea Ray 500 Sundancer',
    description:
      'Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away.',
    poster: require('./src/img/sea_ray.jpg'),
  },
  {
    boatname: 'Four Winns Horizon 180',
    description:
      'A sporty look and refined details truly set the Horizon 180 above all others.',
    poster: require('./src/img/four_winns.jpg'),
  },
];
const Getaboatapp = () => {
  let boatArr = [];
  for (let i = 0; i < PRODUCTS_DATA.length; i++) {
    let boat = PRODUCTS_DATA[i];
    boatArr.push(<Text key={boat.title}>{boat.title}</Text>);
    boatArr.push(<Text key={boat.boatname}>{boat.boatname}</Text>);
    boatArr.push(<Text key={boat.description}>{boat.description}</Text>);
    boatArr.push(<Image source={boat.poster} />);
    console.log(PRODUCTS_DATA[i]);
  }
  return (
    <ScrollView>
      <View>{boatArr}</View>
    </ScrollView>
  );
};

export default Getaboatapp;
