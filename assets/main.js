const API = 'https://youtube-v3-alternative.p.rapidapi.com/channel?id=UCw05fUBPwmpu-ehXFMqfdMw';
const randomImage = 'https://picsum.photos/400/400';
const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'ef19e93230msh6eeeeed4425bc3dp1564f5jsn6ac678777f88',
    'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
  }
};

async function fetchData(urlApi, options) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  console.log(data);
  return data;
}

// fetchData(API, options);

(async () => {
  try {
    const videos = await fetchData(API, options);
    let view = `
    ${videos.data
      .map(
        (video) => `
    <div class="group relative">
      <a target=”_blank” href="${`https://www.youtube.com/watch?v=${video.videoId}`}">
        <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.thumbnail[0].url}" alt="" class="w-full" />
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.title}
          </h3>
        </div>
      </a>
    </div>
    `
      )
      .slice(0, 12)
      .join('')}
    `;
    content.innerHTML = view;
  } catch (error) {
    console.log(error);
  }
})();
