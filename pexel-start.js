const myKey = "0JZaQJyfezR3S4o7i0J3rQzKVjV7uyY6AVxuxCnomFJhRxBXy6rL66bG";
const oldRow = document.getElementById("myRow");

const loadBtnPrimary = document.getElementById("load-primary");
const loadBtnSecondary = document.getElementById("load-secondary");
const primary = "music";
const loadPrimary = () => {
  fetch(`https://api.pexels.com/v1/search?query=${primary}`, {
    headers: { Authorization: myKey },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("ERRORE NEL CARICAMENTO DEI DATI");
      }
    })
    .then((loadedData) => {
      for (let i = 0; i < loadedData.photos.length; i++) {
        const newCard = document.createElement("div");
        newCard.innerHTML = `
        <div id="newcol" class="col-12 col-md-10">
        <div class="card mb-4 shadow-sm d-flex flex-column">
          <img
            src=${loadedData.photos[i].src.medium}
            class="bd-placeholder-img card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              ${loadedData.photos[i].alt}
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="./detail.html?photoId=${loadedData.photos[i].id}" class="btn btn-sm btn-outline-secondary">
                  View
                </a>
                <button type="button" onclick=hideBtn(event) class="btn btn-sm btn-outline-secondary">
                  Hide
                </button>
              </div>
              <small class="text-muted">${loadedData.photos[i].id}</small>
            </div>
          </div>
        </div>
      </div>`;
        myRow.appendChild(newCard);
        newCard.classList.add("col-6", "col-lg-4", "col-xxl-3");
      }
    })

    .catch((err) => {
      console.log("ERRORE: ", err);
    });
};
const hideBtn = function (e) {
  e.target.parentElement.parentElement.parentElement.parentElement.classList.add(
    "d-none"
  );
};
const secondary = "dogs";
loadBtnPrimary.addEventListener("click", loadPrimary);
const loadSecondary = () => {
  fetch(`https://api.pexels.com/v1/search?query=${secondary}`, {
    headers: { Authorization: myKey },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("ERRORE NEL CARICAMENTO DEI DATI");
      }
    })
    .then((loadedData) => {
      for (let i = 0; i < loadedData.photos.length; i++) {
        const newCard = document.createElement("div");
        newCard.innerHTML = `
        <div id="newcol" class="col-12 col-md-10">
        <div class="card mb-4 shadow-sm d-flex flex-column">
          <img
            src=${loadedData.photos[i].src.medium}
            class="bd-placeholder-img card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              ${loadedData.photos[i].alt}
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="./detail.html?photoId=${loadedData.photos[i].id}&query=${secondary}" class="btn btn-sm btn-outline-secondary">
                  View
                </a>
                <button type="button" onclick=hideBtn(event) class="btn btn-sm btn-outline-secondary">
                  Hide
                </button>
              </div>
              <small class="text-muted">${loadedData.photos[i].id}</small>
            </div>
          </div>
        </div>
      </div>`;
        myRow.appendChild(newCard);
        newCard.classList.add("col-6", "col-lg-4", "col-xxl-3");
      }
    })

    .catch((err) => {
      console.log("ERRORE: ", err);
    });
};
loadBtnSecondary.addEventListener("click", loadSecondary);

const searchBtn = document.getElementById("searchBtn");
search = () => {
  const inputValue = document.getElementById("search").value;

  fetch(`https://api.pexels.com/v1/search?query=${inputValue}`, {
    headers: { Authorization: myKey },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("ERRORE NEL CARICAMENTO DEI DATI");
      }
    })
    .then((loadedData) => {
      for (let i = 0; i < loadedData.photos.length; i++) {
        const newCard = document.createElement("div");
        newCard.innerHTML = `
        <div id="newcol" class="col-12 col-md-10">
        <div class="card mb-4 shadow-sm d-flex flex-column">
          <img
            src=${loadedData.photos[i].src.medium}
            class="bd-placeholder-img card-img-top"/>
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              ${loadedData.photos[i].alt}
            </p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <a href="./detail.html?photoId=${loadedData.photos[i].id}$query=${inputValue}" class="btn btn-sm btn-outline-secondary">
                  View
                </a>
                <button type="button" onclick=hideBtn(event) class="btn btn-sm btn-outline-secondary">
                  Hide
                </button>
              </div>
              <small class="text-muted">${loadedData.photos[i].id}</small>
            </div>
          </div>
        </div>
      </div>`;
        myRow.appendChild(newCard);
        newCard.classList.add("col-6", "col-lg-4", "col-xxl-3");
      }
    })

    .catch((err) => {
      console.log("ERRORE: ", err);
    });
};

searchBtn.addEventListener("click", search);
