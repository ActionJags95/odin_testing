const img = document.querySelector("img");
console.log(img);

async function getCats() {
  const response = await fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=cats",
    { mode: "cors" }
  );
  console.log(response);
  const catData = await response.json();
  console.log(catData);
  img.src = catData.data.images.original.url;
}

getCats();