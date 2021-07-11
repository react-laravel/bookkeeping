import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

import axios from "../../instances/axios";

export default function List() {
  const [bills, setBills] = React.useState([]);

  React.useEffect(() => {
    axios.get("/bills").then(({ data }) => {
      setBills(data);
    });
  }, []);

  return (
    <div>
      <h2>近期账单</h2>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>序号</TableCell>
              <TableCell align="right">名称</TableCell>
              <TableCell align="right">金额</TableCell>
              <TableCell align="right">开始年月</TableCell>
              <TableCell align="right">结束年月</TableCell>
              <TableCell align="right">备注</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {bills.map((row) => (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.money}</TableCell>
                <TableCell align="right">{row.startDate}</TableCell>
                <TableCell align="right">{row.endDate}</TableCell>
                <TableCell align="right">{row.note}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
