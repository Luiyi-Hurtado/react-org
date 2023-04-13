import "./Colaborator.css"
import { AiFillCloseCircle, AiOutlineHeart, AiFillHeart } from "react-icons/ai"

const Colaborator = (props) => {
    const { name, position, photo, id, favorite } = props.data
    const { primaryColor, deleteColab, like } = props
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
                {favorite ?
                    <AiFillHeart onClick={() => like(id)} />
                    : <AiOutlineHeart onClick={() => like(id)} />}
            </div>
        </div >
    );
}


export default Colaborator;