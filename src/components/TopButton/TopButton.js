import React, { useState } from "react";
import sprite from '../../icons/sprite.svg'
import styles from './TopButton.module.css'

export default function TopButton() {
    const [showBtn, setShowBtn] = useState("myBtn none");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction();
    };

    function scrollFunction() {
        if (
            document.body.scrollTop > 20 ||
            document.documentElement.scrollTop > 20
        ) {
            setShowBtn(styles.myBtn);
        } else {
            setShowBtn(styles.none);
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    return (
        <button
            onClick={topFunction}
            id="myBtn"
            className={showBtn}
            title="Вверх"
        >
            <svg className={styles.icon} >
                <use href={sprite + "#icon-top"} />
            </svg>
        </button >
    );
}