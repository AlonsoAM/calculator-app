import {View} from 'react-native'
import React from 'react'
import {globalStyles} from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorBoton from "@/components/CalculatorBoton";
import {Colors} from "@/constants/Colors";
import {useCalculator} from "@/hooks/useCalculator";

const CalculatorApp = () => {

    const {
        formula,
        previousNumber,
        buildNumber,
        clear,
        toggleSign,
        deleteLastCharacter,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateResult
    } = useCalculator()

    return (
        <View style={globalStyles.calculatorContainer}>
            {/*Resultados*/}
            <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
                <ThemeText variant={'h1'}>
                    {formula}
                </ThemeText>
                <ThemeText variant={'h2'}>
                    {formula === previousNumber ? '' : previousNumber}
                </ThemeText>
            </View>
            {/*Filas de Botones*/}
            <View style={globalStyles.row}>
                {/*Botones*/}
                <CalculatorBoton label={'C'}
                                 blackText
                                 color={Colors.lightGray}
                                 onPress={clear}/>
                <CalculatorBoton label={'+/-'}
                                 blackText
                                 color={Colors.lightGray}
                                 onPress={toggleSign}/>
                <CalculatorBoton label={'del'}
                                 blackText
                                 color={Colors.lightGray}
                                 onPress={deleteLastCharacter}/>
                <CalculatorBoton label={'/'}
                                 color={Colors.orange}
                                 onPress={divideOperation}/>
            </View>
            <View style={globalStyles.row}>
                {/*Botones*/}
                <CalculatorBoton label={'7'}
                                 onPress={() => buildNumber('7')}/>
                <CalculatorBoton label={'8'}
                                 onPress={() => buildNumber('8')}/>
                <CalculatorBoton label={'9'}
                                 onPress={() => buildNumber('9')}/>
                <CalculatorBoton label={'X'}
                                 color={Colors.orange}
                                 onPress={multiplyOperation}/>
            </View>
            <View style={globalStyles.row}>
                {/*Botones*/}
                <CalculatorBoton label={'4'}
                                 onPress={() => buildNumber('4')}/>
                <CalculatorBoton label={'5'}
                                 onPress={() => buildNumber('5')}/>
                <CalculatorBoton label={'6'}
                                 onPress={() => buildNumber('6')}/>
                <CalculatorBoton label={'-'}
                                 color={Colors.orange}
                                 onPress={subtractOperation}/>
            </View>
            <View style={globalStyles.row}>
                {/*Botones*/}
                <CalculatorBoton label={'1'}
                                 onPress={() => buildNumber('1')}/>
                <CalculatorBoton label={'2'}
                                 onPress={() => buildNumber('2')}/>
                <CalculatorBoton label={'3'}
                                 onPress={() => buildNumber('3')}/>
                <CalculatorBoton label={'+'}
                                 color={Colors.orange}
                                 onPress={addOperation}/>
            </View>
            <View style={globalStyles.row}>
                {/*Botones*/}
                <CalculatorBoton label={'0'}
                                 doubleSize={true}
                                 onPress={() => buildNumber('0')}/>
                <CalculatorBoton label={'.'}
                                 onPress={() => buildNumber('.')}/>
                <CalculatorBoton label={'='}
                                 color={Colors.orange}
                                 onPress={calculateResult}/>
            </View>
        </View>
    )
}
export default CalculatorApp
