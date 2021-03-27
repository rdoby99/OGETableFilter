const selectorContainer = document.querySelector("#selectors");
const trs = document.querySelectorAll("tr");
const selectors = document.querySelectorAll("select")

// Filters rows based on table filters
selectorContainer.addEventListener('change', (e)=> {
    e.preventDefault;
    const region = document.querySelector("#regionSelect").value;
    const need = document.querySelector("#needSelect").value;
    const funding = document.querySelector("#sourceSelect").value;
    const level = document.querySelector("#levelSelect").value;
    const college = document.querySelector("#collegeSelect").value;


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

      if (row.dataset[4]!==college && college!=="any" && row.dataset[4]!=="anycol") {
        row.style.display = "none";
      }
    }
    }

});

// Reset Button
document.querySelector('#resetButton').addEventListener('click', () => {
  for (let row of trs) {
    if (row===trs[0]) {

    } else {
    row.removeAttribute("style");
    }
  }

  const val = "any";
  for (let select of selectors) {
    const opts = select.options;
    for (j = 0; opt = opts[j]; j++) {
      if (opt.value == val) {
        select.selectedIndex = j;
        break;
      }
  }
  }
})

// Creates data attributes for rows based on tag column
function dynamicTags() {
  
for (let row of trs) {  
  const rowTags = row.lastElementChild.textContent;
  const rowTagsArr = rowTags.toLowerCase().replace(/\s/g, "").split(",");
    
  for(i=0; i < rowTagsArr.length; i++) {
    row.setAttribute("data-" + i, rowTagsArr[i]);
  };
  }
}

dynamicTags()

