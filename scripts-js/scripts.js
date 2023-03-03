
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
        <div class=" pt-3">
         <i class="text-danger bg-danger-subtle px-3 py-2 rounded-5  fa-solid fa-arrow-right"  onclick="modal('${data.id}')" 
         
         data-bs-toggle="modal" data-bs-target="#exampleModal" > </i>
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
    
   }

   else{ const spiner = document.getElementById('spiner')
   spiner.classList.add('d-none')

   }
    

}

// -----------function for modal image-card---------
const modal = (id) =>{
   
   let singleData = [`https://openapi.programming-hero.com/api/ai/tool/${id}`] 
   
   fetch (singleData)
   .then( res => res.json())
   .then(data => picture(data.data))
} 
const picture = (datass)=>{
  console.log(datass)
  
   const imgDiv = document.getElementById('img-div')
   imgDiv.innerHTML = `
   <img src="${datass.image_link[0]}" class="card-img-top" >
   `

   // ---------set the img card input output example--------
if(datass.input_output_examples === null  ){

   const inputEXP = document.getElementById('input-Q')
  inputEXP.innerText='Can you give any example?'
  const outputEXP = document.getElementById('output')
  outputEXP.innerText = 'No! Not Yet! Take a break!!!'

}
else{
  const inputEXP = document.getElementById('input-Q')
  inputEXP.innerText=datass.input_output_examples[0].input
  const outputEXP = document.getElementById('output')
  outputEXP.innerText = datass.input_output_examples[0].output}

    // ---------set the discription-card discription ($-BOx) and (Features) --------

    const discription =document.getElementById('discription')
    discription.innerText=datass.description


   //  pricing part of discription card---------
   const pricing = document.getElementById('pricing')



if(datass.pricing[0].price === '0' || datass.pricing[0].price === 'No cost'  ){
 let newValue =  datass.pricing[0].price 
 newValue ="Free of Cost/"

 pricing.innerText = newValue


}
//  if(datass.pricing === null ){
//    let newValue = datass.pricing
   
//    newValue = "Free of Cost/"

//    pricing.innerText=newValue
// }


else {
   pricing.innerText = datass.pricing[0].price
}


// ---------basic part of pricing-----
const basic = document.getElementById('basic')
basic.innerText = datass.pricing[0].plan 





   //  pricing part of discription card ---------

   const pricing2 = document.getElementById('pricing-2')
   if( datass.pricing[1].price === '0'|| datass.pricing[1].price==='No cost'){
      let newValue =  datass.pricing[0].price 
      newValue ="Free of Cost/"
     
      pricing2.innerText = newValue
   }
else{
pricing2.innerText = datass.pricing[1].price}

// ---------basic part of pricing-----
const pro = document.getElementById('pro')
pro.innerText = datass.pricing[1].plan
   //  pricing part of discription card---------
   const contact = document.getElementById('contact')
contact.innerText = datass.pricing[2].price

// ---------basic part of pricing-----
const enterprice = document.getElementById('enterprice')
enterprice.innerText= datass.pricing[2].plan
}