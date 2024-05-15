import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Header = ({ headerText, headerIcon }) => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: "700" }}>{ headerText }</Text>
      <FontAwesome name={headerIcon} size={24} color="#f96163" />
    </View>
  )
}

export default Header

const styles = StyleSheet.create({})