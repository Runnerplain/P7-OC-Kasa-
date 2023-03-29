import React from 'react';
import Navbar from '../Navbar';
import Main from '../Main';
import Error from '../Error';

const ErrorPage = () => {
    return (
        <div>
            <Main>
            <Navbar />
            <Error />
            </Main>
        </div>
    );
};

export default ErrorPage;