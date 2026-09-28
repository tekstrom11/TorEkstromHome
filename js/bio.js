// Bio page (the site's AI-generated page): pulls a few frames from
// the gallery data into the photography section.

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildFrame(photo) {
  const item = document.createElement("li");

  const link = document.createElement("a");
  link.className = "tk-frame-link";
  link.href = "gallery.html";
  link.title = `${photo.title}, ${photo.location}`;

  const img = document.createElement("img");
  img.className = "tk-frame-img";
  img.src = photo.src;
  img.alt = photo.alt;
  img.loading = "lazy";

  link.append(img);
  item.append(link);
  return item;
}

async function loadFrames(howMany = 3) {
  const list = document.querySelector(".tk-frames");
  if (!list) return;

  try {
    const res = await fetch("galImageData.json");
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const photos = await res.json();

    // A different few on every visit
    shuffle(photos)
      .slice(0, howMany)
      .forEach((photo) => list.append(buildFrame(photo)));
  } catch (err) {
    // The list hides itself when empty; the gallery link still works.
    console.error("Couldn't load frames from the gallery:", err);
  }
}

loadFrames();
