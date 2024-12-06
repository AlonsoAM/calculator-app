import {useEffect, useRef, useState} from "react";

enum Operator {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = 'X',
    DIVIDE = '/'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('')
    const [number, setNumber] = useState('0')
    const [previousNumber, setPreviousNumber] = useState('0')

    const lastOperation = useRef<Operator>()

    useEffect(() => {

        setFormula(number)

    }, [number]);

    const clear = () => {
        setNumber('0')
        setPreviousNumber('0')
        setFormula('')
    }

    const buildNumber = (textNumber: string) => {
        // Verificar si ya existe el punto decimal
        if (number.toString().includes('.') && textNumber === '.') return

        if(number.startsWith('0') || number.startsWith('-0')) {
            // Punto decimal
            if (textNumber === '.') {
                setNumber(number + textNumber)
                // Evaluar si es otro cero y hay un punto
            } else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber)
                // Evaluar si es diferente de cero y no tiene un punto
            } else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber)
                // Evitar 0000.0
            } else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number)
            }
        } else {
            setNumber(number + textNumber)
        }
    }

    return {
        formula,
        number,
        previousNumber,
        clear,
        buildNumber
    }

}