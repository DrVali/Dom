function firstP() {
  let firstP = document.getElementById("firstp");

  firstP.innerHTML = "First paragraph has been updated!";
}
function chacgeAllText() {
  const pCount = document.querySelectorAll("p");

  for (let i = 0; i < pCount.length + 1; ) {
    pCount[i].innerHTML = `Paragraph ${++i}`;
  }
}

function bgColorChange() {
  const pCounts = document.querySelectorAll("p");

  for (let i = 0; i < pCounts.length; i++) {
    pCounts[i].style.backgroundColor = "#64e7f6";
  }
}
