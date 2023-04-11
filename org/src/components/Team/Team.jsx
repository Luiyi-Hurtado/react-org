import Colaborator from "../Colaborator/Colaborator";
import "./Team.css";

const Team = (props) => {
    const { title, primaryColor, secondaryColor } = props.teamData
    const { colaborators } = props
    const styleBackground = { backgroundColor: secondaryColor }
    const styleTitle = { borderBottomColor: primaryColor }

    return (
        <>
            {colaborators.length > 0 && < section className="team" style={styleBackground} >
                <h3 style={styleTitle}>{title}</h3>
                <div className="colaborators">
                    {colaborators.map((colaborator, index) => <Colaborator data={colaborator} key={index} />)}
                </div>
            </section >}
        </>
    );
}

export default Team;