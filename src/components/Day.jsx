import React from 'react';
import PropTypes from 'prop-types';

function Day(props) {
    var styles = {
        display: 'inline-block',
        borderRadius: '4px',
        justifySelf: 'center',
        padding: '1em',
        backgroundColor: '#EBF5DF',
        width: '100%'
    };

    return (
        <div style={styles}>
            <div className="text-center">
                <h4>{props.name}</h4>
                <p>{props.location}</p>
                <p>{props.hours}</p>
                <p>Booth: {props.booth}</p>
            </div>
        </div>
    );
}

Day.propTypes = {
    name: PropTypes.string,
    location: PropTypes.string,
    hours: PropTypes.string,
    booth: PropTypes.string
};

export default Day;