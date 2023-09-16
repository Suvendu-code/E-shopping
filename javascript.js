import {featureProductNav} from "./Data/featureProductNav.js"
import{imageSlider} from "./Data/imageSlider.js"
import{electronicsProductData} from "./Data/electronicProduct.js"


let input_search = document.getElementById("search_input")
let form_search = document.getElementById("search_form")
let recent_searchEl = document.querySelector(".recent_search")

let recentArray = ["mobile","phone"]
form_search.addEventListener("submit",(e)=>{
    e.preventDefault()
    recentArray.unshift(input_search.value)
    console.log(recentArray)
    renderRecent()
})
function renderRecent(){
    let recent_search_html = ''
recentArray.forEach(el =>{
    recent_search_html +=`
    <div class="recent_list">
        <i class="fa-solid fa-clock-rotate-left"></i>
        <p>${el}</p>
    </div>
    `
})

recent_searchEl.innerHTML = recent_search_html;
}
renderRecent()

/*************************************feature product js***********************/

let featureProduct_listEl = document.querySelector(".featureProduct_list")
let featureProductListHTML = ''

//console.log(featureProductNav)

featureProductNav.forEach(el => {
featureProductListHTML += `
<div class="featureProduct_item">
    <a href="${el.link}">
        <div class="featureProduct_image">
            <img src="${el.img}">
        </div>
        <p class="featureProduct_name">
            ${el.name}
           ${el.subNavigation ? `<i class="fa-solid fa-angle-down- featureProduct_icon_more"></i>` : ""}
        </p>
    </a>
</div>

`
})
featureProduct_listEl.innerHTML = featureProductListHTML


//console.log(featureProductListHTML)
/****************************    image   Slider    *******************************/
let imageSliderListEl = document.querySelector(".imageSliderList")
let imageSliderListHTML = ''
console.log(imageSlider)

imageSlider.forEach(el =>{
    imageSliderListHTML += `
<div class="imageSliderItem">
    <a href="${el.link}">
        <img src="${el.img}" />
    </a>
</div>

    `
})
imageSliderListEl.innerHTML = imageSliderListHTML;

let preve_imageBtnEl = document.getElementById("preve_imageBtn")
let next_imageBtn = document.getElementById("next_imageBtn")
let start = 0;
let end = -400;
preve_imageBtnEl.addEventListener("click",handlePreveImage)
next_imageBtn.addEventListener("click",handleNextImage)
function handlePreveImage(){
    let imageallList = document.querySelectorAll(".imageSliderItem")
    console.log(imageallList)
    if(start < 0)
    start+=100
    imageallList.forEach(el=>{
        el.style.transform = `translatex(${start}%)`
    }) 
}
function handleNextImage(){
    let imageallList = document.querySelectorAll(".imageSliderItem")
    console.log(imageallList)
    if(start > end)
    start-=100
    imageallList.forEach(el=>{
        el.style.transform = `translatex(${start}%)`
    }) 
}
function renderImageSlider(){
    if(start> end){
        handleNextImage()
    }
    else{
        start = 100
    }
}
setInterval(renderImageSlider,5000)



/***** bestofElectronic_Product_item*****/


let bestofElectronic_Product_itemEl =document.querySelector(".bestofElectronic_Product_item")
let bestofElectronicProduct_html =""
console.log(electronicsProductData)
electronicsProductData.forEach(el =>{
    bestofElectronicProduct_html +=`

    <div class="bestofElectronic_item">
                        <div class="bestofElectronic_image_Product">
                        <a href="${el.link}">
                         <img src="${el.img}"/>
                         </a>
                        </div>
                         <div class="bestofElectronicmoreOption">
                             <p class="bestofElectronicProduct_name">${el.productName}</p>
                             <p class="bestofElectronic_discount">${el.discount}</p>
                             <p class="bestofElectronic_brand">${el.brand}</p>
                             
                         </div>
                     </div>
    `
})
bestofElectronic_Product_itemEl.innerHTML = bestofElectronicProduct_html
