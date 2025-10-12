const input = document.getElementById("input");
const addBtn = document.getElementById("add");
const todoTask = document.getElementById("todotask");

addBtn.addEventListener("click", () => {
  const text = input.value.trim();
  if (text !== "") {
    const li = document.createElement("li");

    // ✅ Create checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("check");
    checkbox.addEventListener("change", () => {
      li.classList.toggle("completed", checkbox.checked);
    });

    // ✅ Create task text
    const span = document.createElement("span");
    span.textContent = text;

    // ✅ Create delete button
    const dltBtn = document.createElement("button");
    dltBtn.classList.add("delete-btn");
    dltBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    dltBtn.addEventListener("click", () => {
      li.remove();
    });

    // ✅ Append in correct order
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(dltBtn);
    todoTask.appendChild(li);

    input.value = "";
  }
});
