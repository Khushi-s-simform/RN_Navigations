import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import UserScreen from "./Screens/UserScreen";

export default function App() {
    return (
<SafeAreaProvider>
    <SafeAreaView style={{flex:1 , height:'95%' , paddingBottom:20}}>
        <UserScreen />
    </SafeAreaView>
</SafeAreaProvider>
    )
}