import { useState } from "react";
import "./Form.css";
import TextField from "../TextField/TextField";
import OptionList from "../OptionList/OptionList";
import Button from "../Button/Button";

function Form(props) {

    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [photo, setPhoto] = useState("")
    const [team, setTeam] = useState("")
    const { teams } = props

    const sendManagement = (e) => {
        e.preventDefault()
        let sendData = {
            name,
            position,
            photo,
            team
        }
        console.log(sendData)
    }

    return (
        <section className="form-usr">
            < form onSubmit={sendManagement}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <TextField
                    input_label="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    value={name}
                    setValue={setName}
                />
                <TextField
                    input_label="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    value={position}
                    setValue={setPosition}
                />
                <TextField
                    input_label="Foto"
                    placeholder="Ingresar enlace de foto"
                    required
                    value={photo}
                    setValue={setPhoto}
                />
                <OptionList
                    value={team}
                    setTeam={setTeam}
                    teams={teams}
                />
                <Button button_label="Crear" />
            </form >
        </section >
    );
}

export default Form;