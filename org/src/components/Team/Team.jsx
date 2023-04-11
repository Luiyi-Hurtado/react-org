import "./Team.css";

const Team = (props) => {

    const { title, primaryColor, secondaryColor } = props.teamData
    const styleBackground = { backgroundColor: secondaryColor }
    const styleTitle = { borderBottomColor: primaryColor }

    return (
        <section className="team" style={styleBackground}>
            <h3 style={styleTitle}>{title}</h3>
            <div className="team-colaborator">
            </div>
        </section>
    );
}

export default Team;