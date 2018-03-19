import React from 'react';
import PropTypes from 'prop-types';

function Month(props) {
    var styles = {
        justifySelf: 'center',
        padding: '1em', 
        borderRadius: '4px',
    };
    var chipStyles = {
        display: 'inline-block',
        padding: '0 25px',
        height: '50px',
        fontSize: '16px',
        lineHeight: '50px',
        borderRadius: '25px',
        backgroundColor: '#f1f1f1',
        margin: '.3em'
    };
    return (
        <div style={styles}>
            <h3>{props.month}</h3>
            <hr/>
            {props.selection.map((item, index) =>
                <div key={index} style={chipStyles}>
                    {item}
                </div>
            )}
        </div>
    );
}

Month.propTypes = {
    month: PropTypes.string,
    selection: PropTypes.array
};

export default Month;