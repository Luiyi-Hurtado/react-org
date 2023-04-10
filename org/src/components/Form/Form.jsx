import "./Form.css";
import TextField from "../TextField/TextField";
import OptionList from "../OptionList/OptionList";
import Button from "../Button/Button";

function Form() {

    const sendManagement = (e) => {
        e.preventDefault()
        console.log("Manejar el envio", e)
    }

    return (
        <section className="form-usr">
            < form onSubmit={sendManagement}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <TextField input_label="Nombre" placeholder="Ingresar nombre" required />
                <TextField input_label="Puesto" placeholder="Ingresar puesto" required />
                <TextField input_label="Foto" placeholder="Ingresar enlace de foto" required />
                <OptionList />
                <Button button_label="Crear" />
            </form >
        </section >
    );
}

export default Form;