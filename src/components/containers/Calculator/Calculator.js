import React, { Component } from 'react';
import CalcButton from '../../presentational/CalcButton/CalcButton';
import styles from './Calculator.scss';
import Display from '../../presentational/Display/Display';

class Calculator extends Component {

    constructor(props) {
        super(props);
        //some style prosp better to be set here later
        this.calcSetup = [
            {id: "clear", value: 'AC', flex: {flex: "1 0 50%"} },
            {id: "divide", value: "/", flex: {flex: "0 0 25%"}},
            {id: "multiply", value: "*", flex: {flex: "0 0 25%"}},

            {id: "seven", value: 7, flex: {flex: "0 0 25%"}},
            {id: "eight", value: 8, flex: {flex: "0 0 25%"}},
            {id: "nine", value: 9, flex: {flex: "0 0 25%"}},
            {id: "subtract", value: "-", flex: {flex: "0 0 25%"}},

            {id: "four", value: 4, flex: {flex: "0 0 25%"}},
            {id: "five", value: 5, flex: {flex: "0 0 25%"}},
            {id: "six", value: 6, flex: {flex: "0 0 25%"}},
            {id: "add", value: "+", flex: {flex: "0 0 25%"}},

            {id: "zero", value: 0, flex: {flex: "0 0 25%"}},
            {id: "one", value: 1, flex: {flex: "0 0 25%"}},
            {id: "two", value: 2, flex: {flex: "0 0 25%"}},
            {id: "three", value: 3, flex: {flex: "0 0 25%"}},

            {id: "decimal", value: '.', flex: {flex: "0 0 25%"}},
            {id: "equals", value: "=", flex: {flex: "1 0 auto"}}
        ]
    };

    render() {
        let buttons = this.calcSetup.map(button => (
            <CalcButton key={button.id} id={button.id} value={button.value} styleFlex={button.flex}/>
        ));
        return(
            <div className={styles.calculator}>
                <Display currentOperation="455445" memory="233+8"/>
                {buttons}
            </div>
        );
    };
};

export default Calculator;