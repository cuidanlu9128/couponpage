import "./Form.css";
import React, { memo, useMemo } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import Button from "./Button.jsx";

// ----------------NameForm---------------------
const NameForm = memo(function NameForm(props) {
  const { Name, setName } = props;
  console.log(Name);
  return (
    <div className="col-md-3 mb-3">
      <label for="validationServer01">Template name</label>
      <input
        type="text"
        className="form-control is-valid"
        id="validationServer01"
        value={Name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

NameForm.propTypes = {
  Name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
};

// --------------------TemplateLogoForm------------------------
const TemplateLogoForm = memo(function TemplateLogoForm(props) {
  const { Logo, setLogo } = props;
  return (
    <div className="col-md-4 mb-3">
      <label for="validationServer01">Template Logo</label>
      <input
        type="text"
        className="form-control is-valid"
        id="validationServer01"
        value={Logo}
        onChange={(e) => setLogo(e.target.value)}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

TemplateLogoForm.propTypes = {};

// --------------------CouponCategoryForm------------------------
const CouponCategoryForm = memo(function CouponCategoryForm(props) {
  const { Category, setCategory } = props;
  return (
    <div className="col-md-2 mb-3">
      <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
        Coupon Category
      </label>
      <select
        className="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        value={Category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option selected>Choose...</option>
        <option value="001">Save</option>
        <option value="002">SavewithPurchase</option>
        <option value="003">Discount</option>
      </select>
    </div>
  );
});

// --------------------------ProductLineForm-------------------------
const ProductLineForm = memo(function ProductLineForm(props) {
  const { ProductLine, setProductLine } = props;
  return (
    <div className="col-md-3 mb-3">
      <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
        Product Line
      </label>
      <select
        className="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        value={ProductLine}
        onChange={(e) => setProductLine(e.target.value)}
      >
        <option selected>Choose...</option>
        <option value={1}>Save</option>
        <option value={2}>SavewithPurchase</option>
        <option value={3}>Discount</option>
      </select>
    </div>
  );
});

ProductLineForm.propTypes = {};
// --------------------------CompanyNameForm-------------------------
const CompanyNameForm = memo(function CompanyNameForm(props) {
  const { Company, setCompany } = props;
  return (
    <div className="col-md-3 mb-3">
      <label for="validationServer01">Company Name</label>
      <input
        type="text"
        className="form-control is-valid"
        id="validationServer01"
        value={Company}
        onChange={(e) => setCompany(e.target.value)}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

CompanyNameForm.propTypes = {};

// --------------------------ExpirationRule-------------------------
const ExpirationRuleForm = memo(function ExpirationRuleForm(props) {
  const { ExpirationRule, setExpirationRule } = props;
  return (
    <div className="col-md-2 mb-3">
      <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
        Expiration Rule
      </label>
      <select
        className="custom-select my-1 mr-sm-2"
        id="inlineFormCustomSelectPref"
        value={ExpirationRule}
        onChange={(e) => setExpirationRule(e.target.value)}
      >
        <option selected>Choose...</option>
        <option value="1">Fixed</option>
        <option value="2">Flexible</option>
      </select>
    </div>
  );
});

ExpirationRuleForm.propTypes = {};

// --------------------------ExpirationForm------------------------
const ExpirationForm = memo(function ExpirationForm(props) {
  const { Expiration, setExpiration } = props;
  return (
    <div className="col-md-2 mb-3">
      <label for="validationServer01">Period of validity</label>
      <input
        type="text"
        className="form-control is-valid"
        id="validationServer01"
        value={Expiration}
        onChange={(e) => setExpiration(e.target.value)}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

ExpirationForm.propTypes = {};

// --------------------------ExpiryDate------------------------
const ExpiryDateForm = memo(function ExpiryDateForm(props) {
  const { ExpiryDate, setExpiryDate } = props;
  return (
    <div className="col-md-2 mb-3">
      <label for="validationServer01">Expiry Date</label>
      <input
        type="date"
        className="form-control is-valid"
        id="validationServer01"
        value={ExpiryDate}
        onChange={(e) => setExpiryDate(e.target.value)}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

ExpiryDateForm.propTypes = {};
// --------------------------GoodsType------------------------
const GoodsTypeForm = memo(function GoodsTypeForm(props) {
  const { GoodsType, setGoodsType } = props;
  return (
    <div className="col-md-3 mb-3">
      <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
        Goods Type
      </label>
      <select
        class="custom-select"
        size="3"
        id="goodstype-select"
        value={GoodsType}
        multiple
      >
        <option selected>Open this select menu</option>
        <option
          value="1"
          onClick={(e) => {
            var box = document.getElementById("goodstype-select");
            var res = [];
            for (var i = 0; i < box.length; i++) {
              if (box.options[i].selected) {
                res.push(box.options[i].value);
              }
            }
            setGoodsType(res);
          }}
        >
          One
        </option>
        <option
          value="2"
          onClick={(e) => {
            var box = document.getElementById("goodstype-select");
            var res = [];
            for (var i = 0; i < box.length; i++) {
              if (box.options[i].selected) {
                res.push(box.options[i].value);
              }
            }
            setGoodsType(res);
          }}
        >
          Two
        </option>
        <option
          value="3"
          onClick={(e) => {
            var box = document.getElementById("goodstype-select");
            var res = [];
            for (var i = 0; i < box.length; i++) {
              if (box.options[i].selected) {
                res.push(box.options[i].value);
              }
            }
            setGoodsType(res);
          }}
        >
          Three
        </option>
      </select>
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

ExpiryDateForm.propTypes = {};

// -----------------------TargetGroups----------------------
const TargetGroupsForm = memo(function TargetGroupsForm(props) {
  const { TargetGroups, addTargetGroup, removeTargetGroup } = props;
  return (
    <div className="col-md-3 mb-3">
      <div>
        <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
          Target Group
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox1"
          value="1"
          onChange={function (e) {
            var box = document.getElementById("inlineCheckbox1");
            if (box.checked === true) {
              addTargetGroup(e.target.value);
            } else {
              removeTargetGroup(e.target.value);
            }
          }}
        />
        <label class="form-check-label" for="inlineCheckbox1">
          Man
        </label>
      </div>
      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox2"
          value="2"
          onChange={function (e) {
            var box = document.getElementById("inlineCheckbox2");
            if (box.checked === true) {
              addTargetGroup(e.target.value);
            } else {
              removeTargetGroup(e.target.value);
            }
          }}
        />
        <label class="form-check-label" for="inlineCheckbox2">
          Women
        </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox3"
          value="3"
          onChange={function (e) {
            var box = document.getElementById("inlineCheckbox3");
            if (box.checked === true) {
              addTargetGroup(e.target.value);
            } else {
              removeTargetGroup(e.target.value);
            }
          }}
        />
        <label class="form-check-label" for="inlineCheckbox2">
          Elder
        </label>
      </div>

      <div class="form-check form-check-inline">
        <input
          class="form-check-input"
          type="checkbox"
          id="inlineCheckbox4"
          value="4"
          onChange={function (e) {
            var box = document.getElementById("inlineCheckbox4");
            if (box.checked === true) {
              addTargetGroup(e.target.value);
            } else {
              removeTargetGroup(e.target.value);
            }
          }}
        />
        <label class="form-check-label" for="inlineCheckbox2">
          Pet
        </label>
      </div>
    </div>
  );
});

ExpiryDateForm.propTypes = {};

// --------------------------Quota------------------------
const QuotaForm = memo(function QuotaForm(props) {
  const { Quota, setQuota } = props;
  return (
    <div className="col-md-3 mb-3">
      <label for="validationServer01">Quota</label>
      <input
        type="text"
        className="form-control is-valid"
        id="validationServer01"
        value={Quota}
        onChange={(e) => setQuota(e.target.value)}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

// --------------------------BaseForm------------------------
const BaseForm = memo(function BaseForm(props) {
  const { Base, setBase } = props;
  return (
    <div className="col-md-3 mb-3">
      <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
        Base
      </label>
      <input
        type="text"
        className="form-control is-valid"
        id="validationServer01"
        value={Base}
        onChange={(e) => setBase(e.target.value)}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

// --------------------------QuantityForm------------------------
const QuantityForm = memo(function QuantityForm(props) {
  const { Quantity, setQuantity } = props;
  return (
    <div className="col-md-3 mb-3">
      <label for="validationServer01">Quantity</label>
      <input
        type="text"
        className="form-control is-valid"
        id="validationServer01"
        value={Quantity}
        onChange={(e) => setQuantity(e.target.value)}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

// --------------------------WeightForm------------------------
const WeightForm = memo(function WeightForm(props) {
  const { Weight, setWeight } = props;
  return (
    <div className="col-md-3 mb-3">
      <label for="validationServer01">Weight</label>
      <input
        type="text"
        className="form-control is-valid"
        id="validationServer01"
        value={Weight}
        onChange={(e) => setWeight(e.target.value)}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

// --------------------------LimitationOfQuantity------------------------
const LimitationOfQuantityForm = memo(function LimitationOfQuantityForm(props) {
  const { LimitationOfQuantity, setLimitationOfQuantity } = props;
  return (
    <div className="col-md-4 mb-3">
      <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
        Limitation of Quantity
      </label>
      <input
        type="text"
        className="form-control is-valid"
        id="validationServer01"
        value={LimitationOfQuantity}
        onChange={(e) => {
          setLimitationOfQuantity(e.target.value);
        }}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

// --------------------------LimitationOfProvince------------------------
const LimitationOfProvinceForm = memo(function LimitationOfProvinceForm(props) {
  const { LimitationOfProvince, setLimitationOfProvince } = props;
  return (
    <div className="col-md-4 mb-3">
      <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
        Limitation of Province
      </label>
      <input
        type="text"
        className="form-control is-valid"
        id="validationServer01"
        value={LimitationOfProvince}
        onChange={(e) => {
          setLimitationOfProvince(e.target.value);
        }}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

// --------------------------LimitationOfCity------------------------
const LimitationOfCityForm = memo(function LimitationOfCityForm(props) {
  const { LimitationOfCity, setLimitationOfCity } = props;
  return (
    <div className="col-md-4 mb-3">
      <label className="my-1 mr-2" for="inlineFormCustomSelectPref">
        Limitation of City
      </label>
      <input
        type="text"
        className="form-control is-valid"
        id="validationServer01"
        value={LimitationOfCity}
        onChange={(e) => {
          setLimitationOfCity(e.target.value);
        }}
        required
      />
      <div className="valid-feedback">Looks good!</div>
    </div>
  );
});

// --------------------------Description------------------------
const DescriptionForm = memo(function DescriptionForm(props) {
  const { Description, setDescription } = props;
  return (
    <div class="input-group col-md-9">
      <div class="input-group-prepend">
        <span class="input-group-text">Description</span>
      </div>
      <textarea
        class="form-control"
        aria-label="With textarea"
        value={Description}
        onChange={(e) => {
          return setDescription(e.target.value);
        }}
      ></textarea>
    </div>
  );
});
// ----------------------Default Export-----------------------------
const Form = memo(function Form(props) {
  const {
    setName,
    Name,
    setLogo,
    Logo,
    setCategory,
    Category,
    ProductLine,
    setProductLine,
    Company,
    setCompany,
    ExpirationRule,
    setExpirationRule,
    Expiration,
    setExpiration,
    ExpiryDate,
    setExpiryDate,
    Amount,
    setAmount,
    Base,
    setBase,
    Weight,
    setWeight,
    LimitationOfQuantity,
    LimitationOfProvince,
    LimitationOfCity,
    TypeOfProducts,
    TargetGroup,
    addTargetGroup,
    setLimitationOfQuantity,
    setLimitationOfProvince,
    setLimitationOfCity,
    setTypeOfProducts,
    removeTargetGroup,
    GoodsType,
    setGoodsType,
    Quantity,
    setQuantity,
    Description,
    setDescription,
  } = props;

  return (
    <div>
      <form>
        <div className="form-row">
          <NameForm Name={Name} setName={setName} />
          <TemplateLogoForm Logo={Logo} setLogo={setLogo} />
          <CouponCategoryForm Category={Category} setCategory={setCategory} />
          <ProductLineForm
            ProductLine={ProductLine}
            setProductLine={setProductLine}
          />
        </div>
        {/* -----------------1st Row------------------------- */}

        <div className="form-row">
          <CompanyNameForm Company={Company} setCompany={setCompany} />
          <ExpirationRuleForm
            ExpirationRule={ExpirationRule}
            setExpirationRule={setExpirationRule}
          />

          <TargetGroupsForm
            TargetGroup={TargetGroup}
            addTargetGroup={addTargetGroup}
            removeTargetGroup={removeTargetGroup}
          />
          <ExpirationForm
            Expiration={Expiration}
            setExpiration={setExpiration}
          />

          <ExpiryDateForm
            ExpiryDate={ExpiryDate}
            setExpiryDate={setExpiryDate}
          />
        </div>
        {/* -----------------2st Row------------------------- */}

        <div className="form-row">
          <QuotaForm Quota={Amount} setQuota={setAmount} />
          <BaseForm Base={Base} setBase={setBase} />
          <GoodsTypeForm setGoodsType={setGoodsType} />
          <QuantityForm Quantity={Quantity} setQuantity={setQuantity} />
        </div>

        {/* -----------------3st Row------------------------- */}

        <div className="form-row">
          <LimitationOfQuantityForm
            LimitationOfQuantity={LimitationOfQuantity}
            setLimitationOfQuantity={setLimitationOfQuantity}
          />
          <LimitationOfProvinceForm
            LimitationOfProvince={LimitationOfProvince}
            setLimitationOfProvince={setLimitationOfProvince}
          />
          <LimitationOfCityForm
            LimitationOfCity={LimitationOfCity}
            setLimitationOfCity={setLimitationOfCity}
          />
        </div>
        {/* ------------------4th Row------------------------ */}

        <div className="form-row">
          <WeightForm Weight={Weight} setWeight={setWeight} />
          <DescriptionForm
            Description={Description}
            setDescription={setDescription}
          />
        </div>
        <Button
          name={Name}
          logo={Logo}
          desc={Description}
          category={Category}
          productLine={ProductLine}
          count={Quantity}
          userId={Company}
          target={TargetGroup}
          expiration={ExpirationRule}
          gap={Expiration}
          deadline={ExpiryDate}
          quota={Amount}
          base={Base}
          limitation={LimitationOfQuantity}
          limitationofProvince={LimitationOfProvince}
          limitationOfCity={LimitationOfCity}
          goodsType={GoodsType}
          weight={Weight}
        />
      </form>
    </div>
  );
});

export default Form;
