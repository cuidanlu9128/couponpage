import "./TableBody.css";
import React, { memo, useMemo, useState, useEffect } from "react";
import PropTypes from "prop-types";

const ListItem = memo(function ListItem(props) {
  console.log(props);
  const {
    id: idVal,
    name: nameVal,
    logo: logoVal,
    desc: descVal,
    category: categoryVal,
    productLine: productLineVal,
    key: keyVal,
    target: targetVal,
    rule: {
      expiration: { period: periodVal, gap: gapVal, deadline: deadlineVal },
      discount: { quota: quotaVal, base: baseVal },
      limitation: limitationVal,
      usage: { province: provinceVal, city: cityVal, goodsType: goodsTypeVal },
      weight: weightVal,
    },
  } = props;

  const [code, setCode] = useState(-1);
  const [message, setMessage] = useState("");
  const [id, setId] = useState(-1);
  const [name, setName] = useState("");
  const [logo, setLogo] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [productLine, setProductLine] = useState("");
  const [key, setKey] = useState("");
  const [target, setTarget] = useState("");
  const [period, setPeriod] = useState("");
  const [gap, setGap] = useState("");
  const [deadline, setDeadline] = useState("");
  const [quota, setQuota] = useState("");
  const [base, setBase] = useState("");
  const [limitation, setLimitation] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [goodType, setGoodsType] = useState("");
  const [weight, setWeight] = useState("");

  // const {
  //   id: idVal,
  //   name: nameVal,
  //   logo: logoVal,
  //   desc: descVal,
  //   category: categoryVal,
  //   productLine: productLineVal,
  //   key: keyVal,
  //   target: targetVal,
  //   rule: {
  //     expiration: { period: periodVal, gap: gapVal, deadline: deadlineVal },
  //     discount: { quota: quotaVal, base: baseVal },
  //     limitation: limitationVal,
  //     usage: { province: provinceVal, city: cityVal, goodsType: goodsTypeVal },
  //     weight: weightVal,
  //   },
  // } = component;

  setId(idVal);
  setName(nameVal);
  setLogo(logoVal);
  setDesc(descVal);
  setCategory(categoryVal);
  setProductLine(productLineVal);
  setKey(keyVal);
  setTarget(targetVal);
  setPeriod(periodVal);
  setGap(gapVal);
  setDeadline(deadlineVal);
  setQuota(quotaVal);
  setBase(baseVal);
  setLimitation(limitationVal);
  setProvince(productLineVal);
  setCity(cityVal);
  setGoodsType(goodsTypeVal);
  setWeight(weightVal);

  return (
    <tr>
      <th scope="row">{id}</th>
      <td>Available</td>
      <td>{name}</td>
      <td>{desc}</td>
      <td>{category}</td>
      <td>{productLine}</td>
      <td>20202020</td>
      <td>{deadline}</td>
      <td>{code}</td>
      <td>{target}</td>
    </tr>
  );
});

const TableBody = memo(function List(props) {
  const [list, setList] = useState([]);
  const url = "http://127.0.0.1:7001/coupon-template/template/sdk/all";

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((json) => setList(json));
  }, []);

  var items = list["data"];
  if (items === undefined) {
    items = [];
  }

  console.log(items);
  return (
    <div>
      <tbody>
        {items.map((item) => {
          return <ListItem {...item} />;
        })}
      </tbody>
    </div>
  );
});

export default TableBody;
