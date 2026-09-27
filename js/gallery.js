function MainModule(galImageSelector = "#galImages") {
  const me = {};

  const galImageElement = document.querySelector(galImageSelector);

  function getGalImageCode(galImage, map) {
    let direction;

    if (map % 4 === 0) {
      direction = "left";
    } else if (map % 4 === 1 || map % 4 === 3) {
      direction = "center";
    } else if (map % 4 === 2) {
      direction = "right";
    }

    return `<div class="row my-5">
                <div class="offset-sm-1 col-md-10 px-0 gal-cont gal-cont-${direction}">
                    <figure class="gal-fig gal-fig-${direction}">
                    <a href="${galImage.src}" class="image-link">
                    <img class="gallery-pic img-fluid"
                    src="${galImage.src}"
                    alt="${galImage.alt}"
                    /></a>
                    <figcaption class="gal-cap gal-cap-${direction}">
                        ${galImage.title} <br> 
                        ${galImage.location} <br>
                        ${galImage.date}
                    </figcaption>
                    </figure>
                </div>
            </div>

  `;
  }

  function redraw(galImages) {
    galImageElement.innerHTML = "";

    galImageElement.innerHTML = galImages.map(getGalImageCode).join("\n");
  }

  async function loadData() {
    const res = await fetch("./galImageData.json");
    const galImages = await res.json();

    me.redraw(galImages.slice(0, 50));
  }

  me.redraw = redraw;
  me.loadData = loadData;

  return me;
}

const main = MainModule();

main.loadData();
