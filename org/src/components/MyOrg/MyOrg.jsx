import { useState } from "react";
import "./MyOrg.css";

function MyOrg() {

    const [show, updateShow] = useState(true)

    function clickManagenet() {
        console.log("Mostrar/Ocultar Elemento", !show)
        updateShow(!show)
    }

    return (
        <section className="org-section">
            <h3 className="org-title">Mi Organización</h3>
            <img src="/img/add.png" alt="add" onClick={clickManagenet} />
        </section>
    );
}

export default MyOrg;