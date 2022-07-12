/**
 * Tag select
 * 
 * Em HTML, <select> cria uma lista suspensa (drop-down). Por exemplo, esse HTML cria uma 
 * lista suspensa de sabores:
 * 
 * Note que a opção “coco” é selecionada por padrão, por causa do atributo selected. 
 * Em React, em vez de usar este atributo selected, usa-se um atributo value na raiz da 
 * tag select. Isso é mais conveniente em um componente controlado, porque você só precisa 
 * atualizá-lo em um só lugar. Por exemplo:
 * 
 * No geral, isso faz com que as tags <input type="text">, <textarea> e <select> funcionem 
 * de forma muito semelhante - todos eles aceitam um atributo value que você pode usar 
 * para implementar um componente controlado.
 * 
 * Nota
 * Você pode passar um array para o atributo value, permitindo que você selecione várias opções em uma tag select:
 * <select multiple={true} value={['B', 'C']}>
 */

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coco' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Seu sabor favorito é: ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Escolha seu sabor favorito:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="laranja">Laranja</option>
                        <option value="limao">Limão</option>
                        <option value="coco">Coco</option>
                        <option value="manga">Manga</option>
                    </select>
                </label>
                <input type="submit" value="Enviar" />
            </form>
        );
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <FlavorForm />
);