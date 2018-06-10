import React from 'react';
import AuxWrap from '../../helpers/AuxWrap';
import styles from './Display.scss';

const display = (props) => {
    let currentToShow = props.current;
    if (props.current === "") {
        currentToShow = "0";
    }
    return(
        <div className={styles.display} id="display">
            <div className={styles.displayMemory}>{props.memory}</div>
            <div className={styles.displayCurrent}>{currentToShow}</div>
        </div>
    );
};

export default display;