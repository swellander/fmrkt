import React from 'react';
import Banner from './Banner';
import Content from './Content';
import PropTypes from 'prop-types';



function App(props) {
    return (
        <div>
            <Banner/>
            <Content 
                schedule={props.schedule}
                produce={props.produce}
            />
        </div>
    );
}

App.propTypes = {
    schedule: PropTypes.array,
    produce: PropTypes.array 
};

export default App;