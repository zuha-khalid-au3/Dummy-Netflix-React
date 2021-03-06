import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import "./Home.scss";
const Home = () => {
  return (
    <div className="home">
      <Navbar/>
      <img
        src="https://images.pexels.com/photos/6899260/pexels-photo-6899260.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
        width="100%"
      />
      <Featured type="movie" />
      <List />
    </div>
  );
};

export default Home;
