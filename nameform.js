/**
 * Controlled Components
 *
 * Em HTML, elementos de formulário como <input>, <textarea> e <select> 
 * normalmente mantêm seu próprio estado e o atualiza baseado na entrada do usuário. 
 * Em React, o estado mutável é normalmente mantido na propriedade state dos componentes 
 * e atualizado apenas com setState().
 * 
 * Podemos combinar os dois fazendo o estado React ser a “única fonte da verdade”. 
 * Assim, o componente React que renderiza um formulário também controla o que acontece 
 * nesse formulário nas entradas subsequentes do usuário. Um input cujo o valor é 
 * controlado pelo React dessa maneira é chamado de “componente controlado” 
 * (controlled component).
 * 
 * Como o atributo value é definido no nosso <input type="text">, o valor exibido sempre será 
 * o mesmo de this.state.value, fazendo com que o estado do React seja a fonte da verdade. 
 * Como o handleChange é executado a cada tecla pressionada para atualizar o estado do React, 
 * o valor exibido será atualizado conforme o usuário digita.
 * 
 * Com um componente controlado, o valor da entrada é sempre direcionado pelo estado React. 
 * Embora isso signifique que você precisa digitar um pouco mais de código, agora também 
 * pode passar o valor para outros elementos da interface do usuário ou redefini-lo de 
 * outros manipuladores de eventos.
 */

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert(`Um nome foi enviado: ${this.state.value}`);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome:
                    <input
                        type="text"
                        value={this.state.value}
                        onChange={this.handleChange}
                    />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <NameForm />
);