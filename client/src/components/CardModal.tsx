import styles from '../styles/CardModal.module.scss'
import {Item} from "../utils/types";
import {Dispatch, SetStateAction, useRef, useState} from "react";
import useOutsideAlerter from "../utils/useOutsideAlerter";
import {IoIosSend} from 'react-icons/io';
import {sendCommentApi} from "../api/comment";

function CardModal(props: { modalProps: Item, active: boolean, setActive: Dispatch<SetStateAction<boolean>> }) {
    const {modalProps, active, setActive} = props;
    const modalRef = useRef(null);
    const [comment, setComment] = useState('');
    useOutsideAlerter(modalRef, setActive);

    function sendComment() {
        sendCommentApi(comment);
        setComment('');
    }

    return (
        <>
            <main className={`${styles.main} ${active && styles.active}`}>
                <div ref={modalRef} id="modal" className={`${styles.modal} ${active && styles.active}`}>
                    <div className={styles.leftPanel}>
                        <img className={styles.modalImage} src={modalProps.images[0]} alt="modal_img"/>
                    </div>
                    <div className={styles.rightPanel}>
                        <h1 className={styles.title}>
                            {modalProps.title}
                        </h1>
                        <span className={styles.description}>
                            {modalProps.description}
                        </span>
                        <br/>
                        <br/>
                        <span className={styles.publisher}>
                            {modalProps.publisher}
                        </span>
                        <h2 className={styles.comments}>
                            {modalProps.comments.length} Comments
                        </h2>
                        {
                            modalProps.comments.length === 0 ?
                                <span>
                                    No comments yet! Add one to start the conversation.
                                </span>
                                :
                                modalProps.comments.map((comment) => {
                                    return (
                                        <div>
                                            123
                                        </div>
                                    )
                                })
                        }
                        <div className={styles.commentSection}>
                            <input className={styles.commentInput} value={comment}
                                   onChange={(e) => setComment(e.target.value)} placeholder="Add a comment"/>
                            <IoIosSend
                                className={styles.sendIcon}
                                onClick={() => {
                                    sendComment();
                                }}
                            />
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default CardModal;