import React from "react";

export const Planets = (props) => {
    return (
    <div className="card" style={{maxWidth: 300}}>
  <img src ={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV3aP6ghCismfKseIh_xieb1SmFcFA-RGH9Q&usqp=CAU"} className="card-img-top" />
  <div className="card-body">
    <h5 className="card-title">Planet title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    );
}