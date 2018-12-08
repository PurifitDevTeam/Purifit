import React from 'react';
import Helmet from 'react-helmet';

const SiteMetadata = (props)=> {

    return (
        <Helmet>
        <html lang="en"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="responsive purifit water filter gatsby JAM Stack" />
	    <meta name="author" content="Purifit" />
        </Helmet>
    )
}

export default SiteMetadata;