import React from 'react';

const HelloWorld = (props) => {
    const anoNascimento = new Date().getFullYear() - parseInt(props.idade);

    return (
        <>
            <h1>Hello World Sr. {props.nome}</h1>
            <h2>Sua idade é: {props.idade}</h2>
            <h2>Seu ano de nascimento é {anoNascimento}</h2>
        </>
    )
}

export default HelloWorld;