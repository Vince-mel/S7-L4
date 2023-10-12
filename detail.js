const addressContent = new URLSearchParams(location.search);
const addressId = addressContent.get("photoId");
const query = addressContent.get("query");

const myKey = "aHNvn0MxJUEQuJuhO47Tca3H6Huc8r7u248hiFKm7rPRpUJlh3FdY48y";

const generatePhotoPage = () => {
  fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    headers: { Authorization: myKey },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore nel caricamento della foto");
      }
    })
    .then((loadedData) => {
      for (let i = 0; i < loadedData.photos.length; i++) {
        if (loadedData.photos[i].id === parseInt(addressId)) {
          const newDiv = document.createElement("div");
          newDiv.innerHTML = `
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
            
                 <small class="text-muted">${loadedData.photos[i].id}</small>
               </div>
             </div>
           </div>
         </div>`;
          const myRow = document.getElementById("myRow");
          myRow.appendChild(newDiv);
          newDiv.classList.add("col-6", "col-lg-4", "col-xxl-3");
        }
      }
    })
    .catch((err) => console.log("ERRORE", err));
};

generatePhotoPage();
