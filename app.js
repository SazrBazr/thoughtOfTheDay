document.addEventListener("DOMContentLoaded", () => {
    const thoughtElement = document.getElementById("thought");

    // Fetch the daily thought from a URL or local file
    fetch("thought.json") // Replace with your own API endpoint if needed
        .then(response => response.json())
        .then(data => {
            thoughtElement.textContent = data.thought;
        })
        .catch(error => {
            console.error("Error fetching the thought:", error);
            thoughtElement.textContent = "Have a wonderful day!"; // Fallback message
        });
});

// Register the service worker
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
        .then(() => console.log("Service Worker registered"))
        .catch(error => console.log("Service Worker registration failed:", error));
}
