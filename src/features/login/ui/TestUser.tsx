import styles from "./LoginForm.module.scss";
import {Button} from "@/shared/ui";

interface Props{
    name: string,
    password: string,
    onClick: (name:string , password:string) => void;
}

const TestUser = ({name, password, onClick}:Props) => {
    return (
        <div className={styles.testUser}>
            <div className={styles.testUserField}>Имя: {name}</div>
            <div className={styles.testUserField}>Пароль: {password}</div>
            <Button onClick={()=>onClick(name, password)}>Заполнить</Button>
        </div>
    );
};

export default TestUser;