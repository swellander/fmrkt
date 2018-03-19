import React from 'react';
import PropTypes from 'prop-types';
import Month from './Month';

function FoodSchedule(props) {
    var styles = {
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr",
        gridColumnGap: "2em",
        gridRowGap: "2em"
    }
    var containerStyles = {
        marginTop: "4em"
    }
    return (
        <div style={containerStyles}>
            
            <div style={styles}>
                {props.produce.map((month, index) => 
                    <Month 
                        month={month.month}
                        selection={month.selection}
                        key={index}
                    />
                )}
            </div>
        </div>
        
    );
}

FoodSchedule.propTypes = {
    produce: PropTypes.array
};



export default FoodSchedule;