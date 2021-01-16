var ar=JSON.parse(localStorage.getItem('task')) || [];
var inbox=document.querySelector(".inbox");
function add(){
    var input=document.getElementById('val').value;
    ar.push(input);
    var html=
    `
    <div class="item">
        <input type="checkbox">
        <p>${input}</p>
    </div>
    `
    var addlist=document.querySelector(".inbox");
    addlist.innerHTML+= html;
    localStorage.setItem('task',JSON.stringify(ar));
    document.getElementById('val').value="";
}
function remove(){
    localStorage.clear();
    ar=[""];
    inbox.innerHTML="";
}

var button=document.getElementById("buttonclick");
var button2=document.getElementById("buttonremove");

button.addEventListener("click",add);
button2.addEventListener("click",remove);

