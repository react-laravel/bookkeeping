import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Switch from "@material-ui/core/Switch";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import { useSnackbar } from "notistack";
import React, { useCallback } from "react";
import { useImmer } from "use-immer";

import axios from "../../instances/axios";

const Form = () => {
  const [bill, setBill] = useImmer({
    name: "",
    money: undefined,
    start_date: undefined,
    end_date: undefined,
    note: "",
    is_renewal: 0,
  });

  const { enqueueSnackbar } = useSnackbar();

  const handleChange = useCallback(
    (e, name) => {
      setBill((draft) => {
        if (name === "is_renewal") {
          draft[name] = e.target.checked;
        } else {
          draft[name] = e.target.value;
        }
      });
    },
    [setBill]
  );

  const handleSubmit = (e) => {
    axios
      .post("/bills", bill)
      .then((resp) => {
        alert("添加成功");
      })
      .catch((error) => {
        if (error.status === 422) {
          for (const value in error.data.errors) {
            if (error.data.errors.hasOwnProperty(value)) {
              enqueueSnackbar(error.data.errors[value][0], {
                variant: "error",
              });
            }
          }
        }
      });
  };

  return (
    <Grid container spacing={1}>
      <Grid item xs={12}>
        <h2>新增账单</h2>
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
            <label htmlFor="start_date">开始年月</label>
          </Grid>
          <Grid item xs>
            <input
              type="month"
              name="start_date"
              value={bill.start_date}
              required
              onChange={(e) => handleChange(e, "start_date")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item style={{ width: 100 }}>
            <label htmlFor="end_date">结束年月</label>
          </Grid>
          <Grid item xs>
            <input
              type="month"
              name="end_date"
              value={bill.end_date}
              required
              onChange={(e) => handleChange(e, "end_date")}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={1}>
          <Grid item style={{ width: 100 }}>
            <label htmlFor="note">是否续费</label>
          </Grid>
          <Grid item xs>
            <FormControlLabel
              control={
                <Switch
                  checked={bill.is_renewal}
                  onChange={(e) => handleChange(e, "is_renewal")}
                  color="primary"
                />
              }
              label={
                <span style={{ fontSize: "0.5rem" }}>
                  没有明确结束时间，即按月续费的话，要勾选
                </span>
              }
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
