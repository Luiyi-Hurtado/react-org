import "./Colaborator.css"
import { AiFillCloseCircle } from "react-icons/ai"

const Colaborator = (props) => {
    const { name, position, photo, id } = props.data
    const { primaryColor, deleteColab } = props
    const styleBackground = { backgroundColor: primaryColor }

    return (
        <div className="colaborator">
            <AiFillCloseCircle
                className="delete"
                onClick={() => deleteColab(id)}
            />
            <div className="headline" style={styleBackground}>
                <img
                    src={photo}
                    alt={name}
                />
            </div>
            <div className="colaborator-info">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div >
    );
}


export default Colaborator;