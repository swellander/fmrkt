import React from 'react';


function Banner() {
    var styles = {
        backgroundImage: `url(${'http://www.aginnovators.org.au/sites/default/files/Organic%20fresh%20produce_Peyri%20Herrera%20Flickr%20CC_wwwflickrcomphotospeyri_RESIZE.jpg?itok=IwAVnI7l'})`,
        color: 'white',
        minHeight: '100%',
        height: '33vh',
        backgroundSize:'cover',
        boxShadow: 'inset 0 0 0 2000px rgba(0,0,0,0.4)'
    };
    return (
        <div className="jumbotron center-block" style={styles}>
            <h1 className="text-center">Avery's Organics</h1>
            <p className="text-center">The best fresh for less.</p>
        </div>
    );
}

export default Banner;