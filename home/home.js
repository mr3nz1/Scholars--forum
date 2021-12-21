let newPostForm = document.querySelector(".new-topic");
let newPostToggleBtn = document.querySelector(".start-new-topic");
let isOpen = false;

// Toggling the NEW POST form

newPostToggleBtn.addEventListener("click", () => {
  if (!isOpen) {
    newPostForm.style.display = "grid";
		isOpen = !isOpen;
  } else {
		newPostForm.style.display = "none";
		isOpen = !isOpen;
	}
})

// Pagination

let paginationContainer = document.querySelector(".pagination");

for (let i = 0; i < 15; i++) {
	let page = document.createElement("a");
	page.innerHTML = i;
	page.setAttribute("href", "'#")
	paginationContainer.appendChild(page);
}