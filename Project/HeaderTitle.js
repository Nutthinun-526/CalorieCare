// HeaderTitle.js
import React from 'react';
import { Text, StyleSheet } from 'react-native';

const HeaderTitle = ({ title }) => {
  return <Text style={styles.headerTitle}>{title}</Text>;
};

const styles = StyleSheet.create({
  headerTitle: {
    fontSize: 25,
    color: "#6b8d71",
    fontWeight: "bold",
  },
});

export default HeaderTitle;
