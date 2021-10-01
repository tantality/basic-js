import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(Array.isArray(members)) members=members.filter(x=>typeof(x)=='string');
  else return false;
  if(!members.length) return false;
  return members.reduce((a,b)=>{
  return a+=b.trim().slice(0,1).toUpperCase();
  },'').split('').sort().join('');
}
