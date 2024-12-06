import {View} from 'react-native'
import React from 'react'
import {Slot} from "expo-router";
import {useFonts} from "expo-font";
import {StatusBar} from "expo-status-bar";
import {globalStyles} from "@/styles/global-styles";

const RootLayout = () => {

    const [loaded] = useFonts({
        spaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    })

    if (!loaded){
        return null
    }

    return (
        <View style={globalStyles.background}>
            <Slot />
            <StatusBar style="light"/>
        </View>
    )
}
export default RootLayout
