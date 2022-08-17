import SearchBar from "./SearchBar";
import "../Pages/HomePage.scss";
import TaskList from "./TaskList";

const HomePage = () => {
    return ( 
        <div className="homepage">
            <div className="safe-zone">
                <SearchBar/>
                <TaskList/>
            </div>
        </div>
     );
}
 
export default HomePage;