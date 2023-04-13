import './Field.css';

function Field(props) {
    const { value, required, placeholder, input_label, type = "text" } = props

    const changeManagement = (e) => {
        props.setValue(e.target.value)
    }

    const placeholderModify = `${placeholder}...`

    return (
        <div className={`field field-${type}`}>
            <label>{input_label}</label>
            <input
                type={type}
                placeholder={placeholderModify}
                required={required}
                value={value}
                onChange={changeManagement}
            />
        </div>
    );
}

export default Field;