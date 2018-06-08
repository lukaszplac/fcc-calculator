import React from 'react';
import AuxWrap from '../../helpers/AuxWrap';
import styles from './CalcButton.scss';

const button = (props) => {
    
    return(
        <AuxWrap>
            <div className={styles.button} style={props.styleFlex} id={props.id}>
                <span>{props.value}</span>
            </div>
        </AuxWrap>
    );
};

export default button;