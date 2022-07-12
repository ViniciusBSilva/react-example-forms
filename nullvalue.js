/**
 * Null Values in Controlled Components
 * 
 * A especificação de uma prop value em um componente controlado impede que o usuário 
 * altere a entrada, a menos que você deseje. Se você especificou uma prop value, mas o 
 * input ainda é editável, você pode ter acidentalmente definido o value como undefined 
 * ou null.
 * O código a seguir demonstra isso. (O input é bloqueada no início, mas torna-se 
 * editável após um tempo.)
 */

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <input value="hi" />
);

setTimeout(function () {
    root.render(<input value={null} />);
}, 10000);