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
            <div className={styles.main}>

            </div>
        </>
    )
}

export default Create;