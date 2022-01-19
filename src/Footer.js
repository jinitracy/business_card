import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer(){
    return(
        <div className="footer">
        <FontAwesomeIcon icon={['fab', 'apple']} />
        <FontAwesomeIcon icon={['fab', 'microsoft']} />
        <FontAwesomeIcon icon={['fab', 'google']} />
        </div>
    )
}