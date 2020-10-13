import "./App.css";
import Info from "./Info.jsx";

import Navbar from "../Common/Navbar";
import URI from "urijs";

import React, { useEffect, useState } from "react";
import Header from "./Header";

function App() {
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

  const url = new URI(
    "http://127.0.0.1:7001/coupon-template/template/sdk/infos"
  );
  url.addQuery("ids", 10);

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((response) => response.json())
      .then((result) => {
        const {
          code: codeVal,
          message: msgVal,
          data: {
            10: {
              id: idVal,
              name: nameVal,
              logo: logoVal,
              desc: descVal,
              category: categoryVal,
              productLine: productLineVal,
              key: keyVal,
              target: targetVal,
              rule: {
                expiration: {
                  period: periodVal,
                  gap: gapVal,
                  deadline: deadlineVal,
                },
                discount: { quota: quotaVal, base: baseVal },
                limitation: limitationVal,
                usage: {
                  province: provinceVal,
                  city: cityVal,
                  goodsType: goodsTypeVal,
                },
                weight: weightVal,
              },
            },
          },
        } = result;

        setCode(codeVal);
        setMessage(msgVal);
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
      });
  }, []);

  return (
    <div className="container">
      <Navbar />
      <Header />
      <Info
        code={code}
        message={message}
        Id={id}
        name={name}
        logo={logo}
        desc={desc}
        category={category}
        productline={productLine}
        key={key}
        target={target}
        period={period}
        gap={gap}
        deadline={deadline}
        quota={quota}
        base={base}
        limitation={limitation}
        province={province}
        city={city}
        goodstype={goodType}
        weight={weight}
      />
    </div>
  );
}

export default App;
