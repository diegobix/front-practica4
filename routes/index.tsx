import StartComp from "../islands/StartComp.tsx";

export type Tpokemon = {
  _id: string;
  name: string;
  image: string;
  sound: string;
};

const Home = () => {
  return <StartComp />;
};

export default Home;
