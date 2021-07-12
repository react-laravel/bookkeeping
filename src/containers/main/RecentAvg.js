import React from "react";

import axios from "../../instances/axios";

const RecentAvg = () => {
  const [info, setInfo] = React.useState([]);

  React.useEffect(() => {
    axios.get("/info").then(({ data }) => {
      setInfo(data);
    });
  }, []);

  return (
    <div>
      <h2>近期月平均</h2>
      {info.length !== 0 &&
        info.lastThreeMonthMoney.map((item) => (
          <div key={item.id}>
            {item.month}{" "}
            {item.id === -1
              ? `${item.money} + ${info.nextMonthRenewalMoney}（续费）= ${
                  parseInt(item.money) + parseInt(info.nextMonthRenewalMoney)
                }`
              : item.money}
          </div>
        ))}
    </div>
  );
};

export default RecentAvg;
