import {View} from 'react-native'
import React from 'react'
import {globalStyles} from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";

const CalculatorApp = () => {

    return (
        <View style={globalStyles.calculatorContainer}>
            <ThemeText variant={'h1'}>
                50 x 50000
            </ThemeText>
            <ThemeText variant={'h2'}>
                2500000
            </ThemeText>
        </View>
    )
}
export default CalculatorApp
