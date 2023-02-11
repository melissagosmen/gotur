import styles from '../styles/Create.module.scss';
import {useForm} from "react-hook-form";
import Header from "../components/Header";

function Create() {

    type Item = {
        title: string;
        description: string;
        tag: Array<string>;
        images: Array<string>;
        location: string;
        created: string;
    }

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