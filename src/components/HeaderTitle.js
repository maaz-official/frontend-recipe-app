// src/components/HeaderTitle.js
import React from 'react';
import { Text, View } from 'react-native';

const HeaderTitle = ({ title }) => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', color: '#fff' }}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;
