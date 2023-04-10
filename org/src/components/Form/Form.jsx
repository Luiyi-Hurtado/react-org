import "./Form.css"
import TextField from "../TextField/TextField";

function Form() {
    return (
        <section className="form-usr">
            < form >
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <TextField />
                <TextField />
                <TextField />
            </form >
        </section >
    );
}

export default Form