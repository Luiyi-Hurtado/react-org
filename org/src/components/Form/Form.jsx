import { useState } from "react";
import "./Form.css";
import Field from "../Field/Field";
import OptionList from "../OptionList/OptionList";
import Button from "../Button/Button";

function Form(props) {
    const [name, setName] = useState("")
    const [position, setPosition] = useState("")
    const [photo, setPhoto] = useState("")
    const [team, setTeam] = useState("")
    const [title, setTitle] = useState("")
    const [color, setColor] = useState("")
    const { teams, registerColab, createTeam } = props

    const sendManagement = (e) => {
        e.preventDefault()
        let sendData = {
            name,
            position,
            photo,
            team
        }
        registerColab(sendData)
    }

    function manageNewTeam(e) {
        e.preventDefault()
        createTeam({ title, primaryColor: color })
    }
    return (
        <section className="form">
            <form onSubmit={sendManagement}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <Field
                    input_label="Nombre"
                    placeholder="Ingresar nombre"
                    required
                    value={name}
                    setValue={setName}
                />
                <Field
                    input_label="Puesto"
                    placeholder="Ingresar puesto"
                    required
                    value={position}
                    setValue={setPosition}
                />
                <Field
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
            <form onSubmit={manageNewTeam}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <Field
                    input_label="Titulo"
                    placeholder="Ingresar Titulo"
                    required
                    value={title}
                    setValue={setTitle}
                />
                <Field
                    input_label="Color"
                    placeholder="Ingresar el color en HEX"
                    required
                    value={color}
                    setValue={setColor}
                    type="color"
                />
                <Button button_label="Registrar equipo" />
            </form>
        </section >
    );
}

export default Form;