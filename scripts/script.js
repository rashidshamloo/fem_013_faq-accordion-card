//assigns onclick event to all FAQ items
function assignEvent() {
  for (element of document.getElementsByClassName("faq-item"))
    element.onclick = selectFaq;
}

//when a FAQ item is clicked, sets its state to active and deactivates the rest
function selectFaq() {
  //get the clicked element
  element = window.event.target;
  //if the event target is any of the children, get the FAQ item instead
  if (!element.className.includes("faq-item")) {
    element = element.closest(".faq-item");
  }
  //if the clicked FAQ item is already active, deactivate it and return
  if (element.children[0].children[0].style.fontWeight == "bold") {
    closeFaq(element);
    return;
  }
  //deactivate the rest of FAQ items
  for (faqItem of document.getElementsByClassName("faq-item"))
    if (faqItem != element) {
      closeFaq(faqItem);
    }
  //activate the clicked FAQ item
  openFaq(element);
}

//activates a FAQ item
function openFaq(ele) {
  //add bold to FAQ title
  ele.children[0].children[0].style.fontWeight = "bold";
  //change arrow to up-arrow
  ele.children[0].children[1].classList.add("up-arrow");
  //set activated styles
  ele.children[1].style.visibility = "visible";
  ele.children[1].style.height = "auto";
  ele.children[1].style.marginTop = "0.7rem";
}

//deactivates a FAQ item
function closeFaq(ele) {
  //remove bold from FAQ title
  ele.children[0].children[0].style.fontWeight = "";
  //change up-arrow to normal
  ele.children[0].children[1].classList.remove("up-arrow");
  //set initial (deactivated) styles
  ele.children[1].style.visibility = "";
  ele.children[1].style.height = "";
  ele.children[1].style.marginTop = "";
}
