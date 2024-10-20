import { useDispatch, useSelector } from "react-redux";
const Main = () => {
    const allPosts = useSelector((state) => state.posts.posts);
    const dispatch = useDispatch();
    console.log(allPosts);
    return ( 
        <div>
            Main
        </div>
     );
}
 
export default Main;