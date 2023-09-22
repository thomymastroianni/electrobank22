import React from 'react';
import './styles/Transferencias.css';
import Header from './Header';
import MenuLateral from './MenuLateral';
import { useState } from 'react';



function Transferencias({ account }) {
  const [amount, setAmount] = useState(0);
  const [targetAccountId, setTargetAccountId] = useState('');

  const handleTransfer = async () => {
    // Aquí, normalmente llamarías a una API para hacer la transferencia.
    // Simularemos una transferencia exitosa:
    alert('Transferencia realizada con éxito!');
  };

  return (
    <div>
      <Header />
      <MenuLateral />
      <h1>Transferir desde la cuenta {account.id}</h1>
      <p>Balance actual: ${account.balance}</p>
      
      <input
        type="number"
        placeholder="Monto a transferir"
        value={amount}
        onChange={e => setAmount(e.target.value)}
      />
      
      <input
        type="text"
        placeholder="ID de cuenta destino"
        value={targetAccountId}
        onChange={e => setTargetAccountId(e.target.value)}
      />

      <button onClick={handleTransfer}>Transferir</button>
    </div>
  );
}

export default Transferencias;