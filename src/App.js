import OurFriendsCard from "./components/OurFriendsCard/OurFriendsCard"
import sponsors from "./data/sponsors.json"
import defaultImage from "./components/OurFriendsCard/defaultImage.jpg";
const App = () => {
  return (
    <OurFriendsCard items={ sponsors} image={defaultImage} />
  ) 
};

export default App;
