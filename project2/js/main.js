function changeFirstP(){
	 let textBoxEl= document.getElementById("mytext").value;
	 let firstP= document.getElementById("firstp");
	 if(textBoxEl===""){
	      firstP.innerHTML ="Please enter a value";
	      firstP.style.color = "#ff0000";
	 }
	 else{
		 firstP.innerHTML = textBoxEl;
                 firstP.style.color = "black";
	 }
	 
 }
