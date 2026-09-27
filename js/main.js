const navItems = [
  { text: "Home", url: "index.html" },
  { text: "About", url: "bio.html" },
  { text: "Services", url: "/services" },
  { text: "Portfolio", url: "/portfolio" },
  { text: "Contact", url: "/contact" },
];

const navContainer = document.getElementById("main-nav");

navItems.forEach((item) => {
  // Create the list item and anchor tag
  const li = document.createElement("li");
  const a = document.createElement("a");

  // Set the text and href attributes from the object
  a.textContent = item.text;
  a.href = item.url;

  console.log(window.location.pathname);
  console.log(item.url);

  // Append the link to the list item, and the list item to the nav container
  if (!window.location.pathname.endsWith(item.url)) {
    li.appendChild(a);
    navContainer.appendChild(li);
  }
});
