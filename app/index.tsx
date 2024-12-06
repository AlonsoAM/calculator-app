import {View} from 'react-native'
import React from 'react'
import {globalStyles} from "@/styles/global-styles";
import ThemeText from "@/components/ThemeText";
import CalculatorBoton from "@/components/CalculatorBoton";
import {Colors} from "@/constants/Colors";

const CalculatorApp = () => {

    return (
        <View style={globalStyles.calculatorContainer}>
            {/*Resultados*/}
            <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
                <ThemeText variant={'h1'}>
                    50 x 50000
                </ThemeText>
                <ThemeText variant={'h2'}>
                    2500000
                </ThemeText>
            </View>
            {/*Filas de Botones*/}
            <View style={globalStyles.row}>
                {/*Botones*/}
                <CalculatorBoton label={'C'}
                                 blackText
                                 color={Colors.lightGray}
                                 onPress={() => console.log('Algo')}/>
                <CalculatorBoton label={'+/-'}
                                 blackText
                                 color={Colors.lightGray}
                                 onPress={() => console.log('Algo')}/>
                <CalculatorBoton label={'del'}
                                 blackText
                                 color={Colors.lightGray}
                                 onPress={() => console.log('Algo')}/>
                <CalculatorBoton label={'/'}
                                 color={Colors.orange}
                                 onPress={() => console.log('Algo')}/>
            </View>
            <View style={globalStyles.row}>
                {/*Botones*/}
                <CalculatorBoton label={'7'}
                                 onPress={() => console.log('7')}/>
                <CalculatorBoton label={'8'}
                                 onPress={() => console.log('8')}/>
                <CalculatorBoton label={'9'}
                                 onPress={() => console.log('9')}/>
                <CalculatorBoton label={'X'}
                                 color={Colors.orange}
                                 onPress={() => console.log('x')}/>
            </View>
            <View style={globalStyles.row}>
                {/*Botones*/}
                <CalculatorBoton label={'4'}
                                 onPress={() => console.log('4')}/>
                <CalculatorBoton label={'5'}
                                 onPress={() => console.log('5')}/>
                <CalculatorBoton label={'6'}
                                 onPress={() => console.log('6')}/>
                <CalculatorBoton label={'-'}
                                 color={Colors.orange}
                                 onPress={() => console.log('-')}/>
            </View>
            <View style={globalStyles.row}>
                {/*Botones*/}
                <CalculatorBoton label={'1'}
                                 onPress={() => console.log('1')}/>
                <CalculatorBoton label={'2'}
                                 onPress={() => console.log('2')}/>
                <CalculatorBoton label={'3'}
                                 onPress={() => console.log('3')}/>
                <CalculatorBoton label={'+'}
                                 color={Colors.orange}
                                 onPress={() => console.log('+')}/>
            </View>
            <View style={globalStyles.row}>
                {/*Botones*/}
                <CalculatorBoton label={'0'}
                                 doubleSize={true}
                                 onPress={() => console.log('0')}/>
                <CalculatorBoton label={'.'}
                                 onPress={() => console.log('.')}/>
                <CalculatorBoton label={'='}
                                 color={Colors.orange}
                                 onPress={() => console.log('=')}/>
            </View>
        </View>
    )
}
export default CalculatorApp
