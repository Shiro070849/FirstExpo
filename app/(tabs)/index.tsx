import { StatusBar } from 'expo-status-bar';
import {  Text,
          View,
          TextInput, 
          Image, 
          TouchableOpacity,
          Button,
          ScrollView,
          Alert,
          TouchableHighlight, } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; 
import Login from '@/constants/Login ';  
import About from '@/components/About ';  
import { Link,useRouter } from 'expo-router';

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
        // {
        //   text: "No",
        //   onPress: () => console.log("Yes Pressed"),
        // },
      ],
      { cancelable: false }
    );
  };
  return (
    <ScrollView style={{ flex: 1}}>
    <LinearGradient 
      colors={['#000000', '#6a1b9a','#FF69B4',]} 
      style={Login.container}
    >
      <View style={Login.spacing} />
      <Image source={{ uri:'https://img.icons8.com/?size=512&id=gKHNPSTv94S9&format=png' }} style={Login.logo} />
      <Text style={Login.title}>Welcome  </Text>
      <TextInput 
        style={[Login.input, ]} 
        placeholder='Username' 
      />
      <TextInput 
        style={[Login.input, ]} 
        placeholder='Password'  
      />
      <TouchableOpacity style={Login.button}>
        <Text style={Login.buttonText}>Login</Text>
      </TouchableOpacity>
      <About />
      
        <Link href="contact">Click Here</Link>
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
        <Button title='GO to User ID' onPress={()=>router.push("/user/123")}/>
      <Button title='GO to Profile' onPress={()=>router.push("/profile")}/>
      <Text>&nbsp;</Text>
      <Text style={{alignItems: "center"}}>Use Image</Text>
      <Image source={require('@/assets/images/profile1.png ')}
      style={{
        height: 300,
        width: 300,
        borderRadius: 100,
        marginHorizontal: "auto",
      }}
      resizeMode='cover'
      />
      <Text>&nbsp;</Text>
      <Text style={{alignItems: "center"}}>Use Image</Text>
      {/* <Image source={Profile}
      style={{
        height: 120,
        width: 120,
        borderRadius: 100,
        marginHorizontal: "auto",
      }}
      resizeMode='cover'
      />
      <StatusBar style="auto" /> */}
      <TouchableHighlight
          underlayColor="white"
          style={{
            backgroundColor: "skyblue",
            paddingVertical: 15,
            paddingHorizontal: 20,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            margin: 10,
            
          }}
          onPress={() => {
            showAlert();
          }}
          
        >
          <Text>Show Alert</Text>
        </TouchableHighlight>
    </LinearGradient >
    </ScrollView>
  );
}