window.onload = function () {
  const input = document.getElementById("submit-field");
  const addBtn = document.getElementById("submit-button"); //getting ids for later
  const list = document.getElementById("task-list");

  addBtn.addEventListener("click", function () {
    const text = input.value;

    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = text;
//creating htmls
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", () => {
      list.removeChild(li);
    });

    editBtn.addEventListener("click", () => {
      if (editBtn.textContent === "Edit") {
        const editInput = document.createElement("input");
        editInput.value = span.textContent;
        li.insertBefore(editInput, span);//when clicked turns button into edit mode, edit button becomes save and when you hit save it changes the text within the area.
        li.removeChild(span);
        editBtn.textContent = "Save";
      } else {
        const newText = li.querySelector("input").value;
        span.textContent = newText;
        li.insertBefore(span, li.querySelector("input"));
        li.removeChild(li.querySelector("input"));
        editBtn.textContent = "Edit";
      }
    });

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);
    list.appendChild(li);

    input.value = ""; 
  });
};