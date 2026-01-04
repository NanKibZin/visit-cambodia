export function displayTopDestinations(data) {   
      const container = document.querySelector(".destinations-grid");     
      if(!container) return;     
      container.innerHTML = data.map(item => ` 
        <div class="col"> 
            <div class="dest-item"> 
                <div class="img-circle"> 
                    <img src="${item.img}" class="img-fluid" alt="${item.name}"> 
                </div> 
                <h6 class="destination-name fs-5">${item.name}</h6> 
                <p class="attraction-text text-primary fw-semibold">${item.places}</p> 
            </div> 
        </div> 
`).join(""); 
} 
 
export function displayHighlights(data) {    
     const container = document.querySelector(".why-grid");     
     if(!container) return;     container.innerHTML = data.map(item => ` 
        <div class="highlight-card"> 
            <div class="image-box"><img src="${item.img}" alt="${item.title}"></div> 
            <h3>${item.title}</h3> 
            <p>${item.desc}</p> 
        </div> 
    `).join(""); 
} 
 
export function displayPopular(data) {    
     const container = document.querySelector(".places-grid");   
       if(!container) return;    
        container.innerHTML = data.map(item => ` 
        <div class="place-card"> 
            <div class="place-img"><img src="${item.img}" alt="${item.title}"></div> 
            <h3>${item.title}</h3> 
            <p class="location">  ${item.location}, Cambodia</p> 
        </div> 
    `).join(""); 
} 
 
