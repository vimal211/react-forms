import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      personal: {
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        IFSC_code: "",
        accNumber: "",
        countryID: "",
        city: "",
        postcode: "",
        address: "",
      },
      buisness: {
        fullName: "",
        buisnessName: "",
        email: "",
        phoneNumber: "",
      },
      category: "Personal",
      step: 1,
      country: "IN",
    };
  }

  switchPersonal = () => {
    this.setState({ category: "Personal", step: 1 });
    console.log(this.state.category);
  };
  switchBuisness = () => {
    this.setState({ category: "Buisness", step: 1 });
    console.log(this.state.category);
  };

  changeBN = (e) => {
    this.setState({
      buisness: { ...this.state.buisness, buisnessName: e.target.value },
    });
  };
  changeEmail = (e) => {
    if ((this.state.category = "Personal")) {
      this.setState({
        personal: { ...this.state.personal, email: e.target.value },
      });
    } else {
      this.setState({
        buisness: { ...this.state.buisness, email: e.target.value },
      });
    }
  };
  changeFN = (e) => {
    this.setState({
      personal: { ...this.state.personal, firstName: e.target.value },
    });
  };
  changeLN = (e) => {
    this.setState({
      personal: { ...this.state.personal, lastName: e.target.value },
    });
  };
  changePh = (e) => {
    if ((this.state.category = "Personal")) {
      this.setState({
        personal: { ...this.state.personal, phoneNumber: e.target.value },
      });
    } else {
      this.setState({
        buisness: { ...this.state.buisness, phoneNumber: e.target.value },
      });
    }
  };

  nextBtn = (e) => {
    let num = this.state.step;
    this.setState({ step: num + 1 });
    e.preventDefault();
  };

  renderForm1 = () => {
    let form;
    let category = this.state.category;
    if (category === "Personal") {
      form = (
        <div className="formDetails">
          <input
            onChange={this.changeFN}
            type="text"
            placeholder="First name"
          />
          <input onChange={this.changeLN} type="text" placeholder="Last name" />
          <input onChange={this.changeEmail} type="text" placeholder="Email" />
          <input
            onChange={this.changePh}
            type="text"
            placeholder="Phone number"
          />
        </div>
      );
    } else {
      form = (
        <div className="formDetails">
          <input
            onChange={this.changeFullN}
            type="text"
            placeholder="Full name"
            defaultValue={this.state.buisness.fullName}
          />
          <input
            onChange={this.changeBN}
            type="text"
            placeholder="Buisness name"
            defaultValue={this.state.buisness.buisnessName}
          />
          <input
            onChange={this.changeEmail}
            type="text"
            placeholder="Email"
            defaultValue={this.state.buisness.email}
          />
          <input
            onChange={this.changePh}
            type="number"
            placeholder="Phone number"
            defaultValue={this.state.buisness.phoneNumber}
          />
        </div>
      );
    }
    return form;
  };
  changeCountry = (e) => {
    this.setState({ country: e.target.value });
  };

  renderForm2 = () => {
    let country = this.state.country;
    let currency;
    let form;
    if (country === "IN") {
      currency = "Indian rupee(INR)";
      form = (
        <div className="formDetails">
          <div className="tag">
            <p>Country</p>
            <select onChange={this.changeCountry} id="Country" name="Country">
              <option value="IN">India</option>
              <option value="USA">United States of America</option>
            </select>{" "}
          </div>
          <div className="tag">
            <p>Currency</p>
            <p>{currency}</p>
          </div>
          <div className="tag">
            <p>Bank details format</p>
            <p>Local bank details</p>
          </div>
          <div className="tag">
            <input type="text" placeholder="IFSC code" />
            <input type="text" placeholder="Account Number" />
          </div>
        </div>
      );
    } else {
      currency = "United States dollor(USD)";
      form = (
        <div className="formDetails">
          <div className="tag">
            <p>Country</p>
            <select onChange={this.changeCountry} id="Country" name="Country">
              <option value="IN">India</option>
              <option value="USA">United States of America</option>
            </select>{" "}
          </div>
          <div className="tag">
            <p>Currency</p>
            <p>{currency}</p>
          </div>
          <div className="tag">
            <p>Bank details format</p>
            <p>Local bank details</p>
          </div>
          <div className="tag">
            <input type="text" placeholder="ACH routing number" />
            <input type="text" placeholder="Account Number" />
          </div>
        </div>
      );
    }
    return form;
  };

  renderForm3 = () => {
    let country = this.state.country;
    let form = (
      <div className="formDetails">
        <div className="tag">
          <p>Country</p>
          <input type="text" defaultValue={country} readOnly />
        </div>
        <div className="tag">
          <input type="text" placeholder="City" />
        </div>
        <div className="tag">
          <input type="number" placeholder="Post code" />
        </div>
        <div className="tag">
          <input type="text" placeholder="Address" />
        </div>
      </div>
    );
    return form;
  };

  renderCategory = () => {
    let step = this.state.step;
    let categoryList;
    if (step === 1) {
      categoryList = (
        <div className="catogery">
          <div
            className={this.state.category === "Personal" ? "active" : ""}
            onClick={this.switchPersonal}
          >
            Personal
          </div>
          <div
            className={this.state.category === "Buisness" ? "active" : ""}
            onClick={this.switchBuisness}
          >
            Buisness
          </div>
        </div>
      );
    } else {
      categoryList = <div></div>;
    }
    return categoryList;
  };

  render() {
    return (
      <div className="Form_container">
        <form className="form">
          <div className="steps">
            <div>
              <p className={this.state.step <= 3 ? "stepActive" : ""}>
                {this.state.step < 2 ? "1" : "✔"}
              </p>
              <p>Beneficiary</p>
            </div>
            <div>______________</div>
            <div>
              <p
                className={
                  this.state.step > 1 && this.state.step <= 3
                    ? "stepActive"
                    : ""
                }
              >
                {this.state.step < 3 ? "2" : "✔"}
              </p>
              <p>Bank details</p>
            </div>
            <div>______________</div>
            <div>
              <p className={this.state.step === 3 ? "stepActive" : ""}>
                {this.state.step < 4 ? "3" : "✔"}
              </p>
              <p>Address</p>
            </div>
          </div>
          {this.renderCategory()}
          {this.state.step === 1
            ? this.renderForm1()
            : this.state.step === 2
            ? this.renderForm2()
            : this.renderForm3()}

          <div className="buttons">
            <button onClick={this.nextBtn} className="nextBtn">
              {this.state.step === 3 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
