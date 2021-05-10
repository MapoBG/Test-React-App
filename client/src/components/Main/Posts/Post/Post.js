import Author from './Author/Author';
import style from './Post.module.css';

const Post = ({ post }) => {
    return (
            <div dataset={post.id} className={style.Post}>
                <img src="blue-origami-bird.png" alt="Origami" />
                <p className={style.description}>{post.content}</p>
                <Author author={post.author} />
            </div>
    );
};

export default Post;