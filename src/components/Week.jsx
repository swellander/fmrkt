import React from 'react';
import PropTypes from 'prop-types';
import Day from '.components/Day';

function Week(props) {
    return (
        <div>
            {props.schedule.map((day, index) =>
                <Day 
                    name={day.name}
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