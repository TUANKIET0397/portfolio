import React from "react"

import styles from "./Contact.module.css"
import { getImageUrl } from "../../utils"

export default function Contact() {
    return (
        <footer id="contact" className={styles.container}>
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out!</p>
            </div>
            <ul className={styles.links}>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/emailIcon.png")}
                        alt="Email icon"
                    />
                    <a
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=kiet8103@gmail.com"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Gmail
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/linkedinIcon.png")}
                        alt="LinkedIn icon"
                    />
                    <a
                        href="https://www.linkedin.com/in/tu%E1%BA%A5n-ki%E1%BB%87t-undefined-b0237b3b3/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </li>
                <li className={styles.link}>
                    <img
                        src={getImageUrl("contact/githubIcon.png")}
                        alt="Github icon"
                    />
                    <a
                        href="https://github.com/TUANKIET0397"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Github
                    </a>
                </li>
            </ul>
        </footer>
    )
}
