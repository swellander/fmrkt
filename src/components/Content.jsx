import React from 'react';
import Week from './Week';
import FoodSchedule from './FoodSchedule';
import PropTypes from 'prop-types';


function Content(props) {
    var styles = {
        display: "grid",
        gridTemplateColumns: "1fr",
        margin: "3em"
    }
    return (
        <div style={styles}>
            <Week schedule={props.schedule}/>
            <FoodSchedule produce={props.produce}/>
        </div>
    );
}

Content.propTypes = {
    schedule: PropTypes.array,
    produce: PropTypes.array 
};

export default Content;