 



 function changeFirstP(){
	 let textBoxEl= document.getElementById("mytext").value;
	 let firstP= document.getElementById("firstp");
	 if(textBoxEl==="")
		 alert("زحمت بکش یک متنی داخل تکست باکس بنویس بعد مجدد تلاش کن    دمت گرم.");
	 else     
	  firstP.innerHTML = textBoxEl;
 }
 
 
 function changeAllContent(){
	 document.getElementById("firstp").innerHTML="Paragraph 1";
	  document.getElementById("secondp").innerHTML="Paragraph 2";
	   document.getElementById("thirdp").innerHTML="Paragraph 3";
 }
 
 function changeColorP(){
	 document.getElementById("firstp").style.backgroundColor = "#2196f3";
	  document.getElementById("secondp").style.backgroundColor = "#2196f3";
	   document.getElementById("thirdp").style.backgroundColor = "#2196f3";
	  
 }