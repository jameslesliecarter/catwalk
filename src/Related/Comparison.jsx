import React from 'react';

const Comparison = ({currentProduct, comparedProduct}) => {
  console.log('current product ', currentProduct);
  console.log('compared product ', comparedProduct);
  return (
   <table>
     <tr>
       <th>{currentProduct.name}</th>
       <th/>
       <th>{comparedProduct.name}</th>
     </tr>
   </table>
  )
}

export default Comparison;