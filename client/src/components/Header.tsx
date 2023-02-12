import styles from '../styles/Header.module.scss';
import {FaPinterest, FaSearch} from 'react-icons/fa';
import {NavLink} from "react-router-dom";
import {useState} from "react";

function Header() {
    const [searchActive, setSearchActive] = useState(false);

    return (
        <>
            <div className={styles.main}>
                <div className={styles.menuWrapper}>
                    <div className={styles.logoWrapper}>
                        <FaPinterest className={styles.logo}/>
                    </div>
                    <NavLink
                        className={(({isActive}) => isActive ? `${styles.navButton} ${styles.active}` : styles.navButton)}
                        to="/"
                    >
                        <span className={styles.navText}>Home</span>
                    </NavLink>
                    <NavLink
                        className={(({isActive}) => isActive ? `${styles.navButton} ${styles.active}` : styles.navButton)}
                        to="/create"
                    >
                        <span className={styles.navText}>Create</span>
                    </NavLink>
                    <div className={`${styles.searchWrapper} ${searchActive ? styles.active : undefined}`}>
                        <FaSearch className={styles.searchIcon}/>
                        <input
                            className={styles.search}
                            type="input"
                            placeholder="Search"
                            onFocus={() => setSearchActive(true)}
                            onBlur={() => setSearchActive(false)}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;