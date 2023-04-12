import React from 'react';
import Navbar from '../components/layout/MainElements/Navbar';
import Main from '../components/Main';
import Error from '../components/Error';

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