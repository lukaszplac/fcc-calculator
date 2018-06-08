import React, { Component } from 'react';
import styles from './App.scss';
import Calculator from '../containers/Calculator/Calculator';
import AuxWrap from '../helpers/AuxWrap';

class App extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className={styles.pageContainer}>
                <AuxWrap>
                    <Calculator />
                </AuxWrap>
            </section>
        );
    }
}

export default App;