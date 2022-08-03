import React, { useState } from "react";
import "./styles.css";
import sprite from "../../icons/sprite.svg"
import ContactNumbers from "../ContactNumbers/ContactNumbers";

/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
export default function DropdownNumbers() {
    const [isActive, setIsActive] = useState(false);
    console.log();
    const onClick = () => setIsActive(!isActive);

    return (

        <div className="container">
            <div className="menu-container">
                <button onClick={onClick} className="menu-triggers">
                    <svg className="icon">
                        <use href={sprite + "#icon-phone-contacts"} />
                    </svg>
                </button>
                <nav
                    // ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <ContactNumbers iconHidden={true} />
                    {/* <ul>
                        <li>
                            <a href="#">Messages</a>
                        </li>
                        <li>
                            <a href="#">Trips</a>
                        </li>
                        <li>
                            <a href="#">Saved</a>
                        </li>
                    </ul> */}
                </nav>
            </div>
        </div>
    );
}
