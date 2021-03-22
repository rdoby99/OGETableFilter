const selectorContainer = document.querySelector("#selectors");
const trs = document.querySelectorAll("tr");
const selectors = document.querySelectorAll("select")

selectorContainer.addEventListener('change', (e)=> {
    e.preventDefault;
    const region = document.querySelector("#regionSelect").value;
    const need = document.querySelector("#needSelect").value;
    const funding = document.querySelector("#sourceSelect").value;
    const level = document.querySelector("#levelSelect").value;
    const amount = document.querySelector("#amountSelect").value;


    for (let row of trs) {
      if (row===trs[0]) {

      } else {
      row.removeAttribute("style");

      if (row.dataset[0]!==region && region!=="any" && row.dataset[0]!=="global") {
        row.style.display = "none";
      }

      if (row.dataset[1]!==need && need!=="any" && row.dataset[1]!=="both") {
        row.style.display = "none";
      }

      if (row.dataset[2]!==funding && funding!=="any") {
        row.style.display = "none";
      }

      if (row.dataset[3]!==level && level!=="any" && row.dataset[3]!=="both") {
        row.style.display = "none";
      }

      // Fix string amount
      if (row.dataset[4]>amount && amount!=="any" && row.dataset[4]!=="varies" && amount!=="1001") {
        row.style.display = "none";
      }
    }
    }
});

function dynamicTags() {
  
for (let row of trs) {  
  const rowTags = row.lastElementChild.textContent;
  const rowTagsArr = rowTags.split(",");
    
  for(i=0; i < rowTagsArr.length; i++) {
    row.setAttribute("data-" + i, rowTagsArr[i]);
  };
  }
}

dynamicTags();