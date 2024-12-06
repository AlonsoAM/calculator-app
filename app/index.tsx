import {View, Text} from 'react-native'
import React from 'react'
import {globalStyles} from "@/styles/global-styles";

const CalculatorApp = () => {

    return (
        <View style={globalStyles.calculatorContainer}>
            <Text style={globalStyles.mainResult}>CalculatorApp</Text>
            <Text style={globalStyles.subResult}>subResult</Text>
        </View>
    )
}
export default CalculatorApp
