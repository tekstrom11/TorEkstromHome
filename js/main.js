const navItems = [
  { text: "Home", url: "index.html" },
  { text: "Person", url: "bio.html" },
  { text: "Gallery", url: "gallery.html" },
];

const navContainer = document.getElementById("main-nav");

// The folder URL (.../TorEkstromHome/) is the home page too
const currentPath = window.location.pathname.endsWith("/")
  ? window.location.pathname + "index.html"
  : window.location.pathname;

navItems.forEach((item) => {
  // Create the list item and anchor tag
  const li = document.createElement("li");
  const a = document.createElement("a");

  // Set the text and href attributes from the object
  a.textContent = item.text;
  a.href = item.url;

  // Append the link to the list item, and the list item to the nav container
  // Unless matches current page, then skip
  if (!currentPath.endsWith(item.url)) {
    li.appendChild(a);
    navContainer.appendChild(li);
  }
});
