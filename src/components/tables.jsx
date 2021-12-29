import "./table.css";
import { Tableitem } from "./tablesitem";
import { Form } from "./Form.jsx";
import { useState } from "react";

export const Table = () => {
  const [list, setList] = useState([]);
  const handleClick = (data) => {
    console.log(data, "ksjfk");
    setList([...list, data]);
  };
  return (
    <>
      <table>
        <th>Name</th>
        <th>Age</th>
        <th>Address</th>
        <th>Department</th>
        <th>Salary</th>
        <th>Marital Status</th>
        <th>Profile Photo</th>
        {list.map((e) => (
          <Tableitem {...e} />
        ))}
      </table>
      <div id="formnew">
        <Form getData={handleClick} />
      </div>
      <br />
    </>
  );
};
