import { h } from "preact";
import style from "./style";
import Slider from "../slider/slider";
import PNR from "../../components/pnr/pnr";

let crousalWideProperties = {
  images: [
    { url: "https://i.imgur.com/xcSsbVn.jpg", alt: "Immunity Booster Burger" },
    { url: "https://i.imgur.com/xcSsbVn.jpg", alt: "Immunity Booster Burger" },
    { url: "https://i.imgur.com/xcSsbVn.jpg", alt: "Immunity Booster Burger" },
    { url: "https://i.imgur.com/xcSsbVn.jpg", alt: "Immunity Booster Burger" },
  ],
  title: "",
  height: 170,
  width: 289,
  type: "large",
};

let crousalSquareProperties = {
  images: [
    { url: "https://i.imgur.com/uVswM0v.png", alt: "Murgh Biryani" },
    { url: "https://i.imgur.com/uVswM0v.png", alt: "Murgh Biryani" },
    { url: "https://i.imgur.com/uVswM0v.png", alt: "Murgh Biryani" },
    { url: "https://i.imgur.com/uVswM0v.png", alt: "Murgh Biryani" },
    { url: "https://i.imgur.com/uVswM0v.png", alt: "Murgh Biryani" },
  ],
  title: "Top selling dinner dishes",
  height: 87,
  width: 98,
  type: "small",
};

const Home = () => (
  <div class={style.home}>
    {/* <h1>Home</h1>
    <p>This is the Home component.</p> */}
    <PNR />
    <Slider path="slider" properties={crousalWideProperties} />
    <Slider path="slider" properties={crousalSquareProperties} />
  </div>
);

export default Home;
