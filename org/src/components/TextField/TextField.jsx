import './TextField.css';

function TextField(props) {
    const placeholderModify = `${props.placeholder}...`
    return (
        <div className='text-field'>
            <label>{props.input_label}</label>
            <input placeholder={placeholderModify} />
        </div>
    );
}

export default TextField;