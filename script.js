// Block new tabs
window.open = function() { alert("New tabs are blocked!"); return null; };

// Prevent popups
document.addEventListener("click", function(event) {
    if (event.target.tagName === "A" && event.target.target === "_blank") {
        event.preventDefault();
        alert("Popups are blocked!");
    }
});

// Load sites into fullscreen iframe
function loadSite(url) {
    document.getElementById("siteFrame").src = url;
}
