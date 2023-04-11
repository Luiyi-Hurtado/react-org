import "./Colaborator.css"

const Colaborator = (props) => {
    const { name, poistion, photo, team } = props.data

    return (
        <div className="colaborator">
            <div className="headline">
                <img
                    src={photo}
                    alt={name}
                />
            </div>
            <div className="colaborator-info">
                <h4>{name}</h4>
                <h5>{poistion}</h5>
            </div>
        </div>
    );
}


export default Colaborator;