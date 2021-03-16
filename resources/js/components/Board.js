import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import { API_BASE_URL } from '../config/config';

function Board() {

    const [data, setData] = useState([]);
    const [userIp, setUserIp] = useState('');

    const publicIp = require('public-ip');
    (async () => {
        setUserIp(await publicIp.v4());
        //setUserIp(publicIp.v4())
        //=> '46.5.21.123'
    

    })();
    

    
    console.log(API_BASE_URL)
    console.log(userIp)

    useEffect(() => {
        fetch(`${API_BASE_URL}/board`)
            .then((response) => response.json())
            .then(setData)
        
    },[]);

    
    return (
        
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-12">
                    <h1 className="text-center mt-5 mb-3">Welcome to Laravel Card Game</h1>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h2>Click: </h2>
                            <h2>My Best: </h2>
                            <h2>Global Best: 12 </h2>
                        </div>
                    </div>
                </div>
            
                <div className="col-md-9" id="board">
                    <div className="row">
                    {data.map((value, index) => {
                        return(
                        <div className="col-6 col-sm-6 col-md-3 mb-3" key={index}>
                            <div className="card"><div className="card-header d-flex justify-content-center align-items-center">{value}</div></div>
                        </div>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Board;

if (document.getElementById('board')) {
    ReactDOM.render(<Board />, document.getElementById('board'));
}
