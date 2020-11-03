import React from "react";
import img01 from "./images/chicken.jpg";
import img02 from "./images/ttukbokki.png";
import PropTypes from "prop-types";

function Food({ name, picture, message, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>평점: {rating} / 5.0</h2>
      <img src={picture} alt={message} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};
const foodLike = [
  {
    id: 1,
    name: "치킨",
    image: img01,
    message: "치킨 사진",
    rating: 5,
  },
  {
    id: 2,
    name: "떡볶이",
    image: img02,
    message: "떡볶이 사진",
    rating: 4,
  },
];

function App() {
  return (
    <div>
      <h1>Hello!!!!</h1>
      {foodLike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          alt={dish.message}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
