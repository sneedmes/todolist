import React from 'react';

type ButtonProps = {
    sumSqrt: (a:number, b:number)=>void
}

export function ButtonCalc ({sumSqrt}:ButtonProps){
    const sumSqrtHandler = () => {
        document.write("<h1>Результат: " + sumSqrt(10, 5) + "</h1>")
    }
    return (
        <div className="result">
            <button onClick={sumSqrtHandler}>Посчитать квадрат суммы</button>
        </div>
    );
}
