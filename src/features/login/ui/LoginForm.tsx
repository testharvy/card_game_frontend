import {SubmitHandler, useForm, Controller} from "react-hook-form";
import styles from './LoginForm.module.scss'
import TestUser from "./TestUser.tsx";
import {LoginAction} from "@/features/login";
import {loginData} from "@/entities/user";
import {Button, Input} from "@/shared/ui";
import {useNavigate} from "react-router-dom";


export function LoginForm(){
    const {control, handleSubmit, reset, formState: { errors, isValid }} = useForm<loginData>({
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
                <Controller
                    name="username"
                    control={control}
                    rules={{ required: 'Обязательное поле' }}
                    render={({ field:{value, onChange} }) => <Input
                        value={value}
                        onChange={onChange}
                        type={'text'} placeholder={'Имя:'}
                        error={errors.username?.message}/>}
                />
                <Controller
                    name="password"
                    control={control}
                    rules={{ required: 'Обязательное поле'}}
                    render={({ field:{value, onChange} }) => <Input
                        value={value}
                        onChange={onChange}
                        type={'password'}
                        placeholder={'Пароль:'}
                        error={errors.password?.message}/>}
                />
                <Button  disabled={!isValid}>Войти</Button>
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