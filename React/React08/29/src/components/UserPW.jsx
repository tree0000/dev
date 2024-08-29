import React from 'react';

const UserPW = ({ pw, setPw }) => {
  const handleChange = (e) => {
    setPw(e.target.value);
  };

  return (
    <div>
      <label>PW: </label>
      <input type="password" value={pw} onChange={handleChange} />
    </div>
  );
};

export default UserPW;
