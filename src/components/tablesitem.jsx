export const Tableitem = ({
  username,
  age,
  address,
  department,
  salary,
  isMarried,
  Pic
}) => {
  isMarried = isMarried === true ? "Yes" : "No";
  return (
    <>
      <tr>
        <td>{username}</td>
        <td>{age}</td>
        <td>{address}</td>
        <td>{department}</td>
        <td>{salary}</td>
        <td>{isMarried}</td>
        <td>{Pic}</td>
      </tr>
    </>
  );
};
