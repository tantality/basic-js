import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function countCats(arrCats) {
  let arr=[true,false,NaN,undefined,null];
  return arrCats.flat(1).reduce(function(res,val){
      if(arr.every(x=>x!==val))val=='^^'? ++res : res;
      return res;
    },0);
}
