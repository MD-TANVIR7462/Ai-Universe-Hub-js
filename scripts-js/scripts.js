
const loadData = (value) => {
   let url = [`https://openapi.programming-hero.com/api/ai/tools`]
   fetch(url)
      .then(res => res.json())
      .then(data => callData(data.data.tools, value))

}
function callData(datas, value) {
  

   //-- when click (show more) btn then the value perameters value will be true then if statement will works otherwise else statement will continue by defult-------- ***

   if (value === true) {
      spinerFunction(true)
      const main = document.getElementById('main-container')
      main.innerHTML = ""
      const seeMoreBtn = document.getElementById('see-more-btn')
      seeMoreBtn.classList.add('d-none')
     
      datas = datas
   }
   else {
      datas = datas.slice(0, 6)
   }

   let mainContainer = document.getElementById('main-container')
   for (const data of datas) {
     
      const divs = document.createElement('div')
      divs.classList.add('col')
      divs.innerHTML = `

   
      <div class="card h-100">
      <p class="rounded-5 p-3">
      <img src="${data.image}" class="card-img-top" alt="...">
</p>
    
      <div class="card-body">
        <h5 class="card-title">Features</h5>
        <p class="text-body fs-6 fw-lighter  fw-light">
   <span >1.<span >${data.features[0]}</span> </span> <br>
   <span >2.<span>${data.features[1]}</span> </span> <br>
   <span >3.<span>${data.features[2]}</span></span> <br>
   </p>
      </div>
   
      <div class="card-footer d-flex justify-content-between">
        <small class="">
        <h5 class="card-title ">${data.name}</h5>
        <p class='mt-1'> <span><i class="fa-solid fa-calendar-days"></i></span> ${data.published_in}</p>
        </small>
        <div class="">
        <button type="button" class="btn btn-danger mt-4 px-3"data-bs-toggle="modal" data-bs-target="#exampleModal" >Details</button>
        </div>
      </div>
     


`

 
      mainContainer.appendChild(divs)

   };
   // ----------for stop spinerFunction-------
   
   spinerFunction(false)
}

//**--- arrow function for see more button-----**
const ShowAllData = () => {
   loadData(true)

}

//---- arrow function for spiner--loader------
const spinerFunction = (values) =>{
   if(values === true){
      const spiner = document.getElementById('spiner')
      spiner.classList.remove('d-none')
      console.log('im-spining')
   }

   else{ const spiner = document.getElementById('spiner')
   spiner.classList.add('d-none')

   }
    

}
