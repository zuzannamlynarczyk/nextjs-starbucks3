import styles from './footer.module.scss'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <strong>Privacy Policy | Terms of Use | Submit Your Idea | Cookie Preferences</strong>
            <p>© 2021 Starbucks Coffee Company. All rights reserved. </p>
        </footer>
    )
}