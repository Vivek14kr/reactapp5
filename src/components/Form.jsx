import { useState } from "react";

export const Form = ({ getData }) => {
  // const personprof = useRef(null)
  // const [list, setlist] = useState([]);

  const [formData, setForm] = useState({
    username: "",
    age: "",
    address: "",
    department: "",
    salary: "",
    isMarried: "",
    Pic: ""
  });
  const { username, age, address, department, salary, isMarried } = formData;
  const handleChange = (e) => {
    let { name, value, checked, type } = e.target;
    value = type === "checkbox" ? checked : value;
    setForm({
      ...formData,
      [name]: value
    });
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(formData, "aaj ko");
    getData(formData);
  };

  return (
    <form onSubmit={handlesubmit}>
      <input
        onChange={handleChange}
        name="username"
        type="text"
        placeholder="Name"
        value={username}
      />
      <br />
      <input
        onChange={handleChange}
        name="age"
        type="number"
        placeholder="Age"
        value={age}
      />
      <br />
      <input
        onChange={handleChange}
        name="address"
        type="text"
        placeholder="Address"
        value={address}
      />
      <br />
      <select
        onChange={handleChange}
        name="department"
        id="cars"
        value={department}
      >
        <option>Select Department</option>
        <option value="marketing">Marketing</option>
        <option value="Finance">Finance</option>
        <option value="Tech">Tech</option>
        <option value="Sales">Sales</option>
      </select>
      <br />
      <input
        onChange={handleChange}
        name="salary"
        type="number"
        placeholder="Salary"
        value={salary}
      />
      <br />
      <label>
        Married
        <input
          onChange={handleChange}
          type="checkbox"
          id="vehicle1"
          name="isMarried"
          checked={isMarried}
        />
      </label>
      <br />
      <input onChange={handleChange} name="Pic" type="file" />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
};
