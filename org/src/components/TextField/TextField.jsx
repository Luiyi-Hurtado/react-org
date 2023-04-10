import './TextField.css';

function TextField(props) {
    const placeholderModify = `${props.placeholder}...`
    return (
        <div className='text-field'>
            <label>{props.input_label}</label>
            <input placeholder={placeholderModify} required={props.required} />
        </div>
    );
}

export default TextField;