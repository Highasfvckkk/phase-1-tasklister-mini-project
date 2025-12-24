document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  const tasks = document.getElementById("tasks");
  const input = document.getElementById("Task-description");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const li = document.createElement("li");
    li.textContent = input.value;

    tasks.appendChild(li);
    form.reset();
  });
});
