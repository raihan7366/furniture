import { React, useState, useEffect } from "react";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import { useCart } from "react-use-cart";
import { useNavigate } from 'react-router-dom';


function Checkout() {
  const { emptyCart, isEmpty, cartTotal, items, updateItemQuantity, removeItem, metadata } =
    useCart();
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (metadata.discount)
      setDiscount(metadata.discount)
  }, []);

  // const applyCoupon = () => {
  //   if (couponCode === "wdpf54") {
  //     const couponDiscount = cartTotal * 0.1; // 10% discount
  //     setDiscount(couponDiscount);
  //   } else {
  //     setDiscount(0); // Reset discount if the coupon code is invalid
  //   }
  // };

  const discountedTotal = cartTotal - discount;

  const placeOrder = async (event) => {
    event.preventDefault();
    try {
      const orderData = {
        first_name: document.getElementById('first_name').value,
        last_name: document.getElementById('last_name').value,
        company_name: document.getElementById('company_name').value,
        address: document.getElementById('address').value,
        country: document.getElementById('country').value,
        postal: document.getElementById('postal').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        items: items,
        sub_total: cartTotal.toFixed(2),
        discount: discount.toFixed(2),
        total: discountedTotal.toFixed(2),
      };

      const response = await fetch(`${global.config.apiUrl}order/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData), // Assuming 'inputs' contains the data you want to send
      });

      const data = await response.json();
      console.log(data);

      if (data.status == 1) {
        // Order was successfully placed
        alert('Order placed successfully!');
        emptyCart();
        navigate('/');
        // You can perform further actions, such as clearing the cart
      } else {
        // Order placement failed
        alert('Failed to place the order. Please try again.');
      }
    } catch (error) {
      // Handle errors here, e.g., network issues or server errors
      console.error(error);
    }
  };


  if (isEmpty);
  return (
    <div>
      <Header />
      <div className="hero">
        <div className="container">
          <h1 className="text-center intro-excerpt text-danger">Checkout</h1>
          <div className="row justify-content-between">
            <div className="col-lg-5">

            </div>
            <div className="col-lg-7"></div>
          </div>
        </div>
      </div>
      {/* <!-- End Hero Section --> */}

      <div className="untree_co-section">
        <div className="container">
          {/* <div className="row mb-5">
            <div className="col-md-12">
              <div className="border p-4 rounded" role="alert">
                Returning customer? <a href="./signin">Click here</a> to login
              </div>
            </div>
          </div> */}
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <h2 className="h3 mb-3 text-danger text-center">Billing Details</h2>
              <div className="p-3 p-lg-5 border bg-white">
                {/* <div className="form-group">
                  <label for="c_country" className="text-black">
                    Country <span className="text-danger">*</span>
                  </label>
                  <select id="c_country" className="form-control">
                    <option value="1">Select a country</option>
                    <option value="2">bangladesh</option>
                    <option value="3">Algeria</option>
                    <option value="4">Afghanistan</option>
                    <option value="5">Ghana</option>
                    <option value="6">Albania</option>
                    <option value="7">Bahrain</option>
                    <option value="8">Colombia</option>
                    <option value="9">Dominican Republic</option>
                  </select>
                </div> */}
                <form>
                  <div className="form-group row">
                    <div className="col-md-6">
                      <label for="first_name" className="text-black">
                        First Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="first_name"
                        name="first_name"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="last_name" className="text-black">
                        Last Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="last_name"
                        name="last_name"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <label for="company_name" className="text-black">
                        Company Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="company_name"
                        name="company_name"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-12">
                      <label for="address" className="text-black">
                        Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="Street address"
                      />
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col-md-6">
                      <label for="state" className="text-black">
                        State / Country <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="country"
                        name="country"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="postal" className="text-black">
                        Postal / Zip <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="postal"
                        name="postal"
                      />
                    </div>
                  </div>

                  <div className="form-group row mb-5">
                    <div className="col-md-6">
                      <label for="email" className="text-black">
                        Email Address <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                      />
                    </div>
                    <div className="col-md-6">
                      <label for="phone" className="text-black">
                        Phone <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="Phone Number"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      for="c_create_account"
                      className="text-black"
                      data-bs-toggle="collapse"
                      href="#create_an_account"
                      role="button"
                      aria-expanded="false"
                      aria-controls="create_an_account"
                    >
                      <input type="checkbox" value="1" id="c_create_account" />
                      Create an account?
                    </label>
                    <div className="collapse" id="create_an_account">
                      <div className="py-2 mb-4">
                        <p className="mb-3">
                          Create an account by entering the information below. If
                          you are a returning customer please login at the top of
                          the page.
                        </p>
                        <div className="form-group">
                          <label for="c_account_password" className="text-black">
                            Account Password{" "}
                          </label>
                          <input
                            type="email"
                            className="form-control"
                            id="c_account_password"
                            name="c_account_password"
                            placeholder=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label
                      for="c_ship_different_address"
                      className="text-black"
                      data-bs-toggle="collapse"
                      href="#ship_different_address"
                      role="button"
                      aria-expanded="false"
                      aria-controls="ship_different_address"
                    >
                      <input
                        type="checkbox"
                        value="1"
                        id="c_ship_different_address"
                      />
                      Ship To A Different Address?
                    </label>
                    <div className="collapse" id="ship_different_address">
                      <div className="py-2">
                        <div className="form-group">
                          <label for="c_diff_country" className="text-black">
                            Country <span className="text-danger">*</span>
                          </label>
                          <select id="c_diff_country" className="form-control">
                            <option value="1">Select a country</option>
                            <option value="2">bangladesh</option>
                            <option value="3">Algeria</option>
                            <option value="4">Afghanistan</option>
                            <option value="5">Ghana</option>
                            <option value="6">Albania</option>
                            <option value="7">Bahrain</option>
                            <option value="8">Colombia</option>
                            <option value="9">Dominican Republic</option>
                          </select>
                        </div>

                        <div className="form-group row">
                          <div className="col-md-6">
                            <label for="c_diff_fname" className="text-black">
                              First Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_fname"
                              name="c_diff_fname"
                            />
                          </div>
                          <div className="col-md-6">
                            <label for="c_diff_lname" className="text-black">
                              Last Name <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_lname"
                              name="c_diff_lname"
                            />
                          </div>
                        </div>

                        <div className="form-group row">
                          <div className="col-md-12">
                            <label
                              for="c_diff_companyname"
                              className="text-black"
                            >
                              Company Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_companyname"
                              name="c_diff_companyname"
                            />
                          </div>
                        </div>

                        <div className="form-group row mb-3">
                          <div className="col-md-12">
                            <label for="c_diff_address" className="text-black">
                              Address <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_address"
                              name="c_diff_address"
                              placeholder="Street address"
                            />
                          </div>
                        </div>

                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Apartment, suite, unit etc. (optional)"
                          />
                        </div>

                        <div className="form-group row">
                          <div className="col-md-6">
                            <label
                              for="c_diff_state_country"
                              className="text-black"
                            >
                              State / Country
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_state_country"
                              name="c_diff_state_country"
                            />
                          </div>
                          <div className="col-md-6">
                            <label for="c_diff_postal_zip" className="text-black">
                              Posta / Zip <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_postal_zip"
                              name="c_diff_postal_zip"
                            />
                          </div>
                        </div>

                        <div className="form-group row mb-5">
                          <div className="col-md-6">
                            <label
                              for="c_diff_email_address"
                              className="text-black"
                            >
                              Email Address
                              <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_email_address"
                              name="c_diff_email_address"
                            />
                          </div>
                          <div className="col-md-6">
                            <label for="c_diff_phone" className="text-black">
                              Phone <span className="text-danger">*</span>
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="c_diff_phone"
                              name="c_diff_phone"
                              placeholder="Phone Number"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label for="c_order_notes" className="text-black">
                      Order Notes
                    </label>
                    <textarea
                      name="c_order_notes"
                      id="c_order_notes"
                      cols="30"
                      rows="5"
                      className="form-control"
                      placeholder="Write your notes here..."
                    ></textarea>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              {/* <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-warning">Coupon Code</h2>
                  <div className="p-3 p-lg-5 border bg-white">
                    <label for="c_code" className="text-black mb-3">
                      Enter your coupon code if you have one
                    </label>
                    <div className="input-group w-75 couponcode-wrap">
                      <input
                        type="text"
                        className="form-control me-2"
                        id="c_code"
                        placeholder="Coupon Code"
                        aria-label="Coupon Code"
                        aria-describedby="button-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-warning text-white"
                          type="button"
                          id="button-addon2 "
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="row mb-5">
                <div className="col-md-12">
                  <h2 className="h3 mb-3 text-danger text-center">Your Order</h2>
                  <div className="p-3 p-lg-5 border bg-white">
                    <table className="table site-block-order-table mb-5">
                      <thead>
                        <th>Product</th>
                        <th>Total</th>
                      </thead>

                      <tbody>
                        {items.map((item) => (
                          <tr>
                            <td>
                              {item.name} <strong className="mx-2">x</strong> 1
                            </td>
                            <td>{"$" + item.price}</td>
                          </tr>
                        ))}


                        <tr>
                          <td className="text-black font-weight-bold">
                            <strong>Cart Subtotal</strong>
                          </td>
                          <td className="text-black">
                            {" "}
                            {"$" + cartTotal.toFixed(2)}
                          </td>
                        </tr>

                        <tr>

                        </tr>
                        <td className="text-black font-weight-bold">
                          <strong>Discount</strong>
                        </td>
                        <td className="text-black">
                          {" "}
                          {"$" + discount.toFixed(2)}
                        </td>
                        <tr>
                          <td className="text-black font-weight-bold">
                            <strong>Order Total</strong>
                          </td>
                          <td className="text-black font-weight-bold">
                            <strong> {"$" + discountedTotal.toFixed(2)}</strong>
                          </td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="border p-3 mb-3">
                      <h3 className="h6 mb-0">
                        <a
                          className="d-block"
                          data-bs-toggle="collapse"
                          href="#collapsebank"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapsebank"
                        >
                          Direct Bank Transfer
                        </a>
                      </h3>

                      <div className="collapse" id="collapsebank">
                        <div className="py-2">
                          <p className="mb-0">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order won’t be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border p-3 mb-3">
                      <h3 className="h6 mb-0">
                        <a
                          className="d-block"
                          data-bs-toggle="collapse"
                          href="#collapsecheque"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapsecheque"
                        >
                          Cheque Payment
                        </a>
                      </h3>

                      <div className="collapse" id="collapsecheque">
                        <div className="py-2">
                          <p className="mb-0">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order won’t be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border p-3 mb-5">
                      <h3 className="h6 mb-0">
                        <a
                          className="d-block"
                          data-bs-toggle="collapse"
                          href="#collapsepaypal"
                          role="button"
                          aria-expanded="false"
                          aria-controls="collapsepaypal"
                        >
                          Paypal
                        </a>
                      </h3>

                      <div className="collapse" id="collapsepaypal">
                        <div className="py-2">
                          <p className="mb-0">
                            Make your payment directly into our bank account.
                            Please use your Order ID as the payment reference.
                            Your order won’t be shipped until the funds have
                            cleared in our account.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <button
                        className="btn btn-primary text-white btn-lg py-3 btn-block"
                        onClick={placeOrder}
                      >
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </form> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Checkout;
