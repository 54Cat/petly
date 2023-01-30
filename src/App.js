import OurFriendsCard from "./components/OurFriendsCard/OurFriendsCard"
import sponsors from "./data/sponsors.json"
import news from "./data/news.json"
import defaultImage from "./components/OurFriendsCard/defaultImage.jpg";
import NewsCard from "components/NewsCard/NewsCard";


const App = () => {
  return (
    <>
      <OurFriendsCard items={sponsors} image={defaultImage} />
      <NewsCard items={news} />
    </>
    
  ) 
};

export default App;
