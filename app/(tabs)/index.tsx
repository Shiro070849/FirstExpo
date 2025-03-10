import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Image, TouchableOpacity, Button, ScrollView, Alert, TouchableHighlight, Modal, SafeAreaView } from 'react-native';
import Login from '@/constants/Login ';
import About from '@/components/About ';
import { Link, useRouter } from 'expo-router';
import { useState } from 'react';
//import Profile from '@/assets/images/profile2.png'

export default function Index() {
  const router = useRouter();
  const showAlert = () => {
    Alert.alert(
      "Alert Title",
      "This is the Content",
      [
        {
          text: "Cacel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK Pressed"),
        },
        {
          text: "Yes",
          onPress: () => console.log("Yes Pressed"),
        },
      ],
      { cancelable: false }
    );
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }}>
      <View style={Login.container}>
        <View style={Login.spacing} />
        <Image source={{ uri: 'https://img.icons8.com/?size=512&id=gKHNPSTv94S9&format=png' }} style={Login.logo}/>
        <Text style={Login.title}>Welcome</Text>
        <TextInput style={Login.input} placeholder="Username"/>
        <TextInput style={Login.input} placeholder="Password" secureTextEntry/>
        <TouchableOpacity style={Login.button}>
          <Text style={Login.buttonText}>Login</Text>
        </TouchableOpacity>
        <About />
        <Text>&nbsp;</Text>
        <Link href='/contact'>Clik Here</Link>
        <Text>&nbsp;</Text>
        <Button title='Click test' onPress={()=> 
          router.push("/contact?name=Mill&major=IT")} 
        />
          <Button title='Click Params' onPress={()=> 
          router.push({
            pathname : "/contact",
            params : {
              name : "Mill",
              major : "IT",
              email : "pilan.mill@gmail.com",
            }
          }
        )} 
        />
        <Text>&nbsp;</Text>
        <Button title='GO to User ID' onPress={() => router.push("/user/123")}/>
        <Text>&nbsp;</Text>
        <Button title='GO to Profile' onPress={() => router.push("/profile")}/>
        <Text>&nbsp;</Text>
        <Text style={{textAlign: "center"}}>Use Image</Text>
        <Image 
          source={require('@/assets/images/profile1.png ')}
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
            marginHorizontal: "auto",
            margin: 10,
          }}
          resizeMode='cover'
        />
        <Text>&nbsp;</Text>
        <Text style={{textAlign: "center"}}>Use Image</Text>
        {/* <Image source={Profile}
          style={{
            height: 120,
            width: 120,
            borderRadius: 100,
            marginHorizontal: "auto",
          }}
          resizeMode='cover'
        /> */}
        <Text>&nbsp;</Text>
        <TouchableHighlight
          underlayColor='#a3fbff' 
          style={{
            backgroundColor: '#0d51d8', 
            paddingVertical: 20,
            paddingHorizontal: 20,
            justifyContent: 'center', 
            alignItems: 'center',
            borderRadius: 10
          }}
          onPress={() => { setModalVisible(true) }}
        >
          <Text style={{color: 'white' }}>Show Modal</Text>
        </TouchableHighlight>

        {/*-------Modal----------*/}
        <Text style={{textAlign: 'center', marginTop: 5}}>การใช้ Modal</Text>
        <Modal
          animationType='slide' // fade, slide, none
          transparent={true}
          visible={modalVisible}
          onShow={() => { console.log('Modal Show') }}
          onRequestClose={() => { console.log('Modal Close') }}
        >
          <View 
            style={{
              flex: 1, 
              backgroundColor: 'rgba(0, 0, 0, 0.9)', // ทำให้พื้นหลังเป็นกึ่งโปร่งใส
              justifyContent: 'center', // จัดกลางในแนวตั้ง
              alignItems: 'center', // จัดกลางในแนวนอน
            }}>
            <View  
              style={{
                width: 300, // กำหนดความกว้างของ Modal
                backgroundColor: '#fff', // สีพื้นหลังของ Modal
                borderRadius: 10, // มุมโค้งมนของ Modal
                padding: 20, // ระยะห่างภายใน
                alignItems: 'center', // จัดกลางในแนวนอนภายใน Modal
              }}>
              <Text style={{ marginBottom: 20 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. A hic, consectetur est possimus incidunt eum? Saepe dolores sequi nam amet tempore laboriosam quasi, quam sint unde maiores modi delectus dolor?</Text>
              <View 
                style={{ 
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  width: '100%', 
                }}
              >
                <Button
                  title='Submit'
                  onPress={() => {
                    console.log('Submit Modal')
                  }}
                />
                <Button
                  title='X Close'
                  onPress={() => {
                    setModalVisible(false)
                  }}
                />
              </View>
            </View>
          </View>
        </Modal>
        <Text>&nbsp;</Text>
        <Button title='Go to Form' onPress={() => router.push("/textinputdemo")}/>
        
        <Button title='Go to Switc' onPress={() => router.push("/switchdemo")}/>

        <Button title='Go to Flatlist' onPress={() => router.push("/flatlistdemo")}/>

          
        <StatusBar style="auto" />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}