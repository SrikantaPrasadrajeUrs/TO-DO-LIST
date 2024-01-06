var addlist=document.getElementById("addList");
var parent=document.getElementById('parent');
var ele=document.getElementById('inp');
addlist.addEventListener('click',()=>{
if(ele.value==""){
    alert("Please enter task")
    return;
}
var newlist=document.createElement('li');
// newlist.style.width="450px";
// newlist.style.display="flex";
newlist.style.justifyContent="space-around";
var deleteList= document.createElement('button');
// deleteList.appendChild(document.createTextNode("delete task"));
deleteList.id="delete-me";
var delimg=document.createElement('img')
delimg.src="deleteicon.png";
let task=""+ele.value;

deleteList.appendChild(delimg)
var text=document.createTextNode(task.toUpperCase());
newlist.appendChild(text);
newlist.appendChild(deleteList)
parent.appendChild(newlist);
deleteList.addEventListener('click',()=>{
    parent.removeChild(newlist);
})
ele.value="";})

