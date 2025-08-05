function showPage(pageId) {
    // Hide all sections
    let sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.style.display = "none";
    });

    // Show the selected section
    let selectedSection = document.getElementById(pageId);
    if (selectedSection) {
        selectedSection.style.display = "block";
    }
}

// Show the home section by default when the page loads
window.onload = function () {
    showPage("home");
};
