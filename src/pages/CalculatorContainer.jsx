import React, { useState } from 'react';

import Calculator from '../components/Calculator';
import petition from '../hooks/petition';

const CalculatorContainer = (props) => {
    //'state.expression' saves the expression the user wants to operate
    const [state, setState] = useState({ expression: "", error: null, loading: false, result: "0", operation: 'simplify' });

    //user is setting the expression to operate 
    const handleClick = (e) => {
        const a = e.target.innerText;
        setState({ ...state, expression: state.expression + a })
    }

    const handleOp = async () => {
        setState({ ...state, loading: true })
        const newState = await petition(state.operation, state)
        setState(newState)
    }

    return (
        <Calculator title={state.operation} state={state} handleClick={handleClick} handleOp={handleOp}>
            <div className='col-3'>
                <button onClick={() => setState({ ...state, operation: 'derive' })} type="button" className="btn btn-primary mt-1">d/dx</button>
            </div>
            <div className='col-3'>
                <button onClick={() => setState({ ...state, operation: 'simplify' })} type="button" className="btn btn-primary mt-1">simpl</button>
            </div>
            <div className='col-3'>
                <button onClick={() => setState({ ...state, operation: 'zeroes' })} type="button" className="btn btn-primary mt-1">roots</button>
            </div>
            <div className='col-3'>
                <button onClick={() => setState({ ...state, operation: 'factor' })} type="button" className="btn btn-primary mt-1">factor</button>
            </div>
        </Calculator>
    )
}

export default CalculatorContainer;