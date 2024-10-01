import {SubmitHandler, useForm} from "react-hook-form";
import styles from './LoginForm.module.scss'
import TestUser from "./TestUser.tsx";
import {LoginAction} from "@/features/login";
import {loginData} from "@/entities/user";
import {Button} from "@/shared/ui";
import {useNavigate} from "react-router-dom";




export function LoginForm(){
    const {register, handleSubmit, reset, clearErrors, formState: { errors }} = useForm<loginData>({
        mode: "onSubmit"
    });
    const navigateTo  = useNavigate();

    const  submit: SubmitHandler<loginData> = async (data) => {
        const successLogin = await LoginAction(data)
        if(successLogin){
            navigateTo('/cards')
        }
    }

    const fillForm = (username:string, password:string) =>{

        reset({username:username, password:password})
    }

    return(
        <>
            <form
                className={styles.form}
                onSubmit={handleSubmit(submit)}
            >
                <h1>Вход</h1>
                <input
                    type="text"
                    placeholder="Имя"
                    className={`${styles.input} ${errors.username? styles.error: ''}`}
                    onClick={()=>clearErrors("username")}
                    {...register("username", { required: true})}
                />
                <input
                    type="text"
                    placeholder="Пароль:"
                    className={`${styles.input} ${errors.password? styles.error: ''}`}
                    onClick={()=>clearErrors("password")}
                    {...register("password", { required: true})}
                />
                <Button>Войти</Button>
            </form>
            <br/><br/>
            <div>
                <h2>Тестовые пользователи:</h2>
                <div className={styles.testWrapper}>
                    <TestUser name={'test1'} password={'9APKabd9'} onClick={fillForm}></TestUser>
                    <TestUser name={'test2'} password={'lybKKLTf'} onClick={fillForm}></TestUser>
                </div>
            </div>
        </>
    )
}