import { Stack } from "expo-router";

export default function Rootlayout() {
  return (
    <Stack screenOptions=
    {{
        headerShown: true,
        headerTitleAlign: "center",
        headerStyle:  {
            backgroundColor: "skyblue",

        },
        headerTintColor:"white"
    }}>
        <Stack.Screen name="(tabs)" options={{headerShown: false }} />
        <Stack.Screen name="(admin)" options={{headerShown: false }} />
        <Stack.Screen name="index" options={{title: "Home"}} />
        <Stack.Screen name="contact" options={{title: "Contact"}} />
        <Stack.Screen name="+not-found" options={{title: "Not Found"}} />
        
    </Stack>
  )
}