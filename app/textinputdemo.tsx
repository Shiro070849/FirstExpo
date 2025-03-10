import React, { useState } from 'react'
    import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
    import { router, useRouter } from 'expo-router'

    export default function TextInputDemo() {

    
    const [inputName, setInputName] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputTel, setInputTel] = useState("")
    const [inputPass, setInputPass] = useState("")
    const [inputFullName, setInputFullName] = useState("")

    const router = useRouter();

    return (
        <View style={styles.container}>
        <Text style={{ fontSize: 24 }}>Simple Form</Text>

        <Text>Name</Text>
        <TextInput
            keyboardType="default"
            defaultValue={inputName}
            onChange={(e) => setInputName(e.nativeEvent.text)}
            style={{
            height: 40,
            borderColor: "#000",
            borderWidth: 1,
            width: 200,
            padding: 10,
            margin: 10,
            borderRadius: 5,
            }}
            placeholder="Name"
        />

<Text>Password</Text>
        <TextInput
            keyboardType="email-address"
            defaultValue={inputPass}
            onChange={(e) => setInputPass(e.nativeEvent.text)}
            style={{
            height: 40,
            borderColor: "#000",
            borderWidth: 1,
            width: 200,
            padding: 10,
            margin: 10,
            borderRadius: 5,
            }}
            placeholder="Pass"
        />

<Text>Full Name</Text>
        <TextInput
            keyboardType="email-address"
            defaultValue={inputFullName}
            onChange={(e) => setInputFullName(e.nativeEvent.text)}
            style={{
            height: 40,
            borderColor: "#000",
            borderWidth: 1,
            width: 200,
            padding: 10,
            margin: 10,
            borderRadius: 5,
            }}
            placeholder="Full Name"
        />

        <Text>Email</Text>
        <TextInput
            keyboardType="email-address"
            defaultValue={inputEmail}
            onChange={(e) => setInputEmail(e.nativeEvent.text)}
            style={{
            height: 40,
            borderColor: "#000",
            borderWidth: 1,
            width: 200,
            padding: 10,
            margin: 10,
            borderRadius: 5,
            }}
            placeholder="Email"
        />

        <Text>Tel</Text>
        <TextInput
            keyboardType="phone-pad"
            defaultValue={inputTel}
            onChange={(e) => setInputTel(e.nativeEvent.text)}
            style={{
            height: 40,
            borderColor: "#000",
            borderWidth: 1,
            width: 200,
            padding: 10,
            margin: 10,
            borderRadius: 5,
            }}
            placeholder="Tel"
        />

        <Text></Text>
        <Button
                title="Submit"
                onPress={() => router.push({
                  pathname: "/profiledemo",
                  params: {
                    Username: inputName,
                    FullName: inputFullName,
                    Password: inputPass,
                    Email: inputEmail,
                    Tel: inputTel,
                  }
                })}
              />
        
            
        
        </View>
    )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
        },
    })