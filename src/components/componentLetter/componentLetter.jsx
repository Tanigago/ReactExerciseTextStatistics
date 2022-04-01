function CountLetter({text}}) {
    
    const nLetter = text.split(" ").filter(
        string => string!== ""
    ).length
    return (

        <p>Total de letras: {text.length}</p>
        
    );
}

export default CountLetter