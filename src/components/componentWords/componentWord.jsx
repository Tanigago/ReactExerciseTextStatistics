function CounterWord ({text}) {

    const nWord = text.split(" ");

    return (

        <p>Total de palabras: {nWord.length}</p>
    );
}

export default CounterWord