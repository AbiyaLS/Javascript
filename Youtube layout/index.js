// --------------------------MenuBar---------------------------
const menuBtn = document.querySelector(".menu-btn")
const sideBar = document.querySelector("aside")

menuBtn.addEventListener("click",()=>{
    sideBar.classList.toggle("active")
})

// ---------------------------Video Card---------------------------------\

const videos=[
    {
       thumbnail: "https://picsum.photos/300/180?1",
       channel  :  "Nature vlog",
       description: "switzerland beauty"
    },
    {
       thumbnail: "https://picsum.photos/300/180?2",
       channel  :  "Nature vlog",
       description: "switzerland beauty"
    },
    {
       thumbnail: "https://picsum.photos/300/180?3",
       channel  :  "Nature vlog",
       description: "switzerland beauty"
    },
    {
       thumbnail: "https://picsum.photos/300/180?4",
       channel  :  "Nature vlog",
       description: "switzerland beauty"
    },
    {
       thumbnail: "https://picsum.photos/300/180?5",
       channel  :  "Nature vlog",
       description: "switzerland beauty"
    },
    {
       thumbnail: "https://picsum.photos/300/180?6",
       channel  :  "Nature vlog",
       description: "switzerland beauty"
    },
]

const main = document.querySelector(".video-grid")

videos.forEach(video=>{
    const card = document.createElement("div")
    card.classList.add("video-card")
     card.innerHTML = `
    <img src="${video.thumbnail}" alt="Thumbnail">
    <h3>${video.channel}</h3>
    <p>${video.description}</p>
  `;
  main.appendChild(card)
})