import Hero from "../../components/Hero/Hero";
import Menu from "../../components/Menu/Menu";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-page_container">
      <Hero />
      <Menu />
    </div>
  );
};

export default Home;
