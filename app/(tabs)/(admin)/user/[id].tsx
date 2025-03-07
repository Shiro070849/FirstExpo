import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import Login from '@/constants/Login '

export default function UserByID () {
    const {id} = useLocalSearchParams()
  return (
    <View style={Login.container}>
      <Text>User ID : {id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})