import React from 'react';

const Amount = ({ remove, insert, add, product }) => (
  <div>
    <button onClick={() => remove({ ...product })}>-</button>
    <input onChange={(event) => insert(event, { ...product })} type="text" value={product.amount} />
    <button onClick={() => add({ ...product })}>+</button>
  </div>
);

export default Amount;
