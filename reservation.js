/**
 * Handling Multiple Inputs
 * 
 * Quando você precisa manipular múltiplos inputs controlados, você pode adicionar um atributo
 * name a cada elemento e deixar a função manipuladora escolher o que fazer com base no 
 * valor de event.target.name.
 * 
 * Observe como usamos a sintaxe ES6 nomes de propriedades computados para atualizar a 
 * chave de estado correspondente ao nome de entrada fornecido:
 * 
 * this.setState({
 *   [name]: value
 * });
 * 
 * É equivalente a este código no ES5:
 * 
 * var partialState = {};
 * partialState[name] = value;
 * this.setState(partialState);
 * 
 * Além disso, como o setState() automaticamente mescla um estado parcial ao estado atual, 
 * nós podemos chamá-lo apenas com as partes alteradas.
 */

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>

                <label>
                    Estão indo:
                    <input
                        name="isGoing"
                        type="checkbox"
                        checked={this.state.isGoing}
                        onChange={this.handleInputChange}
                    />
                </label>

                <br />

                <label>
                    Número de convidados:
                    <input
                        name="numberOfGuests"
                        type="number"
                        value={this.state.numberOfGuests}
                        onChange={this.handleInputChange} />
                </label>

            </form>
        );
    }

}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Reservation />
);