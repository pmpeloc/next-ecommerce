export default function RegisterForm({ showLoginForm }) {
  return (
    <div>
      <h1>Estamos en el registro de usuarios</h1>
      <button onClick={showLoginForm}>Ir a iniciar sesión</button>
    </div>
  );
}
