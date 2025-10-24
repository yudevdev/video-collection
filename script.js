const videoUrls = [
    "https://youtu.be/NrJIhK_gOXc?si=pkXGYVsNFSI9j_-8"
];

function loadVideos() {
  const list = document.getElementById('video-list');
  if (videoUrls.length === 0) {
    list.textContent = '動画がありません。';
    return;
  }

  list.textContent = '';
  for (const url of videoUrls) {
    let embed = '';
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      const id = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_\-]{11})/);
      if (id && id[1]) {
        embed = `<iframe class="video-frame" src="https://www.youtube.com/embed/${id[1]}" allowfullscreen></iframe>`;
      }
    } else if (url.includes('nicovideo.jp/watch/')) {
      const id = url.match(/nicovideo\.jp\/watch\/([a-z]{2}\d+)/);
      if (id && id[1]) {
        embed = `<iframe class="video-frame" src="https://embed.nicovideo.jp/watch/${id[1]}?oldScript=1" allowfullscreen></iframe>`;
      }
    }
    if (embed) {
      const div = document.createElement('div');
      div.innerHTML = embed;
      list.appendChild(div);
    } else {
      const a = document.createElement('a');
      a.href = url;
      a.textContent = url;
      a.target = "_blank";
      a.style = "display:block; margin: 0.5em 0;";
      list.appendChild(a);
    }
  }
}

window.addEventListener('DOMContentLoaded', loadVideos);
