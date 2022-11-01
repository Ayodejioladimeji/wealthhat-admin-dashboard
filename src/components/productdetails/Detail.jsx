import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

//
import Tabs from "../tab/Tabs";
import "./Detail.css";
import DetailsThumb from "./DetailsThumb";
import { addComma } from "comma-separator";
import Loading from "./../../common/alert/Loading";
import Goback from "../../common/goback/Goback";

//

const Detail = () => {
  const { all_products } = useSelector((state) => state.products);
  const { alert } = useSelector((state) => state);
  const [index, setIndex] = useState(0);
  const { productsid } = useParams();
  const [detailProduct, setDetailProduct] = useState([]);

  //  get detail product
  useEffect(() => {
    if (productsid) {
      all_products.forEach((item) => {
        if (item._id === productsid) {
          setDetailProduct(item);
        }
      });
    }
  }, [all_products, productsid]);

  const {
    productname,
    productamount,
    vendor,
    productimages,
    productcolors,
    productsizes,
    productdiscount,
    productdescription,
    productoldamount,
  } = detailProduct;

  //

  return (
    <div className="product-detail">
      <div className="product-detail-center">
        <h1>Product Details</h1>
        <Goback />

        {/*  */}
        {alert.productloading ? (
          <div className="detail-loading">
            <Loading width="25px" height="25px" color="#fff" />
          </div>
        ) : (
          <div className="product-detail-div">
            <div className="detail-one">
              <h2>{productname}</h2>
              <h1 className="detail-price">
                ₦{addComma(Number(productamount))}
              </h1>
              {productoldamount !== null && (
                <h2 className="detail-old-price">
                  ₦{addComma(Number(productoldamount))}
                </h2>
              )}

              <p className="details-vendor">{vendor}</p>

              <DetailsThumb
                indexs={index}
                images={productimages && productimages}
                setIndex={setIndex}
              />
            </div>

            {/* detail two */}
            <div className="detail-two">
              <img src={productimages && productimages[index]} alt="" />
            </div>

            {/* detail three */}
            <div className="detail-three">
              <img src="/assets/products/star.svg" alt="" />

              {productcolors?.length !== 0 && (
                <div className="colors-section">
                  <small>Colors</small>

                  <div className="color-div">
                    {productcolors?.map((color) => {
                      return (
                        <div
                          className="actual-color"
                          style={{ background: color }}
                        ></div>
                      );
                    })}
                  </div>
                </div>
              )}

              {productsizes?.length !== 0 && (
                <div className="sizes">
                  <small>Sizes</small>

                  <div className="size-div">
                    {productsizes?.map((size) => {
                      return <div className="actual-size">{size}</div>;
                    })}
                  </div>
                </div>
              )}

              {productdiscount !== null && (
                <div className="size">
                  <span className="discounts">
                    Discount : {productdiscount}%
                  </span>
                </div>
              )}

              <div className="brand-name">
                <p>
                  Brand : <b>LG</b>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* description section */}
      <div className="description">
        <Tabs productdescription={productdescription} />
      </div>
    </div>
  );
};

export default Detail;
