let APIKey = "bfdb048";
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");

const getData = async (movie) => {
  try {
    let fetchData = await fetch(
      `http://www.omdbapi.com/?i=tt3896198&apikey=${APIKey}&t=${movie}`
    );
    let jasonData = await fetchData.json();
    // console.log(jasonData);

    document.querySelector(".card").innerHTML = "";
    searchInput.value = "";

    let div = document.createElement("div");
    div.classList.add("movieCard");
    div.innerHTML = `
    <img src="${jasonData.Poster}" alt="img">
    <div class="cardText">
        <h1>${jasonData.Title}</h1>
        <p class="rating">Rating : <span>${jasonData.Ratings[0].Value}</span></p>
        <a href="">${jasonData.Genre}</a>
        <p>Release : <span>${jasonData.Released}</span></p>
        <p>Duration : <span>${jasonData.Runtime}</span></p>
        <p>Discription : <span>${jasonData.Plot}</span></p>
    </div>
    `;
    document.querySelector(".card").appendChild(div);
  } catch (error) {
    document.querySelector(".card").innerHTML =
      "<h1>Enter Valid Movie Name</h1>";
  }
};

searchBtn.addEventListener("click", () => {
  let movieName = searchInput.value;
  if (movieName != "") {
    getData(movieName);
  } else {
    document.querySelector(".card").innerHTML =
      "<h1>First Search Movie Name</h1>";
  }
});
