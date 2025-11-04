let title = document.getElementById('title')
let price = document.getElementById('price')
let taxes = document.getElementById('taxes')
let ads = document.getElementById('ads')
let discount = document.getElementById('discount')
let totale = document.getElementById('totale')
let count = document.getElementById('count')
let category = document.getElementById('category')
let submit = document.getElementById('submit')

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

// ajou
let arrkhawya ;
if(localStorage.product != null){
    arrkhawya = JSON.parse(localStorage.product)
}else{
    arrkhawya = [] ;
}


submit.addEventListener('click', function(){
   
    let objt = {
        title : title.value,
        price : price.value,
        taxes : taxes.value,
        ads : ads.value,
        discount : discount.value,
        totale : totale.innerHTML,
        count : count.value,
        category : count.value,
    }
    arrkhawya.push(objt)
   localStorage.setItem('product', JSON.stringify(arrkhawya))
   title.value = "";
   price.value = "";
   taxes.value = "";
   ads.value = "";
   discount.value = "";
   count.value = "";
   category.value = "";
   totale.innerHTML = "" ;
   afich()
   
})


 function afich(){
    let table = '';
    // for(let i = 0 ; i < arrkhawya.length ; i++){
    //     table += `
    //                         <tr>
    //                         <td>${i}</td>
    //                         <td>${arrkhawya[i].title}</td>
    //                         <td>${arrkhawya[i].price}</td>
    //                         <td>${arrkhawya[i].taxes}</td>
    //                         <td>${arrkhawya[i].ads}</td>
    //                         <td>${arrkhawya[i].discount}</td>
    //                         <td>${arrkhawya[i].totale}</td>
    //                         <td>${arrkhawya[i].count}</td>
    //                         <td>${arrkhawya[i].category}</td>
    //                         <td><button>updit</button></td>
    //                         <td><button>delet</button></td>
    //                         </tr>
    //     `
    // }
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
                            </div>
                            <div class="div3">
                                <button>updit</button>
                                <button id="del" onclick="deletarr(${i})">delet</button>
                            </div>
                            </div>
        `
    }

    document.getElementById('divmakbar').innerHTML = table ;
   
   }
       
  

  function deletarr(i){
    arrkhawya.splice(i,1);
    localStorage.product = JSON.stringify(arrkhawya)
    afich();
  }
   afich();
  


   
   






