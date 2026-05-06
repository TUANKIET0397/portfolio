import styles from "./Hero.module.css"
import { getImageUrl } from "../../utils"

export default function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm kiet</h1>
                <p className={styles.description}>
                    I’m a full-stack developer with 1 years of experience using
                    React and NodeJS. Reach out if you’d like to learn more!
                </p>
                <a
                    className={styles.contactBtn}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=kiet8103@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    Contact Me
                </a>
            </div>
            <img
                className={styles.heroImg}
                src={getImageUrl("hero/heroImage.png")}
                alt="Hero"
            />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
}
