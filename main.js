var memberName = ["Onkar Khandwal", "Sweta Khandwal", "Kaustubh Khandwal", "Advay Khandwal"]
var memberPhoto = ["father.jpeg", "mother.jpeg", "Me.jpeg", "Brother.jpeg"]
//function nextFamilyMember() {
//for (x = 0; x == 3; x++) {
// document.getElementById("familyImage").src = memberPhoto[x];
//document.getElementById("member_name").innerHTML = memberName[x];
// console.log(x)}

//}
var x = -1;
function nextFamilyMember() {
   x++;
  document.getElementById('member_name').innerHTML = memberName[x];
  document.getElementById("familyImage").src = memberPhoto[x];
  
if (x == 3) {
  x = -1
}
}