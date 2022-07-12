/**
 * Tag textarea
 * 
 * Em HTML, o texto de um elemento <textarea> é definido por seus filhos
 * 
 * Em React, em vez disso, o <textarea> usa um atributo value. Desta forma, um 
 * formulário usando um <textarea> pode ser escrito de forma muito semelhante 
 * a um formulário que usa um input de linha única
 * 
 * Observe que this.state.value é inicializado no construtor, para que o textarea
 * comece com algum texto.
 */

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Por favor, escreva uma dissertação sobre o seu elemento DOM favorito.'
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Uma dissertação foi enviada: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Dissertação:
                    <textarea
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
    <EssayForm />
);