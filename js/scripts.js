const heading = "please meat our team";
let i = 0;
//  function typeing()
const typeing = () => {
  if (i < heading.length) {
    document.querySelector(".heading").innerHTML += heading.charAt(i);
    i++;
    setTimeout(typeing, 150);
  }
};
typeing();
