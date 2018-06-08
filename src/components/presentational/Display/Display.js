import React from 'react';
import AuxWrap from '../../helpers/AuxWrap';
import styles from './Display.scss';

const display = (props) => {

    return(
        <div className={styles.display}>
            <div className={styles.displayMemory}>{props.memory}</div>
            <div className={styles.displayCurrent}>{props.currentOperation}</div>
        </div>
    );
};

export default display;