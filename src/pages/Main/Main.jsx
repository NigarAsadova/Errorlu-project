import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, removePost } from "../../features/Main/MainApi";

const Main = () => {
    const allPosts = useSelector((state) => state.posts.posts.posts);
    const isLoading = useSelector((state) => state.posts.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])
    return ( 
        <div>
            <h2>Posts</h2>
            {
                isLoading ? 'is loading .. ' : allPosts?.length > 0 ? (
                    <ul>
                        {allPosts.map((post) => (
                            <div>
                                <li key={post.id}>{post.title}</li>
                                <button type="button" onClick={() => dispatch(removePost(post.id))} >Remove</button>
                            </div>                        
                        ))}
                    </ul>
                ) : (
                    <p>There is no data</p>
                )
            }
        </div>
     );
}
 
export default Main;