import styles from '../styles/Home.module.scss';
import Header from "../components/Header";
import {useEffect, useState} from "react";
import {getItems} from "../api/item";
import {Item} from "../utils/types";

export function Home() {
    const [items, setItems] = useState<Array<Item>>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getItems();
            setItems(data);
        }

        fetchData()
            .catch((err) => console.log(err));
    }, [])

    return (
        <>
            <Header/>
            <main className={styles.main}>
                <div className={styles.itemContainer}>
                    <div className={`${styles.card} ${styles.card_small}`}/>
                    <div className={`${styles.card} ${styles.card_medium}`}/>
                    <div className={`${styles.card} ${styles.card_small}`}/>
                    <div className={`${styles.card} ${styles.card_medium}`}/>
                    <div className={`${styles.card} ${styles.card_small}`}/>
                    <div className={`${styles.card} ${styles.card_medium}`}/>
                    <div className={`${styles.card} ${styles.card_large}`}/>
                    <div className={`${styles.card} ${styles.card_large}`}/>
                    <div className={`${styles.card} ${styles.card_small}`}/>
                    <div className={`${styles.card} ${styles.card_medium}`}/>
                    <div className={`${styles.card} ${styles.card_large}`}/>
                    <div className={`${styles.card} ${styles.card_large}`}/>
                    <div className={`${styles.card} ${styles.card_small}`}/>
                    <div className={`${styles.card} ${styles.card_medium}`}/>
                    <div className={`${styles.card} ${styles.card_small}`}/>
                    <div className={`${styles.card} ${styles.card_medium}`}/>
                    <div className={`${styles.card} ${styles.card_small}`}/>
                    <div className={`${styles.card} ${styles.card_medium}`}/>
                    <div className={`${styles.card} ${styles.card_large}`}/>
                    <div className={`${styles.card} ${styles.card_large}`}/>
                    <div className={`${styles.card} ${styles.card_small}`}/>
                    <div className={`${styles.card} ${styles.card_medium}`}/>
                    <div className={`${styles.card} ${styles.card_large}`}/>
                    <div className={`${styles.card} ${styles.card_large}`}/>
                </div>
            </main>
        </>
    )
}

