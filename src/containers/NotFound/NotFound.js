import React from 'react';
import './styles.css';
import notFound from '../../images/grumpycat.svg';

const NotFound = () => (
    <div className="notFound">
        <img src={notFound} alt="404" className="notFound" />
        <h1>Oops, it looks like you are lost!</h1>
    </div>
);

export default NotFound;
