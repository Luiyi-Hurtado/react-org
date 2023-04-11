import "./OptionList.css";

function OptionList(props) {
    // use map method -> array.map((teams, index) => {
    //   return <option></option>
    //})
    const teams = [
        "Programacion",
        "Front End",
        "Data Science",
        "DevOps",
        "UX Y Diseño",
        "Móvil",
        "Innovacion y Gestión"
    ];

    const changeManagement = (e) => {
        props.setTeam(e.target.value);
    }

    return (
        <div className="option-list">
            <label>Equipos</label>
            <select value={props.value} onChange={changeManagement}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
            </select>
        </div>
    );
}

export default OptionList;