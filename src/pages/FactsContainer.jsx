import React, { useState } from 'react';

import { Fact, FactDate } from '../components/Fact'

import useFact from '../hooks/useFact';

const FactsContainer = () => {
    const [factState, setFactState] = useState({ trivia: '', math: '', date: '', year: '' })
    const [state, setState] = useState({ loading: false, error: null, number: 'random', date: 'random' })

    const handleChangeNumber = (e) => {
        setState({ ...state, number: e.target.value })
    }

    const handleChangeDate = (e) => {
        setState({ ...state, date: e.target.value })
    }

    const date = async () => {
        const date = await useFact(state.date, 'date')
        setState({ date: 'random' })
        setFactState({ ...factState, date: date.data })
        setState({ ...state, error: date.error, date: 'random' })
    }

    const trivia = async () => {
        const trivia = await useFact(state.number, 'trivia')
        setState({ number: 'random' })
        setFactState({ ...factState, trivia: trivia.data })
        setState({ ...state, error: trivia.error, number: 'random' })
    }

    const year = async () => {
        const year = await useFact(state.number, 'year')
        setState({ number: 'random' })
        setFactState({ ...factState, year: year.data })
        setState({ ...state, error: year.error, number: 'random' })
    }

    const math = async () => {
        const math = await useFact(state.number, 'math')
        setFactState({ ...factState, math: math.data })
        setState({ ...state, error: math.error, number: 'random' })
    }

    return (
        <div className="Facts">
            <h1>Get an interesting fact about some number or date!</h1>
            <p>Enter a number and get a fact about it. If you don't enter any number, you will get a random fact about a random number.</p>
            <div className="container">
                <div className="row">
                    <FactDate onChange={handleChangeDate} onRequest={date} state={factState.date} />
                    <Fact onChange={handleChangeNumber} onRequest={trivia} state={factState.trivia} />
                </div>
                <div className="row">
                    <Fact onChange={handleChangeNumber} onRequest={year} state={factState.year} />
                    <Fact onChange={handleChangeNumber} onRequest={math} state={factState.math} />
                </div>
            </div>
        </div>
    )
}

export default FactsContainer;