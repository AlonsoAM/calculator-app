import {useEffect, useRef, useState} from "react";

enum Operator {
    ADD = '+',
    SUBTRACT = '-',
    MULTIPLY = 'X',
    DIVIDE = '/'
}

export const useCalculator = () => {

    const [formula, setFormula] = useState('0')
    const [number, setNumber] = useState('0')
    const [previousNumber, setPreviousNumber] = useState('0')

    const lastOperation = useRef<Operator>()

    useEffect(() => {
        if (lastOperation.current) {
            const firstFormulaPart = formula.split(' ').at(0)
            setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`)
        } else {
            setFormula(number)
        }
    }, [number]);

    useEffect(() => {
        const subResult = calculateSubResult()
        setPreviousNumber(subResult.toString())
    }, [formula]);

    const clear = () => {
        setNumber('0')
        setPreviousNumber('0')
        setFormula('0')
    }

    const toggleSign = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''))
        } else {
            setNumber('-' + number)
        }
    }

    const deleteLastCharacter = () => {
        let currentSign = ''
        let temporalNumber = ''

        if (number.includes('-')) {
            currentSign = '-'
            temporalNumber = number.substring(1)
        }
        if (temporalNumber.length > 1) {
            setNumber(currentSign + temporalNumber.slice(0, -1))
        } else {
            setNumber('0')
        }
    }

    const setLastNumber = () => {
        calculateResult()
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1))
        }
        setPreviousNumber(number)
        setNumber('0')
    }

    const divideOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.DIVIDE
    }

    const multiplyOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.MULTIPLY
    }

    const subtractOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.SUBTRACT
    }

    const addOperation = () => {
        setLastNumber()
        lastOperation.current = Operator.ADD
    }

    const calculateSubResult = () => {
        const [firstNumber, operation, secondNumber] = formula.split(' ')
        const num1 = Number(firstNumber)
        const num2 = Number(secondNumber)

        if (isNaN(num2)) return num1

        switch (operation) {
            case Operator.ADD:
                return num1 + num2
            case Operator.SUBTRACT:
                return num1 - num2
            case Operator.MULTIPLY:
                return num1 * num2
            case Operator.DIVIDE:
                return num1 / num2
            default:
                return num1
        }

    }

    const calculateResult = () => {
        const result = calculateSubResult()
        setFormula(result.toString())
        lastOperation.current = undefined
        setPreviousNumber('0')
    }

    const buildNumber = (textNumber: string) => {
        // Verificar si ya existe el punto decimal
        if (number.toString().includes('.') && textNumber === '.') return

        if (number.startsWith('0') || number.startsWith('-0')) {
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
            } else {
                setNumber(number + textNumber)
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
        buildNumber,
        toggleSign,
        deleteLastCharacter,
        divideOperation,
        multiplyOperation,
        subtractOperation,
        addOperation,
        calculateSubResult,
        calculateResult
    }

}