/**
 * Created by chipanda on 2016/12/22.
 */
export function urlParse() {
  let searchUrl = window.location.search;
  let obj = {};
  let reg = /[?&][^?&]+=[^?&]+/g;
  let arr = searchUrl.match(reg);
  if(arr){
    arr.forEach((item)=>{
      let tempArr = item.substring(1).split('=');
      let key = decodeURIComponent(tempArr[0]);
      let val = decodeURIComponent(tempArr[1]);
      obj[key] = val;
    })
  }
  return obj;
}
