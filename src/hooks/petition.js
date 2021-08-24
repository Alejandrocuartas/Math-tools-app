const petition = (operation, state) => {



    //'handleOp' asks Newton to do the expression and manages the petition
    const handleOp = async () => {
        let stateNew = state;

        if (stateNew.result === "0") {
            try {
                const response = await fetch(`https://newton.now.sh/api/v2/${operation}/${stateNew.expression || "1"}`);
                const data = await response.json();
                stateNew = { ...stateNew, loading: false, result: data.result }
            } catch (err) {
                stateNew = { ...stateNew, loading: false, error: err, result: "" }
            }
        } else {
            stateNew = { ...stateNew, result: "0", expression: "", error: null }
        }
        return stateNew;
    }


    return handleOp();

}

export default petition;