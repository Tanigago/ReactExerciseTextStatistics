function CounterWord ({text}) {

    const nWord = text.split(" ").filter(
        string => string!== ""
    ).length

    return (

        <p>Total de palabras: {nWord}</p>
    );
}

export default CounterWord