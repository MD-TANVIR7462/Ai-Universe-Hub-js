
const loadData = (value) => {
   let url = `https://openapi.programming-hero.com/api/ai/tools`
   fetch(url)
      .then(res => res.json())
      .then(data => callData(data.data.tools, value))

}
function callData(datas, value) {
battonSEE()
   //-- when click (show more) btn then the value perameters value will be true then if statement will works otherwise else statement will continue by defult-------- ***
function battonSEE (){
   if (value === true) {
      
      const main = document.getElementById('main-container')
      main.innerHTML = ""
      const seeMoreBtn = document.getElementById('see-more-btn')
      seeMoreBtn.classList.add('d-none')
     
      datas = datas
   }
 
  
   else {
      datas = datas.slice(0, 6)
   }}

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



// ----------------acuracy function-----------

const acuracy=(acuPoint)=>{
  let accuracyP = document.getElementById('acuracy')
   let cp =acuPoint.accuracy.score*100
     
      if(cp === null|| cp === 0){
      
         accuracyP.classList.add('d-none')
      }
      else{
      accuracyP.classList.remove('d-none')
       const x= document.getElementById('acuracy-point')
       x.innerText=cp



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
//  console.log(datass)
forNullAi(datass)
   acuracy(datass)
  
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
const x = datass.pricing

if(datass.pricing[0].price === '0' || datass.pricing[0].price === 'No cost'  ){
 let newValue =  datass.pricing[0].price 
 newValue ="Free of Cost/"

 pricing.innerText = newValue


}


else {
   pricing.innerText = datass.pricing[0].price
}


// ---------basic part of pricing-----
const basic = document.getElementById('basic')
basic.innerText = datass.pricing[0].plan 





   //  pricing part of discription card ---------

   const pricing2 = document.getElementById('pricing-2')
   if( datass.pricing[1].price === '0'|| datass.pricing[1].price==='No cost' ){
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


// -------------features and integration div-----------
// --------------------features-part------------
const features =  document.getElementById('li-1')
features.innerText = datass.features[1].feature_name
const features2 =  document.getElementById('li-2')
features2.innerText = datass.features[2].feature_name
const features3 =  document.getElementById('li-3')
features3.innerText = datass.features[3].feature_name
const featuresex =  document.getElementById('li-ex')
featuresex.classList.add('d-none')



//------------- modal -integrations part-------------

 
const features4 =  document.getElementById('li-4')
features4.innerText = datass.integrations[0]
const features5 =  document.getElementById('li-5')
features5.classList.remove('d-none')
if(datass.integrations[1] == undefined){
   features5.innerText = 'No data Found'
}
else{
features5.innerText = datass.integrations[1]}


const features6 =  document.getElementById('li-6')
features6.classList.remove('d-none')

if(datass.integrations[2]== undefined){
   features6.innerText = 'No data Found'
}
else{
   features6.innerText = datass.integrations[2]
}




}


// -------------function for null api's---------

function forNullAi(nullApis){
 
   const x = nullApis.pricing
   
const pricing = document.getElementById('pricing')
const basic = document.getElementById('basic')
const pricing2 = document.getElementById('pricing-2')
const pro = document.getElementById('pro')
const enterprice = document.getElementById('enterprice')
const contact = document.getElementById('contact')
if(x == null && nullApis.integrations == null){

   const imgDiv = document.getElementById('img-div')
   imgDiv.innerHTML = `
   <img src="${nullApis.image_link[0]}" class="card-img-top" >
   `

   let newValue ='Free Of Cost/'

   pricing.innerText = newValue
   pricing2.innerText=newValue
   contact.innerText = newValue
   basic.innerText ='Basic'
   pro.innerText = 'Pro'
   enterprice.innerText ='enterprice'


   features(nullApis)
   integrationF(nullApis)


}
else{
   return nullApis
}
}

//---- function for null ai api (features)----  

function  features(fDatas) {
  
   const features =  document.getElementById('li-1')
   features.innerText = fDatas.features[1].feature_name
   const features2 =  document.getElementById('li-2')
   features2.innerText = fDatas.features[2].feature_name
   const features3 =  document.getElementById('li-3')
   features3.innerText = fDatas.features[3].feature_name 
   const featuresex =  document.getElementById('li-ex') 
   featuresex.classList.remove('d-none')
   featuresex.innerText = fDatas.features[4].feature_name

}

const integrationF = (integrationF) => {
   if(integrationF.integrations == null ){
      document.getElementById('li-4').innerText = 'No data Found'
      document.getElementById('li-5').classList.add('d-none')
      document.getElementById('li-6').classList.add('d-none')
   }

   // it's never be declare becouse always when an null property come in this function he will hits the if statement-----(else -never- will be - declare)
else{
   return'someThing went wrong'
}

}


// ----------short by date function-------
document.getElementById('shrt').addEventListener('click',function() {
   const url =`https://openapi.programming-hero.com/api/ai/tools`;
   fetch(url)
   .then(res=>res.json())
   .then(data => shorting(data.data))

  
})

const shorting =(datas)=>{
const sorted = datas.tools.sort(
   (a,b) => new Date(a.published_in) - new Date(b.published_in)

) ;

// calling callData function with sorted value and true value
callData(sorted,true )
}
spinerFunction(true)