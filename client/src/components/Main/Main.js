import style from './Main.module.css';
import Posts from './Posts/Posts';


const Main = () => {
    return (
        <main className={style.Main}>
            <h1>Sooooooome Heading</h1>
            <Posts />
        </main>
    );
};

export default Main;