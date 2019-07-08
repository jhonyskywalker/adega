import React from 'react';

import Select from '../../Atoms/Select';

const Categories = ({ categories }) => {
  if (categories.length > 0) {
    return (
      <Select size="small" color="primary">
        {categories.map(item => (
          <option
            key={item.id}
            value={item.id}
          >
            {item.title}
          </option>
        ))}
      </Select>
    );
  }

  return null;
};

export default Categories;
