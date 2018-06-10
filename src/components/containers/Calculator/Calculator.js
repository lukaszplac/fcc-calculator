import React, { Component } from 'react';
import CalcButton from '../../presentational/CalcButton/CalcButton';
import styles from './Calculator.scss';
import Display from '../../presentational/Display/Display';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: "",
            memory: ""
        }
    };

    clear() {
        this.setState({
            current: "",
            memory: ""
        })
    }
    
    validation(value) {
        let currentToReplace = this.state.current;
        let memoryToReplace = this.state.memory;
        let signAtTheEnd = /[\*\/\-\+]$/g;

        let valueIsANumber = (!isNaN(value));
        let valueIsDot = (value === ".");
        let currentIsASign = currentToReplace.match(signAtTheEnd);
        let currentIsEmpty = currentToReplace === "";

        //if current is 0 and value is 0 this is not allowed then return
        if (currentIsEmpty && value === 0) return;

        //if curren is 0 and sign other than + or - was cliced then also return
        if (currentIsEmpty && (value === "*" || value === "/")) return;

        //if current ends with dot and value is not a number this is not allowed then return
        if (currentToReplace.match(/\d*\.$/) && (!valueIsANumber)) return;

        //if current has already a dot and value is a dot this is also not allowed so return
        if (currentToReplace.match(/\d*\.{1}\d*/) && (valueIsDot)) return;

        //clear current if it is a sign but not dot
        if (currentIsASign) {
            currentToReplace = "";
        }

        if (valueIsANumber || valueIsDot) {
            if ((valueIsDot && currentIsEmpty) || (valueIsDot && currentIsASign)) {
                currentToReplace = "0" + value; //if current is ampty and value is dot OR value is dot and current is sign, add 0 at the beginning
            } else {
                currentToReplace += value; //add string to current
            }
        } else {
            currentToReplace = value; //replace string by sign
        }

        if (currentToReplace.match(signAtTheEnd)) {
            if (!memoryToReplace.match(signAtTheEnd)) {
                memoryToReplace += currentToReplace;
            } else memoryToReplace = memoryToReplace.replace(signAtTheEnd, value);
        } else {
            if ((valueIsDot && currentIsEmpty) || (valueIsDot && memoryToReplace.match(signAtTheEnd))) memoryToReplace += "0" + value;
            else memoryToReplace += value;
        }
        
        this.setState(prevState => ({
            current: currentToReplace,
            memory: memoryToReplace
        }));
    }

    evaluate() {
        let out = 0;
        let toEvaluate = this.state.memory;
        if (this.state.memory === "") return;
        else if (toEvaluate.match(/.*([\+\-\*\/])+$/)) {
            let tempArray = toEvaluate.split('');
            tempArray.pop();
            toEvaluate = tempArray.join('');
        }

        out = eval(toEvaluate);
        if (!Number.isInteger(out)) {
            out = out.toFixed(4);
        }
        this.setState({
            current: out.toString(),
            memory: out.toString()
        });

    }

    onClickHandler(value) {
        switch(value) {
            case "AC": 
                this.clear(); break; //AC
            case "=":
                this.evaluate(); break;
            default:
                this.validation(value);
        }
    }

    render() {
        let buttons = this.props.setup.map(button => (
            <CalcButton key={button.id} 
                        id={button.id} 
                        value={button.value} 
                        styleFlex={button.flex}
                        clicked={this.onClickHandler.bind(this)}/>
        ));
        return(
            <div className={styles.calculator}>
                <Display current={this.state.current} memory={this.state.memory}/>
                {buttons}
            </div>
        );
    };
};

export default Calculator;