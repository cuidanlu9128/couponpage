import { connect } from "react-redux";
import "./App.css";
import React, { useMemo } from "react";
import Navbar from "../../Common/Navbar";
import Form from "../Components/Form.jsx";
import Header from "./Header.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  setName,
  setLogo,
  setCategory,
  setProductLine,
  setCompany,
  setExpirationRule,
  setExpiration,
  setExpiryDate,
  setAmount,
  setBase,
  setWeight,
  setLimitationOfQuantity,
  setLimitationOfProvince,
  setLimitationOfCity,
  setTypeOfProducts,
  setTargetGroup,
  addTargetGroup,
  removeTargetGroup,
  setGoodsType,
  setQuantity,
  setDescription,
} from "../Actions/actions";
import { bindActionCreators } from "redux";
import LimitChunkCountPlugin from "webpack/lib/optimize/LimitChunkCountPlugin";

function App(props) {
  const {
    Name,
    Logo,
    Description,
    Category,
    ProductLine,
    Quantity,
    Company,
    GoodsType,
    TargetGroup,
    ExpirationRule,
    Expiration,
    ExpiryDate,
    Amount,
    Base,
    LimitationOfQuantity,
    LimitationOfProvince,
    LimitationOfCity,
    TypeOfProducts,
    Weight,
    dispatch,
  } = props;

  const Cbs = useMemo(() => {
    return bindActionCreators(
      {
        setName,
        setLogo,
        setCategory,
        setProductLine,
        setCompany,
        setExpirationRule,
        setExpiration,
        setExpiryDate,
        setAmount,
        setBase,
        setWeight,
        setLimitationOfQuantity,
        setLimitationOfProvince,
        setLimitationOfCity,
        setTypeOfProducts,
        setTargetGroup,
        addTargetGroup,
        removeTargetGroup,
        setGoodsType,
        setQuantity,
        setDescription,
      },
      dispatch
    );
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <Header />
        <Form
          Name={Name}
          Logo={Logo}
          Category={Category}
          ProductLine={ProductLine}
          Company={Company}
          ExpirationRule={ExpirationRule}
          Expiration={Expiration}
          ExpiryDate={ExpiryDate}
          Amount={Amount}
          Base={Base}
          Weight={Weight}
          LimitationOfQuantity={LimitationOfQuantity}
          LimitationOfProvince={LimitationOfProvince}
          LimitationOfCity={LimitationOfCity}
          TypeOfProducts={TypeOfProducts}
          TargetGroup={TargetGroup}
          Quantity={Quantity}
          Description={Description}
          GoodsType={GoodsType}
          {...Cbs}
        />
      </div>
    </div>
  );
}

export default connect(
  function mapStateToProps(state) {
    return state;
  },
  function mapDispatchToProps(dispatch) {
    return { dispatch };
  }
)(App);
