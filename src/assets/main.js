const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC55-mxUj5Nj3niXFReG44OQ&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '75d89464e6msh8d56692c1100198p1c357cjsn42db7ea8cdeb',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options); 
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
    <div class="group relative">
      <div 
        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md 
        overflow-hidden group-hover:opacity-75 lg:aspect-none">
        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
      </div>
      <div class="mt-4 flex justify-between">
        <h3 class="text-sm text-gray-700">
          <span aria-hidden="true" class="absolute inset-0"></span>
          ${video.snippet.title}
        </h3>
      </div>
    </div>
    `).slice(0,4).join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error)
  }
})();

/* 
Consumiendo API

Función que se invoca a sí misma.
Con JavaScript podemos tener funciones anónimas que permitan llamarse 
automáticamente, la estructura cuenta con la palabra reservada async 
y con funciones awwors.

(async () => {
//Dentro implementamos la lógica necesaria para hacer el llamado a la API, obtener los elementos y mostrarlos en html
//Se implementa try y catch
try{
} catch {
}
})();

Método map(): 
https://www.freecodecamp.org/espanol/news/javascript-map-como-utilizar-la-funcion-js-map-metodo-de-arreglo/#:~:text=La%20sintaxis%20del%20m%C3%A9todo%20map,y%20el%20objeto%20array%20completo.

Método slice():
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/slice

Método join(): 
https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/join

gh-pages - npm:
https://www.npmjs.com/package/gh-pages

Scripts: async, defer
https://es.javascript.info/script-async-defer
*/
