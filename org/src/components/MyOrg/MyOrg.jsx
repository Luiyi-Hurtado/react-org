import "./MyOrg.css";

function MyOrg(props) {

    return (
        <section className="org-section">
            <h3 className="org-title">Mi Organización</h3>
            <img src="/img/add.png" alt="add" onClick={props.changeShow} />
        </section>
    );
}

export default MyOrg;