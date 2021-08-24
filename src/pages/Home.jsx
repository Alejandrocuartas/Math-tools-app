import React, { useState, useEffect } from 'react';

import './styles/Home.css';

const Home = (props) => {
    return (
        <div className='Home'>
            <div className='container'>
                <div className='row'>
                    <div className='col-6 offset-md-3'>
                        <div className='Header'>
                            <h1>Math site</h1>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-6 offset-md-3'>
                        <p className="fs-3">Select the operation to do in the navbar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;