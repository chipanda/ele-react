/**
 * Created by chipanda on 2016/12/22.
 */
export function setLocalValue(id,key,val) {
  var seller = window.localStorage.__seller__;
  if(!seller){
    seller = {};
  }else{
    seller = JSON.parse(seller);
  }
  if(!seller[id]){
    seller[id] = {};
  }
  seller[id][key] = val;
  window.localStorage.__seller__ = JSON.stringify(seller);
}
export function getLocalValue(id,key,def){
  var seller = window.localStorage.__seller__;
  if(!seller){
    return def;
  }else{
    seller = JSON.parse(seller);
  }
  if(!seller[id]){
    return def;
  }
  var val = seller[id][key];
  return val || def;
}
