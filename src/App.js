import OurFriendsCard from "./components/OurFriendsCard/OurFriendsCard"
import sponsors from "./data/sponsors.json"

const App = () => {
  return (
    <OurFriendsCard items={ sponsors} />
  ) 
};

export default App;
