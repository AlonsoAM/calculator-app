import {StyleSheet} from 'react-native'
import {Colors} from "@/constants/Colors";

export const globalStyles = StyleSheet.create({

    background: {
        backgroundColor: Colors.background,
        flex: 1
    },
    calculatorContainer:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 20
    },
    mainResult:{
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
    },
    subResult:{
        color: Colors.textSecondary,
        fontSize: 40,
        textAlign: 'right',
        fontWeight: '200',
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10
    },
    button:{
        width: 80,
        height: 80,
        backgroundColor: Colors.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10
    },
    buttonText:{
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: Colors.textPrimary,
        fontWeight: '300',
        fontFamily: 'spaceMono'
    }
})