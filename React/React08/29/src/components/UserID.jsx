import React from 'react';

const UserID = ({ id, setId }) => {
  const handleChange = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <label>ID: </label>
      <input type="text" value={id} onChange={handleChange} />
    </div>
  );
};

export default UserID;
