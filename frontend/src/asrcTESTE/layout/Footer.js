import React from 'react'
import { FaGithub, FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <FaGithub />
                </li>
                <li><FaInstagram />
                </li>
            </ul>
            <p className={styles.copy_right}><span>XBSoftwares</span> &copy;2022</p>
        </footer>
    )
}

export default Footer