import './TextField.css';

function TextField(props) {
    const changeManagement = (e) => {
        props.setValue(e.target.value)
    }

    const placeholderModify = `${props.placeholder}...`

    return (
        <div className='text-field'>
            <label>{props.input_label}</label>
            <input
                placeholder={placeholderModify}
                required={props.required}
                value={props.value}
                onChange={changeManagement}
            />
        </div>
    );
}

export default TextField;