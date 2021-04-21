import React from "react";
import { WishlistButton } from './wishlistButton';
import { AddToCartButton } from './cartButton';

export function ProductCard({product}){
    return(
    <div className="card-vertical">
    
    <div className="image-container badge-container">
        <img className="img-responsive card-img"
            src={product.image}
        />
        <span style={{display: product.inStock? "none": "block"}}
        className="badge bg-primary">Out of Stock</span>
    </div>

    <div className="text-container">
        <div>
          <h6>
            {product.name}
            
          </h6>
        </div>
        <div>
          <p>
            Rs.{product.price}
          </p>
          <div className={ parseInt(product.rating) > 3 ? "rating-good":"rating-below-avg"}>{product.rating}
          <img src={require("../images/rating-star.svg")} className="rating-star"></img>
          </div>
        </div>
        <div>
          <AddToCartButton
            key={product.id}
            product={product}
          />
          <WishlistButton
              key={product.id}
              product={product}
            />
        </div>
      </div>

    </div>
    )
}