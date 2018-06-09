import React, { Component } from 'react';
import CalcButton from '../../presentational/CalcButton/CalcButton';
import styles from './Calculator.scss';
import Display from '../../presentational/Display/Display';

class Calculator extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: "0",
            memory: ""
        }
    };

    clear() {
        this.setState({
            current: "0",
            memory: ""
        })
    }
    
    continueOperation(value) {
        //not doing some operations when current is 0 and value is 0 or / or *;
        let currentToReplace = this.state.current;
        if (currentToReplace === "0") {
            if (value === 0 || value === "/" || value === "*") return;
            else {
                currentToReplace = value.toString();
            }
        } else { //otherwise if current is not 0 and it is valid operation like + - or .
            if (isNaN(value) && value !== ".") currentToReplace = value//if value is not a number or dot then replace current with operation sign
            else { //otherwise if value is a number and current has only numbers or dot then atttach value to current
                if (this.state.current.match(/\d*\.{0,1}\d+/)) currentToReplace += value.toString();
                else currentToReplace = value.toString(); //otherwise replace current with valid sign + or - or .
            }
        }

        this.setState(prevState => ({
            current: currentToReplace,
            memory: prevState.memory + value
        }));
    }

    evaluate() {

    }

    onClickHandler(value) {
        console.log(value);
        switch(value) {
            case "AC": 
                this.clear(); break; //AC
            case "=":
                this.evaluate(); break;
            default:
                this.continueOperation(value);
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