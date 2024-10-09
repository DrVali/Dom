 



const textContents = document.querySelectorAll("#li-list");

textContents.forEach( item =>
item.addEventListener("click" ,() =>{
	const liEl=item.innerHTML;
	document.getElementById("content-display").innerHTML = liEl;
}
)
);

const textContentsss = document.querySelectorAll("#li-list");
textContentsss.forEach( items =>
items.addEventListener("mouseover" ,() =>{
	items.classList.toggle("li:hover");
})
);


let btn= document.getElementById("btn");
let parent=document.getElementById("ul_class");
btn.addEventListener("click", () =>{
	while(parent.hasChildNodes()){
		parent.removeChild(parent.firstChild);
	document.getElementById("content-display").innerHTML ="";}
	
}

);









