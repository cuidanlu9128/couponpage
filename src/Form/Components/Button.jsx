import React, { useState, useMemo } from "react";
import "./Button.css";

export default function Button(props) {
  const {
    name,
    logo,
    desc,
    category,
    productLine,
    count,
    userId,
    target,
    expiration,
    gap,
    deadline,
    quota,
    base,
    limitation,
    limitationofProvince,
    limitationOfCity,
    goodsType,
    weight,
  } = props;

  const [newDeadline, setDeadline] = useState("");

  useMemo(() => {
    var newdeadline = "";
    for (var i = 0; i < deadline.length; i++) {
      if (!isNaN(deadline.charAt(i))) {
        newdeadline = newdeadline + deadline.charAt(i);
      }
    }
    setDeadline(newdeadline);
  }, [deadline]);

  var res = {
    name: name,
    logo: logo,
    desc: desc,
    category: category,
    productLine: productLine,
    count: count,
    userId: userId,
    target: target === null ? null : target[0],
    rule: {
      expiration: {
        period: expiration,
        gap: gap,
        deadline: newDeadline,
      },
      discount: {
        quota: quota,
        base: base,
      },
      limitation: limitation,
      usage: {
        province: limitationofProvince,
        city: limitationOfCity,
        goodsType: goodsType === null ? null : goodsType[0],
      },
      weight: weight,
    },
  };

  var url = "http://127.0.0.1:7001/coupon-template/template/build";

  return (
    <button
      type="button"
      className="btn btn-primary btn-lg btn-block"
      onClick={() => {
        return fetch(url, {
          method: "POST",
          body: JSON.stringify(res),
          headers: new Headers({
            "Content-Type": "application/json",
          }),
        })
          .then((res) => res.json())
          .catch((error) => console.error("Error:", error))
          .then((response) => console.log("Success:", response));
      }}
    >
      Submit!
    </button>
  );
}
