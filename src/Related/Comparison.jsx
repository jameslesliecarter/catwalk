import React from 'react';
import _ from 'underscore';
import {GiCheckMark} from 'react-icons/gi';

const Comparison = ({currentProduct, comparedProduct}) => {
  let currentFeatures = currentProduct.features;
  let comparedFeatures = comparedProduct.features;

  let allUniqFeatures = _.uniq(currentFeatures.concat(comparedFeatures), _.property('value')).map(feature => {
    feature.compared = comparedFeatures.some(item => item.value === feature.value && item.feature === feature.feature);
    feature.current = currentFeatures.some(item => item.value === feature.value && item.feature === feature.feature);
    return feature;
  });

  return (
   <table>
     <tr>
       <th>{currentProduct.name}</th>
       <th/>
       <th>{comparedProduct.name}</th>
     </tr>
     {allUniqFeatures.map(feature => {
       return (
         <tr>
           <th>{feature.current ? <GiCheckMark /> : <></>}</th>
           <th>{feature.feature + ': ' + feature.value}</th>
           <th>{feature.compared ? <GiCheckMark /> : <></>}</th>
         </tr>
       )
     })}
   </table>
  )
}

export default Comparison;