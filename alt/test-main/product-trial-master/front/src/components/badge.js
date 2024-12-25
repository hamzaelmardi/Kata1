import React from 'react';

const Badge = ({ count }) => {
  return (
    <span style={{ position: 'relative', background: 'red', color: 'white', borderRadius: '50%', padding: '5px', marginLeft: '10px' }}>
  {count}
</span>
);
};

export default Badge;
