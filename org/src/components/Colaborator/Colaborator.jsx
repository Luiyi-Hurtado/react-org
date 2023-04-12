import "./Colaborator.css"

const Colaborator = (props) => {
    const { name, poistion, photo, team } = props.data
    const { primaryColor } = props
    const styleBackground = { backgroundColor: primaryColor }

    return (
        <div className="colaborator">
            <div className="headline" style={styleBackground}>
                <img
                    src={photo}
                    alt={name}
                />
            </div>
            <div className="colaborator-info">
                <h4>{name}</h4>
                <h5>{poistion}</h5>
            </div>
        </div >
    );
}


export default Colaborator;