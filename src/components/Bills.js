import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

const BillsList = (props) => {
  return (
    <TableContainer component={Paper}>
      <Table style={{ minWidth: 500 }}>
        <TableHead>
          <TableRow>
            <TableCell>名称</TableCell>
            <TableCell>总金额</TableCell>
            <TableCell>月平均</TableCell>
            <TableCell>开始年月</TableCell>
            <TableCell>结束年月</TableCell>
            <TableCell>备注</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.bills.map((bill) => (
            <TableRow key={bill.id}>
              <TableCell>{bill.name}</TableCell>
              <TableCell>{bill.money}</TableCell>
              <TableCell>{bill.avg}</TableCell>
              <TableCell>{bill.start_date}</TableCell>
              <TableCell>{bill.end_date}</TableCell>
              <TableCell>{bill.note}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BillsList;
