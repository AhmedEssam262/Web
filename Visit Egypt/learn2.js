/*learn JavaScript with me*/

<script>
  let arr=["Ahmed","Mostafa", "Amr", "Rana" ,"Nada"]; let temp = `
  <p>This is my list</p>{" "}
  <ul>
    `; for(x in arr) temp+=`<li>Hello ${arr[x]}</li>`; temp+=`
  </ul>
  `; document.getElementById("dd").innerHTML=temp;
</script>;
function sum(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i];
  }
  return result;
}
let a = sum(1, 2, 3, 5);
document.getElementById("dd").innerHTML = a;

/*
    let txt="<ul>";
let arr = ["2","5","8","1","3"];

document.getElementById("dd").innerHTML=arr.filter(myFun);;
txt+="</ul>";
function myFun(value){
    return value>1;
    txt+="<li>"+value+"</li>";
}
*/
