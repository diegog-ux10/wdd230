 // Check if localStorage is supported
 if (typeof(Storage) !== "undefined") {
    // Get the current page visits count from localStorage
    let pageVisitsCount = localStorage.getItem("pageVisitsCount");

    // Check if the count exists in localStorage
    if (pageVisitsCount) {
        pageVisitsCount = parseInt(pageVisitsCount) + 1; // Increment the count
    } else {
        pageVisitsCount = 1; // Set the count to 1 if it doesn't exist
    }

    // Update the page visits count in localStorage
    localStorage.setItem("pageVisitsCount", pageVisitsCount);

    // Display the updated count on the page
    document.getElementById("pageVisits").textContent = "Page Visits: " + pageVisitsCount;
} else {
    // If localStorage is not supported, display a message
    document.getElementById("pageVisits").textContent = "Page Visits: N/A (localStorage not supported)";
}