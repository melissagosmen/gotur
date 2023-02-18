import styles from '../styles/Create.module.scss';
import {useForm} from "react-hook-form";
import Header from "../components/Header";
import {Item} from "../utils/types";

function Create() {
    const {register, handleSubmit, watch, formState: {errors}} = useForm();
    const onSubmit = (data: Item) => console.log(data);

    return (
        <>
            <Header />
            <main className={styles.main}>
                <form className={styles.container} >
                    <div className={styles.uploadWrapper}>
                        <div className={styles.upload}>
                        </div>
                    </div>
                    <div className={styles.about}>
                        <input className={styles.titleInput} defaultValue="Başlığınızı ekleyin" {...register("example")} />
                    </div>
                </form>
            </main>
        </>
    )
}

export default Create;