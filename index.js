
const input = document.querySelector("#task");
const btn = document.querySelector(".btn");
const list = document.querySelector(".list");

const addtask = (e) => {
 e.preventDefault();
 let liEl = document.createElement("li");
 let delEl = document.createElement("button");
 
 delEl.innerHTML = '<i class="fa-solid fa-trash"></i>';

 if(input.value !== ""){
  liEl.textContent = input.value;
  liEl.appendChild(delEl);
  list.appendChild(liEl);
 } else {
   alert('skrive noe')
 }

 input.value = "";

 delEl.addEventListener('click', function(){
   const delet = confirm("vil du slette list")
   if(delet == true){
    const parent = this.parentNode;
    parent.remove();
   }
 })

}

btn.addEventListener('click', addtask);


