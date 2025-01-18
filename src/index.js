import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarRating from "./StarRating";

function Test() {
  const [movieRating, setMovieRating] = React.useState(0);

  return (
    <div>
      <StarRating
        maxRating={10}
        className="test"
        onSetRating={setMovieRating}
      />
      <p>This movie rated {movieRating} stars</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} className="test" />
    <StarRating
      maxRating={5}
      color="red"
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>
);
