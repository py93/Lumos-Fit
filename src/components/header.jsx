import { useDataContext } from "../contexts/DataContext";
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import { filterDataOnStatus } from './../utils/utilFunctions';
export function Header() {
  const { state } = useDataContext();
  const navRef = useRef(null);

  return (
    // <nav className="navbar">
    //   <div className="nav-section">
    //     <img src={require("../images/logo.png")} />
    //     <NavLink to="/" className="header link">
    //       LumosFit
    //     </NavLink>
    //   </div>
    //   <ul className="list-non-bullet">
    //     <li className="list-item-inline link">
    //       <NavLink
    //         to="/products"
    //         className="link"
    //         activeClassName="link-active"
    //       >
    //         Products
    //       </NavLink>
    //     </li>
    //     <li className="list-item-inline">
    //       <NavLink to="/cart" className="link" activeClassName="link-active">
    //         Cart
    //       </NavLink>
    //     </li>
    //     <li className="list-item-inline">
    //       <NavLink
    //         to="/wishlist"
    //         className="link"
    //         activeClassName="link-active"
    //       >
    //         Wishlist
    //       </NavLink>
    //     </li>
    //     <li className="list-item-inline">
    //       <NavLink to="/address" className="link" activeClassName="link-active">
    //         Manage Addresses
    //       </NavLink>
    //     </li>
    //     <li className="list-item-inline link">
    //       <NavLink to="/login" className="link" activeClassName="link-active">
    //         Login
    //       </NavLink>
    //     </li>
    //   </ul>
    // </nav>
    <nav ref={navRef} className="navbar">
      <div className="nav-section">
        <div className="burger nav-section-items" onClick={() => {navRef.current.classList.toggle("active")}}>
          <div className="line1"></div>
          <div className="line1"></div>
          <div className="line1"></div>
        </div>

        <div className="nav-brand">
          <img src={require("../images/logo.png")} />
          <NavLink to="/" className="link">
            LumosFit
          </NavLink>
        </div>
      </div>
      <ul className="navbar-links">
          <li className="list-inline-item">
            <NavLink
              end
              to="/"
              activeClassName="navlinks-active"
              className="navlinks-style text-left"
            >
              Home
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink
              end
              activeClassName="navlinks-active"
              to="/products"
              className="navlinks-style text-left"
            >
              Products
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink
              end
              activeClassName="navlinks-active"
              to="/address"
              className="navlinks-style text-left"
            >
              Manage Addresses
            </NavLink>
          </li>
          <li className="list-inline-item">
            <NavLink
              end
              activeClassName="navlinks-active"
              to="/logout"
              className="navlinks-style text-left"
            >
              Logout
            </NavLink>
          </li>
        </ul>
      <div className="nav-section">
      <NavLink to="/wishlist" className="nav-icon-link">
            <span className="nav-icon badge-container">
              <i className="fas fa-heart"></i>
              <span className="status-badge status-badge-number flex">
                {filterDataOnStatus(state.wishlist).length}
              </span>
            </span>
      </NavLink>
      <NavLink to="/cart" className="nav-icon-link">
            <span className="nav-icon badge-container">
              <i className="fas fa-shopping-cart"></i>
               <span className="status-badge status-badge-number flex">
                {filterDataOnStatus(state.cart).length}
              </span>
            </span>
      </NavLink>

      </div>
    </nav>
  );
}
