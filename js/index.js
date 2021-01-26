function changeAtiveTab(event, tabID) {
      let element = event.target;
      while (element.nodeName !== "A") {
        element = element.parentNode;
      }
      ulElement = element.parentNode.parentNode;
      aElements = ulElement.querySelectorAll("li > a");
      tabContents = document.getElementById("tabs-id").querySelectorAll(".tab-content > div");
      for (let i = 0; i < aElements.length; i++) {
        aElements[i].classList.remove("text-white");
        aElements[i].classList.remove("bg-blue-600");
        aElements[i].classList.add("text-white");
        aElements[i].classList.add("bg-transparent");
        tabContents[i].classList.add("hidden");
        tabContents[i].classList.remove("block");
      }
      // element.classList.remove("text-white");
      element.classList.remove("bg-blue-600");
      // element.classList.add("text-white");
      element.classList.add("bg-blue-600");
      document.getElementById(tabID).classList.remove("hidden");
      document.getElementById(tabID).classList.add("block");
}
const search = document.getElementById('searchbar');
const exit = document.getElementById('exitbar');

function searchBarClick() {
  exit.style.display = 'flex';
  search.style.display = 'none'
}
function exitClick() {
  exit.style.display = 'none';
  search.style.display = 'flex'
}