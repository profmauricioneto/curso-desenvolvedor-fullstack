import React, { useState } from "react";

const FormLoginExample = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const submitLogin = (e) => {
        e.preventDefault();
        setError("");

        if (!email || !password) {
            setError("Campo ou Campos obrigatórios vazios!");
            return;
        }
        console.log(email);
        console.log(password);
        alert('Dados enviados com sucesso');
    }

    return (
        <>
            <div>
                <h1>Login</h1>
                <form onSubmit={submitLogin} className="border rounded-lg flex flex-col gap-4 p-4 w-max h-auto">
                    <input type="email" placeholder="exemplo@email.com" value={email} onChange={(e) => {
                        setEmail(e.target.value)
                        console.log(e.target.value);
                    }}
                        className="border rounded-lg hover:ring-2 hover:ring-blue-500" />

                    <input type="password" placeholder="*******" value={password} onChange={(e) => setPassword(e.target.value)} className="border rounded-lg hover:ring-2 hover:ring-blue-500" />

                    <button type="submit" className="border border-gray-500 text-lg text-white bg-blue-600">Enviar</button>
                </form>

                {error && (
                    <p className="text-red-600">{error}</p>
                )}
            </div>
        </>
    )
}

export default FormLoginExample;