import Grid from "@material-ui/core/Grid";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import React, { useCallback } from "react";
import { useImmer } from "use-immer";

import axios from "../../instances/axios";

const Form = () => {
  const [bill, setBill] = useImmer({
    name: "",
    money: undefined,
    startDate: undefined,
    endDate: undefined,
    note: "",
  });

  const handleChange = useCallback(
    (e, name) => {
      setBill((draft) => {
        draft[name] = e.target.value;
      });
    },
    [setBill]
  );

  const handleSubmit = (e) => {
    axios.post("/bills", bill).then((resp) => {
      console.log(resp);
    });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h2>表单</h2>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item style={{ width: 100 }}>
            <label htmlFor="name">名称</label>
          </Grid>
          <Grid item xs>
            <input
              type="text"
              name="name"
              value={bill.name}
              required
              onChange={(e) => handleChange(e, "name")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item style={{ width: 100 }}>
            <label htmlFor="money">金额</label>
          </Grid>
          <Grid item xs>
            <input
              type="number"
              name="money"
              value={bill.money}
              required
              min="0"
              max="100000"
              onChange={(e) => handleChange(e, "money")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item style={{ width: 100 }}>
            <label htmlFor="startDate">开始年月</label>
          </Grid>
          <Grid item xs>
            <input
              type="month"
              name="startDate"
              value={bill.startDate}
              required
              onChange={(e) => handleChange(e, "startDate")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item style={{ width: 100 }}>
            <label htmlFor="endDate">开始年月</label>
          </Grid>
          <Grid item xs>
            <input
              type="month"
              name="endDate"
              value={bill.endDate}
              required
              onChange={(e) => handleChange(e, "endDate")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item style={{ width: 100 }}>
            <label htmlFor="note">备注</label>
          </Grid>
          <Grid item xs>
            <TextareaAutosize
              minRows={3}
              maxRows={20}
              value={bill.note}
              onChange={(e) => handleChange(e, "note")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <button onClick={handleSubmit}>提交</button>
      </Grid>
    </Grid>
  );
};

export default Form;
