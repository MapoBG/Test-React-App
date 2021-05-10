import { Component } from 'react';

import getAll from '../../../services/postServices';

import Post from './Post/Post';
import style from './Posts.module.css';

class Posts extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        getAll()
            .then(posts => {
                this.setState({ posts })
            });
    }

    render() {
        return (
            <div className={style.Posts}>
                {this.state.posts.map(p => {
                    return <Post key={p.id} post={p} />
                })}
            </div>
        );
    }
}

export default Posts;

// const Posts = () => {
//     return (
//         <div className={style.Posts}>
//             <Post />
//         </div>
//     );
// };