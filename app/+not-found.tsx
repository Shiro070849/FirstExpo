import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import Login from '@/constants/Login '

export default function NotFoundScreen() {
  return (
    <View style={Login.container}>
      <Link href="/">Go To Home Screen</Link>
    </View>
  )
}

const styles = StyleSheet.create({})