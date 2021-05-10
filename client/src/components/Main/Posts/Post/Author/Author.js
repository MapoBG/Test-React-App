// import style from './Author.module.css';

const Author = ({ author }) => {
    return (
        <div>
            <span>
                <small>Author: </small>
                {author}
            </span>
        </div>
    );
};

export default Author;