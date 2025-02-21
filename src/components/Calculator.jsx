import React, { useState } from 'react'
import DisplayWindow from './DisplayWindow';
import KeysWrapper from './KeysWrapper'

const Calculator = () => {

    const [expression, setExpression] = useState('');
    const [displayExp, setDisplayExp] = useState('');
    const [result, setResult] = useState('0');

    const sciFunctions = {
        sin: "Math.sin",
        cos: "Math.cos",
        tan: "Math.tan",
        ln: "Math.log",
        log: "Math.log10",
        π: "Math.PI",
        e: "Math.E",
        "^": "**",
        "√": "Math.sqrt",
    };

    const calculateResult = () => {

        if (expression.length !== '0') {

            try {
                let result = eval(expression);
                result = parseFloat(result.toFixed(4));
                setResult(result);
            } catch (error) {
                setResult('An Error Occured!');
            }

        } else {
            setResult('An Error Occured!');
        }

    };

    const handleButton = (value) => {

        if (value === 'AC') {

            setExpression('');
            setDisplayExp('');
            setResult('0');

        } else if (value === 'DEL') {

            if (displayExp === 'sin' || displayExp === 'cos' || displayExp === 'tan' || displayExp === 'ln' || displayExp === 'log') {
                setDisplayExp('');
                setExpression('');
            } else {
                setExpression(expression.slice(0, -1));
                setDisplayExp(displayExp.slice(0, -1));
            }

        } else if (sciFunctions.hasOwnProperty(value)) {

            setDisplayExp(displayExp + value);
            setExpression(expression + sciFunctions[value]);

        } else if (value === "!") {
            const lastNum = extractLastNum(expression);

            if (lastNum != null) {
                const num = parseFloat(lastNum);
                setDisplayExp(displayExp + value);
                setExpression(expression.replace(lastNum, calcFact(num)));
            }

        } else if (value === '=') calculateResult();
        else {

            setExpression(expression + value);
            setDisplayExp(displayExp + value);

        }

    };

    const calcFact = (n) => {
        let result = 1;

        for (let i = 1; i <= n; i++) result *= i;
        result = result.toExponential(8);
        return result;
    };

    const extractLastNum = (exp) => {
        const numbers = exp.match(/\d+/g);
        return numbers ? numbers[numbers.length - 1] : null;
    }

    return (
        <div className='w-[25rem] h-[38rem] shadow-xl flex flex-col bg-window rounded-[0.8rem] font-poppins'>
            <DisplayWindow expression={displayExp} result={result} />
            <KeysWrapper handleButton={handleButton} />
        </div>
    )
}

export default Calculator