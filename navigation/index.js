import React from 'react'
import { Authprovider } from './AuthProvider';
import Routes from './Routes'

const Providers = () => {
    return (
        <Authprovider>
                    <Routes />
        </Authprovider>

    );
}

export default Providers;