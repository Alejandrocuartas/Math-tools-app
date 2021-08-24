const useFact = async (number, operation) => {
    let state = { data: '', error: '' }
    try {
        const response = await fetch(`http://numbersapi.com/${number || 'random'}/${operation || 'trivia'}`)
        const data = await response.text()
        state = { error: '', data: data }
    } catch (err) {
        state = { data: '', error: err }
    }
    return state;
}

export default useFact;