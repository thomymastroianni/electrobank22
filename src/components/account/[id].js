import cuentas from './transferencias.json';

function DetalleCuenta({ account }) {
  return (
    <div>
      <h1>Detalles de la Cuenta {account.id}</h1>
      <p>Titular: {account.titular}</p>
      <p>Balance: ${account.balance}</p>
    </div>
  );
}

export async function getStaticPaths() {
  const paths = cuentas.map(cuenta => ({
    params: { id: cuenta.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const account = cuentas.find(cuenta => cuenta.id.toString === params.id);
  return { props: { account } };
}

export default DetalleCuenta;