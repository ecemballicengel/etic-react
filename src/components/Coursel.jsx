import React from "react";

function Coursel() {
  return (
    <div
      style={{
        width: "80%",
        marginLeft: "10%",
        paddingTop: "15px",
      }}
    >
      <div id="carouselExample" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="">
              <img
                src="https://n11scdn.akamaized.net/a1/org/21/11/04/85/63/23/35/31/47/56/31/24/8738764844480088148.jpg"
                className="d-block w-100 h-50"
                alt="..."
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="">
              <img
                src="https://images.lifestyleasia.com/wp-content/uploads/sites/7/2023/05/30113903/glow-recipe-korean-beauty-products-1600x900.jpg"
                className="d-block w-100 h-50"
                alt="..."
              />
            </a>
          </div>
          <div className="carousel-item">
            <a href="">
              <img
                src="https://www.dodoskin.com/cdn/shop/articles/best-Korean-Skin-Care-products_6a432f2a-5081-47ac-9bb7-310362c68e56_1024x500.jpg?v=1620103543"
                className="d-block w-100 h-50"
                alt="..."
              />
            </a>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Coursel;
