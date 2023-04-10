import "./OptionList.css";

function OptionList() {
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

    return (
        <div className="option-list">
            <label>Equipos</label>
            <select>
                {teams.map((team, index) => <option key={index}>{team}</option>)}
            </select>
        </div>
    );
}

export default OptionList;