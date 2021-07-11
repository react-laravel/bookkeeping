import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

import axios from "../../instances/axios";

export default function Bills() {
  const [bills, setBills] = React.useState([]);

  React.useEffect(() => {
    axios.get("/bills").then(({ data }) => {
      setBills(data);
    });
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>名称</TableCell>
            <TableCell>金额</TableCell>
            <TableCell>开始年月</TableCell>
            <TableCell>结束年月</TableCell>
            <TableCell>备注</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {bills.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.money}</TableCell>
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.endDate}</TableCell>
              <TableCell>{row.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
