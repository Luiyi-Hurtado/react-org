import hexToRgba from "hex-to-rgba";
import Colaborator from "../Colaborator/Colaborator";
import "./Team.css";

const Team = (props) => {
    const { title, primaryColor, id } = props.teamData
    const { colaborators, deleteColab, setTeamColor, like } = props
    const styleBackground = { backgroundColor: hexToRgba(primaryColor, 0.6) }
    const titleLine = { borderBottomColor: primaryColor }

    return (
        <>
            {colaborators.length > 0 && < section className="team" style={styleBackground} >

                <input className="color-input"
                    type="color"
                    value={primaryColor}
                    onChange={(e) => {
                        setTeamColor(e.target.value, id)
                    }}
                />
                <h3 style={titleLine}>{title}</h3>
                <div className="colaborators">
                    {colaborators.map((colaborator, index) => <Colaborator
                        data={colaborator}
                        key={index}
                        primaryColor={primaryColor}
                        deleteColab={deleteColab}
                        like={like}
                    />)}
                </div>
            </section >}
        </>
    );
}

export default Team;