var divs=document.getElementsByClassName('list')
var lis=document.getElementsByClassName('li-link')
console.log(divs)
console.log(lis)
window.onscroll=function(){
    for(var i=0 ; i<divs.length ; i++){
        if(scrollY > divs[i].offsetTop && scrollY < divs[i].offsetTop +divs[i].offsetHeight){
            lis[i].classList.add('activelink')
        }
        else{
            lis[i].classList.remove('activelink')
        }
    }
}

var mybutton=document.getElementById('top')
window.onscroll = function() {
    if (document.body.scrollTop > 20 ||  document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }

}
mybutton.onclick=function(){
    document.documentElement.scrollTop = 0;
}
