import "./OptionList.css";

function OptionList(props) {

    const { teams, value } = props

    const changeManagement = (e) => {
        props.setTeam(e.target.value);
    }

    return (
        <div className="option-list">
            <label>Equipos</label>
            <select
                value={value}
                onChange={changeManagement}
            >
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {teams.map((team, index) => <option key={index} value={team}>{team}</option>)}
            </select>
        </div>
    );
}

export default OptionList;