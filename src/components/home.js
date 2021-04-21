import React from "react";
import { featuredCategories } from "../api/mock.server";
import { useDataContext } from "../contexts/DataContext";
import { NavLink, useNavigate } from "react-router-dom";
export function Home() {
  const { dispatch } = useDataContext();
  const navigate = useNavigate();

  return (
    <>
    <h4 className="home-welcome">Welcome to LumosFit Store! <br/><br/> Your one stop for all strength training items.<br/>
    <br/>
    <NavLink to="/products" className="badge bg-primary alt">
              Shop Now
            </NavLink></h4>
      <div className="homepage-container">
        <h3 className="center heading-secondary">Featured Categories</h3>
        <div className="spacer-1rem"></div>
        <div className="grid-4-column-layout">
          {featuredCategories.map((category) => {
            return (
              <div
                key={category.name}
                className="card-vertical card-hover"
                onClick={() => {
                  dispatch({
                    type: "FILTER_BY_CATEGORIES",
                    payload: category.name
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
