const img = document.getElementById('picture');
const ath = document.getElementById('author');
const tit = document.getElementById('title');
const des = document.getElementById('description');

const title = document.querySelector('title');

/*
	tu działasz
	pamiętaj o przecinkach
	w nazwie zdjęcia nie może być polskich znaków
	mogą być tylko w tekstach w cudzysłowiach
	
	nazwa_zdjecia: {
		author: "autor",
		title: "tytuł",
		description: "opis"
	},
*/
const data = {
   fheavy: {
      author: "Kuba",
      title: "Falcon Heavy",
      description: "Opis zdjęcia."
   },
   field: {
      author: "Natalia",
      title: "OGsaksahns",
      description: "Piękne pole."
   },
   impresja: {
      author: "Bartek",
      title: "Impresja, wschód słońca.",
      description: "Taki fajny obraz."
   },
   longmarch: {
      author: "Michał",
      title: "Long March 5",
      description: "Taka chińska rakieta."
   },
   slonce: {
      author: "Michał",
      title: "Long March 5",
      description: "Taka asaa rakieta."
   },
}


window.addEventListener('load', () => {
   const urlParams = new URLSearchParams(window.location.search);
   const image = urlParams.get("image").substring(0, urlParams.get("image").length - 4);

   img.innerHTML = `<img src="./images/${image}.jpg" alt="${image}">`;
   ath.innerHTML = data[image].author;
   tit.innerHTML = data[image].title;
   des.innerHTML = data[image].description;

   title.innerHTML = data[image].title;
});