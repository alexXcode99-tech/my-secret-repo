const tasks = [
    { id: 101, name: "Fix CSS overflow bug", priority: "High" },
    { id: 102, name: "Implement OAuth2 Flow", priority: "Critical" },
    { id: 103, name: "Update documentation", priority: "Low" }
];

const taskContainer = document.getElementById("tasks");

function loadTasks() {
    taskContainer.innerHTML = tasks.map(t => `
        <li class="task-item">
            <strong>[${t.priority}]</strong> ${t.name}
        </li>
    `).join("");
}

window.onload = () => {
    console.log("Dashboard Loaded. System v1.0.5 Ready.");
    loadTasks();
};
