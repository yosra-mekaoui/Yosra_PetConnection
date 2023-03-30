import { useNavigate } from "react-router-dom";
import { NavLink, Routes, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Checkout() {
  return (
    <>
      <div className="inner-page-banner">
        <div className="breadcrumb-vec-btm">
          <img
            className="img-fluid"
            src="assets/images/bg/inner-banner-btm-vec.png"
            alt=""
          />
        </div>
        <div className="container">
          <div className="row justify-content-center align-items-center text-center">
            <div className="col-lg-6 align-items-center">
              <div className="banner-content">
                <h1>Check Out</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Check Out
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="banner-img d-lg-block d-none">
                <div className="banner-img-bg">
                  <img
                    className="img-fluid"
                    src="assets/images/bg/inner-banner-vec.png"
                    alt=""
                  />
                </div>
                <img
                  className="img-fluid"
                  src="assets/images/bg/inner-banner-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="checkout-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-7">
              <div className="form-wrap box--shadow mb-30">
                <h4 className="title-25 mb-20">Billing Details</h4>
                <form>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your first name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Country / Region</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your country name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Street Address</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="House and street name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <div className="nice-select" tabIndex={0}>
                          <span className="current">Town / City</span>
                          <ul className="list">
                            <li
                              data-value="Town / City"
                              className="option selected"
                            >
                              Town / City
                            </li>
                            <li data-value="Dhaka" className="option">
                              Dhaka
                            </li>
                            <li data-value="Saidpur" className="option">
                              Saidpur
                            </li>
                            <li data-value="Newyork" className="option">
                              Newyork
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <input
                          type="text"
                          name="fname"
                          placeholder="Post Code"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <label>Additional Information</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your Phone Number"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email Address"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <input
                          type="text"
                          name="postcode"
                          placeholder="Post Code"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <textarea
                          name="message"
                          placeholder="Order Notes (Optional)"
                          rows="6"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="form-wrap box--shadow">
                <h4 className="title-25 mb-20">Ship to a Different Address?</h4>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>First Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your first name"
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-inner">
                        <label>Last Name</label>
                        <input
                          type="text"
                          name="fname"
                          placeholder="Your last name"
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-inner">
                        <textarea
                          name="message"
                          placeholder="Order Notes (Optional)"
                          rows="3"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <aside className="col-lg-5">
              <div className="added-product-summary mb-30">
                <h5 className="title-25 checkout-title">Order Summary</h5>
                <ul className="added-products">
                  <li className="single-product d-flex justify-content-start">
                    <div className="product-img">
                      <img src="assets/images/bg/check-out-01.png" alt="" />
                    </div>
                    <div className="product-info">
                      <h5 className="product-title">
                        <a href="#">Whiskas Cat Food Core Tuna</a>
                      </h5>
                      <div className="product-total d-flex align-items-center">
                        <div className="quantity">
                          <div className="quantity d-flex align-items-center">
                            <div className="quantity-nav nice-number d-flex align-items-center">
                              <input type="number" value="1" min="1" />
                            </div>
                          </div>
                        </div>
                        <strong>
                          {" "}
                          <i className="bi bi-x-lg px-2"></i>
                          <span className="product-price">$25.00</span>
                        </strong>
                      </div>
                    </div>
                    <div className="delete-btn">
                      <i className="bi bi-x-lg"></i>
                    </div>
                  </li>
                  <li className="single-product d-flex justify-content-start">
                    <div className="product-img">
                      <img src="assets/images/bg/check-out-02.png" alt="" />
                    </div>
                    <div className="product-info">
                      <h5 className="product-title">
                        <a href="#">Friskies Kitten Discoveries.</a>
                      </h5>
                      <div className="product-total d-flex align-items-center">
                        <div className="quantity">
                          <div className="quantity d-flex align-items-center">
                            <div className="quantity-nav nice-number d-flex align-items-center">
                              <input type="number" value="1" min="1" />
                            </div>
                          </div>
                        </div>
                        <strong>
                          {" "}
                          <i className="bi bi-x-lg px-2"></i>
                          <span className="product-price">$39.00</span>
                        </strong>
                      </div>
                    </div>
                    <div className="delete-btn">
                      <i className="bi bi-x-lg"></i>
                    </div>
                  </li>
                  <li className="single-product d-flex justify-content-start">
                    <div className="product-img">
                      <img src="assets/images/bg/check-out-03.png" alt="" />
                    </div>
                    <div className="product-info">
                      <h5 className="product-title">
                        <a href="#">Natural Dog Fresh Food.</a>
                      </h5>
                      <div className="product-total d-flex align-items-center">
                        <div className="quantity d-flex align-items-center">
                          <div className="quantity-nav nice-number d-flex align-items-center">
                            <input type="number" value="1" min="1" />
                          </div>
                        </div>
                        <strong>
                          {" "}
                          <i className="bi bi-x-lg px-2"></i>
                          <span className="product-price">$18.00</span>
                        </strong>
                      </div>
                    </div>
                    <div className="delete-btn">
                      <i className="bi bi-x-lg"></i>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="summery-card cost-summery mb-30">
                <table className="table cost-summery-table">
                  <thead>
                    <tr>
                      <th>Subtotal</th>
                      <th>$128.70</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="tax">Tax</td>
                      <td>$5</td>
                    </tr>
                    <tr>
                      <td>Total ( tax excl.)</td>
                      <td>$15</td>
                    </tr>
                    <tr>
                      <td>Total ( tax incl.)</td>
                      <td>$15</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="summery-card total-cost mb-30">
                <table className="table cost-summery-table total-cost">
                  <thead>
                    <tr>
                      <th>Total</th>
                      <th>$162.70</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <form className="payment-form">
                <div className="payment-methods mb-50">
                  <div className="form-check payment-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      Check payments
                    </label>
                    <p className="para">
                      Please send a check to Store Name, Store Street, Store
                      Town, Store State / County, Store Postcode.
                    </p>
                  </div>
                  <div className="form-check payment-check">
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      Cash on delivery
                    </label>
                    <p className="para">Pay with cash upon delivery.</p>
                  </div>
                  <div className="form-check payment-check paypal d-flex flex-wrap align-items-center">
                    <label
                      className="form-check-label"
                      htmlFor="flexRadioDefault3"
                    >
                      PayPal
                    </label>
                    <img src="assets/images/bg/payonert.png" alt="" />
                    <a href="#" className="about-paypal">
                      What is PayPal
                    </a>
                  </div>
                  <div className="payment-form-bottom d-flex align-items-start">
                    <input type="checkbox" id="terms" />
                    <label htmlFor="terms">
                      I have read and agree to the website{" "}
                      <a href="#">Terms and conditions</a>
                    </label>
                  </div>
                </div>
                <div className="place-order-btn">
                  <button type="submit" className="primary-btn1 lg-btn">
                    Place Order
                  </button>
                </div>
              </form>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}

export default Checkout;
