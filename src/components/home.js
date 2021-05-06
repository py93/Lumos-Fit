import React from "react";
import { featuredCategories } from "../staticData/categories.data";
import { useDataContext } from "../contexts/DataContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Carousel } from "./carousel.jsx";
export function Home() {
  const { dispatch } = useDataContext();
  const navigate = useNavigate();

  return (
    <>
      <h4 className="home-welcome">
        LumosFit Store: One stop for all strength training products
        <br />
        <NavLink to="/products" className="badge bg-primary">
          Shop Now
        </NavLink>
      </h4>
      <Carousel />
      <div className="homepage-container">
        <h4 className="center heading-primary">Featured Categories</h4>

        <div className="grid-4-column-layout">
          {featuredCategories.map((category) => {
            return (
              <div
                key={category.name}
                className="card-vertical card-hover"
                onClick={() => {
                  dispatch({
                    type: "FILTER_BY_CATEGORIES",
                    payload: category.name,
                  });
                  navigate("/products");
                }}
              >
                <div className="overlay-container">
                  <div className="image-container">
                    <img
                      className="img-responsive"
                      src={category.imgSrc}
                      alt={category.name}
                    />
                  </div>
                </div>
                <div className="overlay-text text-center">
                  <h3 className="">{category.name}</h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
