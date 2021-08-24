import React from 'react';

const Calculator = ({ state, handleClick, handleOp, children, title }) => {
    return (
        <div className="container">
            <div className='row'>
                <div className="Title col-lg-4 offset-lg-4 col-md-4 offset-md-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2">
                    <div className='container'>
                        <div className='row'>
                            <div className="col">
                                <h1>{title}</h1>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col'>
                                <div className="alert alert-danger h-30" role="alert">
                                    <p className="fs-1">{state.error ? state.error.message : state.loading ? 'Loading...' : typeof state.result === 'string' ? state.result : state.result[0] + ", " + state.result[1]}</p>
                                    <p className="fs-6">{state.expression}</p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-3'>
                                <div className="btn-group-vertical">
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">(</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">1</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">4</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">7</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1 mb-1">x</button>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className="btn-group-vertical">
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">)</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">2</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">5</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">8</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1 mb-1">0</button>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className="btn-group-vertical">
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">+</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">3</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">6</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">9</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1 mb-1">.</button>
                                </div>
                            </div>
                            <div className='col-3'>
                                <div className="btn-group-vertical">
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">-</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">*</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">/</button>
                                    <button onClick={handleClick} type="button" className="btn btn-primary mt-1">^</button>
                                    <button onClick={handleOp} type="button" className="btn btn-primary mt-1 mb-1">{state.result !== "0" ? "AC" : "="}</button>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calculator;