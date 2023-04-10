import "./Form.css";
import TextField from "../TextField/TextField";
import OptionList from "../OptionList/OptionList";

function Form() {
    return (
        <section className="form-usr">
            < form >
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <TextField input_label="Nombre" placeholder="Ingresar nombre" />
                <TextField input_label="Puesto" placeholder="Ingresar puesto" />
                <TextField input_label="Foto" placeholder="Ingresar enlace de foto" />
                <OptionList />
            </form >
        </section >
    );
}

export default Form;