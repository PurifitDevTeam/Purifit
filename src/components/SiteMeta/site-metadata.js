import React from 'react';
import Helmet from 'react-helmet';
import favicon from '../../images/shower-icon.png';
const SiteMetadata = (props)=> {

    return (
        <Helmet>
        <html lang="en"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="keywords" content="responsive purifit water filter gatsby JAM Stack" />
        <meta name="author" content="Purifit" />
        <meta http-equiv="cache-control" content="public" />
        <meta http-equiv="cache-control" content="max-age=0" />
        <meta http-equiv="cache-control" content="must-revalidate" />
        <meta rel="shortcut icon" type="image/png" href={`${favicon}`} />
        </Helmet>
    )
}

export default SiteMetadata;