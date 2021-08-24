import React from 'react';

import './styles/Fact.css'

const Fact = ({ state, onChange, onRequest }) => {
    return (
        <div className="col-6">
            <div className="container">
                <div className="row">
                    <div className="col-4 offset-md-1">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">number</span>
                            <input onChange={onChange} type="text" placeholder='#' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                    <div className="div col-2">
                        <div className="d-grid gap-2 d-md-block">
                            <button className="btn btn-primary btn-sm" onClick={onRequest} type="button">Get!</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 offset-md-1 col-sm-12">
                        <div className="col-6 alert alert-primary" role="alert">
                            {state}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

const FactDate = ({ state, onChange, onRequest }) => {
    return (
        <div className="col-6">
            <div className="container">
                <div className="row">
                    <div className="col-5 offset-md-1">
                        <div className="input-group input-group-sm mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-sm">Date</span>
                            <input onChange={onChange} type="text" placeholder='month/day' className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                    <div className="div col-2">
                        <div className="d-grid gap-2 d-md-block">
                            <button onClick={onRequest} className="btn btn-primary btn-sm" type="button">Get!</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-8 offset-md-1 col-sm-12">
                        <div className="col-6 alert alert-primary" role="alert">
                            {state}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export { Fact, FactDate };