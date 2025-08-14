import React, { useState } from 'react';

export default function FinTrustLogin({ onLogin }) {
    const [clientCode, setClientCode] = useState('');
    const [user, setUser] = useState('');
    const [pswd, setPswd] = useState('');

    const isButtonDisabled = !clientCode || !user || !pswd;

    const handleSubmit = (event) => {
        event.preventDefault();
        onLogin({ clientCode, user, pswd });
    };

    return (
        <form onSubmit={handleSubmit}>
            {}
            <label htmlFor="clientCode">Código de cliente</label>
            <input id="clientCode" type="text" value={clientCode} onChange={e => setClientCode(e.target.value)} />

            <label htmlFor="user">Usuario</label>
            <input id="user" type="text" value={user} onChange={e => setUser(e.target.value)} />

            <label htmlFor="pswd">Contraseña</label>
            <input id="pswd" type="password" value={pswd} onChange={e => setPswd(e.target.value)} />

            <button type="submit" disabled={isButtonDisabled}>Iniciar sesión</button>
        </form>
    );
}