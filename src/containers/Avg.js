import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";

import axios from "../instances/axios";

const Statistics = () => {
  const [avg, setAvg] = React.useState([]);

  React.useEffect(() => {
    axios.get("/avg").then(({ data }) => {
      setAvg(data);
    });
  }, []);

  return (
    <div>
      <h2>月平均</h2>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>年月</TableCell>
              <TableCell>金额</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {avg.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.month}</TableCell>
                <TableCell>{row.money}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Statistics;
