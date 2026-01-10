import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    let navigate = useNavigate();

    const submitLogin = (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Campo ou Campos obrigatórios vazios!");
            return;
        }

        console.log(`Dados enviados: ${email}, ${password}`);
        alert('Dados enviados com sucesso');
    }

    const changeInput = (e) => {
        const { name, value } = e.target;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        } else {
            console.error(`No one target selected!`);
        }
    }

    return (
        <>
            <div>
                <h1>Login</h1>
                <form onSubmit={submitLogin}
                    className="w-max max-w-md h-auto border rounded-lg flex flex-col gap-4 p-4">

                    <input type="email" placeholder="exemplo@email.com" value={email} name="email" onChange={changeInput}
                        className="border rounded-lg hover:ring-2 hover:ring-blue-500" />

                    <input type="password" placeholder="*******" value={password} name="password" onChange={changeInput} className="border rounded-lg hover:ring-2 hover:ring-blue-500" />

                    <button type="submit" className="border border-gray-500 text-lg text-white bg-blue-600">Enviar</button>
                </form>

                <p>Você não possui cadastro?!
                    <button onClick={() => navigate('/login')}>Acesse aqui!</button>
                </p>

                {error && (
                    <p className="text-red-600">{error}</p>
                )}
            </div >
        </>
    )
}

export default Login;