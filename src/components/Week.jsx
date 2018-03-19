import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

function Week(props) {
    var styles = {
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridColumnGap: '1em'
    };
    return (
        <div style={styles}>
            {props.schedule.map((day, index) =>
                <Day 
                    name={day.day}
                    location={day.location}
                    hours={day.hours}
                    booth={day.booth}
                    key={index}
                />
            )}
        </div>
    );
}

Week.propTypes = {
    schedule: PropTypes.array
};

export default Week;