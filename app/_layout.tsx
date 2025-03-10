import { Stack } from "expo-router";

export default function Rootlayout() {
  return (
    <Stack screenOptions={{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle: {
        backgroundColor: '#b1a9ff',
        },
        headerTintColor: "white",
    }}>
        <Stack.Screen 
          name="(tabs)" 
          options={{headerShown: false,}}/>
        <Stack.Screen 
          name="(admin)" 
          options={{headerShown: true,}}/>
        <Stack.Screen name="index" options={{title: "Home"}}/>
        <Stack.Screen name="contact" options={{title: "Home"}}/>
        <Stack.Screen name="+not-found" options={{title: "Not Found"}}/>
        <Stack.Screen 
          name="textinputdemo" 
          options={{title: "From", headerShown: true}}/>
        <Stack.Screen 
          name="switchdemo" 
          options={{title: "Switc", headerShown: true}}/>
        <Stack.Screen 
          name="flatlistdemo" 
          options={{title: "Flatlist", headerShown: true}}/>
       


    </Stack>
  )
}