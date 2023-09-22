import { useState } from 'react';
import cuentas from '../json/transferencias.json';
import Transferencias from '../Transferencias';

function TransferPage({ account }) {
  return <Transferencias account={account} />;
}

export async function getServerSideProps({ params }) {
  const account = cuentas.find(cuenta => cuenta.id === params.id);
  return { props: { account } };
}

export default TransferPage;