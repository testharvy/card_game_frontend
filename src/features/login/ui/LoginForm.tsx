import {
    Form,
} from "react-router-dom";
import styles from './LoginForm.module.scss'

export function LoginForm(){
    return(
        <>
            <Form method="post">
                <h1>Войти</h1>
                <label>
                    Имя:<br/>
                    <input type="text" name="username" />
                </label>
                <br/><br/>
                <label>
                    Пароль:<br/>
                    <input type="password" name="password" />
                </label>
                <br/><br/>
                <input type="submit" value="Отправить" />
            </Form>
            <br/><br/>
            <div>
                Тестовые пользователи:<br/>
                <div className={styles.testUser}>
                    Имя: test1 <br/>
                    Пароль: 9APKabd9
                </div>
                <div className={styles.testUser}>
                    Имя: test2 <br/>
                    Пароль: lybKKLTf
                </div>
            </div>
        </>
    )
}