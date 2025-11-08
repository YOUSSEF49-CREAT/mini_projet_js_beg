let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let totale = document.getElementById('totale')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')
let mood = 'create';
let tmp ;

//  function dial total
function majmo3(){
    if(price.value !== ""){
        let result = (+price.value + +taxes.value + +ads.value)- +discount.value ;
        totale.innerHTML = result ;
        totale.style.background = "rgba(51, 68, 61, 1)" 
    }else{
        totale.innerHTML="";
    }
}

//************************************** */ ajou*************************

let arrkhawya ;
if(localStorage.product != null){
    arrkhawya = JSON.parse(localStorage.product)
}else{
    arrkhawya = [] ;
}


submit.addEventListener('click', function(){
   
    let objt = {
        title : title.value.toLowerCase(),
        price : price.value,
        taxes : taxes.value,
        ads : ads.value,
        discount : discount.value,
        totale : totale.innerHTML,
        count : count.value,
        category : category.value.toLowerCase(),
    }
    // ***************************validation***************************
     if(title.value != '' && price.value != '' && category.value != ''){
             if(mood === 'create'){
            arrkhawya.push(objt);
             }
            else{
            arrkhawya[ tmp ] = objt ;
            mood = 'create';
            submit.innerHTML = 'create'
            count.style.display = 'block'
    }
    title.value = "";
    price.value = "";
    taxes.value = "";
    ads.value = "";
    discount.value = "";
    count.value = "";
    category.value = "";
    totale.innerHTML = "" ;
     }
    // if(arrkhawya.count > 1){
    //     for(let i=0 ; i < arrkhawya.count ; i++ ){
    //         arrkhawya.push(objt)
    //     }
    // } else{
    //          arrkhawya.push(objt)
    //     }
   
   localStorage.setItem('product', JSON.stringify(arrkhawya))
  
   afich()
   
})
// *********************************search****************************************
let searchMood = 'title' ;
function recherchmood(id){
    let search = document.getElementById("search");
   if(id == 'searchtitle'){
    searchMood = 'title'
    search.placeholder ='search by title'
    search.value = '';
    afich()
   }else{
    searchMood = 'category'
    search.placeholder ='search by category'
    search.value = '';
    afich()
   }
    search.focus()
}
function recherch(value){ 
    let table = "" ;
    if(searchMood == 'title'){
       for(let i = 0  ; i < arrkhawya.length ; i++){
         if(arrkhawya[i].title.includes(value.toLowerCase())){
               table += `
                            <div id="div_kbira">
                            <h2>${i+1}</h2>
                            <h1>${arrkhawya[i].title}</h1>
                            <div class="div2">
                                <p>price :${arrkhawya[i].price}</p>
                                <p>taxes :${arrkhawya[i].taxes}</p>
                                <p>ads :${arrkhawya[i].ads}</p>
                                <p>discount :${arrkhawya[i].discount}</p>
                                <p>total :${arrkhawya[i].totale}</p>
                                <p>category :${arrkhawya[i].category}</p>
                            </div>
                            <div class="div3">
                                <button onclick="updite(${i})">updit</button>
                                <button id="del" onclick="deletarr(${i})">delet</button>
                            </div>
                            </div>
                 `
         }
       }

    }else{
           for(let i = 0  ; i < arrkhawya.length ; i++){
         if(arrkhawya[i].category.includes(value.toLowerCase())){
               table += `
                            <div id="div_kbira">
                            <h2>${i+1}</h2>
                            <h1>${arrkhawya[i].title}</h1>
                            <div class="div2">
                                <p>price :${arrkhawya[i].price}</p>
                                <p>taxes :${arrkhawya[i].taxes}</p>
                                <p>ads :${arrkhawya[i].ads}</p>
                                <p>discount :${arrkhawya[i].discount}</p>
                                <p>total :${arrkhawya[i].totale}</p>
                                <p>category :${arrkhawya[i].category}</p>
                            </div>
                            <div class="div3">
                                <button onclick="updite(${i})">updit</button>
                                <button id="del" onclick="deletarr(${i})">delet</button>
                            </div>
                            </div>
                 `
         }
       }
    }
    document.getElementById('divmakbar').innerHTML = table ;
}


// *********************************afichage***************************************
 function afich(){

    
    let table = '';
    for(let i = 0 ; i < arrkhawya.length ; i++){
        table += `
                            <div id="div_kbira">
                            <h2>${i+1}</h2>
                            <h1>${arrkhawya[i].title}</h1>
                            <div class="div2">
                                <p>price :${arrkhawya[i].price}</p>
                                <p>taxes :${arrkhawya[i].taxes}</p>
                                <p>ads :${arrkhawya[i].ads}</p>
                                <p>discount :${arrkhawya[i].discount}</p>
                                <p>total :${arrkhawya[i].totale}</p>
                                <p>category :${arrkhawya[i].category}</p>
                            </div>
                            <div class="div3">
                                <button onclick="updite(${i})">updit</button>
                                <button id="del" onclick="deletarr(${i})">delet</button>
                            </div>
                            </div>
                 `
    }

    document.getElementById('divmakbar').innerHTML = table ;
   
   }

// ***********************   ubdite ******************************
       
  function updite(x){
       title.value = arrkhawya[x].title ;
       price.value = arrkhawya[x].price ;
       taxes.value = arrkhawya[x].taxes ;
       ads.value = arrkhawya[x].ads ;
       discount.value = arrkhawya[x].discount ;
       category.value = arrkhawya[x].category ;
       count.style.display = 'none'
       submit.innerHTML = 'updite'
       majmo3()
       mood = 'update'
       tmp = x ;
       scroll({
          top:0,
          behavior:'smooth'
       })
  }

  function deletarr(i){
    arrkhawya.splice(i,1);
    localStorage.product = JSON.stringify(arrkhawya)
    afich();
  }
   afich();

  


   
   






