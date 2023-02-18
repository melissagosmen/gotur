import styles from '../styles/Home.module.scss';
import Header from "../components/Header";
import {useEffect, useState} from "react";
import {getItems} from "../api/item";
import {Item} from "../utils/types";
import CardModal from "../components/CardModal";

export function Home() {
    const [items, setItems] = useState<Array<Item>>([]);
    const [modalActive, setModalActive] = useState<boolean>(false);
    const [modalProps, setModalProps] = useState<Item>({
            _id: '',
            title: '',
            description: '',
            tag: [],
            images: [],
            publisher: '',
            comments: [],
            location: '',
            createdAt: '',
            updatedAt: ''
        }
    );

    function adjustColumnNumber() {
        const cardContainer = document.getElementById("cardContainer");
        cardContainer!.style.columnCount = String(Math.floor(window.innerWidth / 250));
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await getItems();
            setItems(data);
        }

        fetchData()
            .catch((err) => console.log(err));


        adjustColumnNumber();
        window.addEventListener('resize', adjustColumnNumber);
    }, [])

    return (
        <>
            <CardModal modalProps={modalProps} active={modalActive} setActive={setModalActive}/>
            <Header/>
            <main className={styles.main}>
                <div id="cardContainer" className={styles.cardContainer}>
                    {
                        items.map((item, id) => {
                            return (
                                <div key={id} className={styles.cardWrapper}
                                     onClick={() => {
                                         setModalProps(item);
                                         setModalActive(true);
                                     }}
                                >
                                    <img className={styles.card} alt="card" src={item.images[0]}/>
                                </div>
                            )
                        })
                    }
                </div>
            </main>
        </>
    )
}