function loadData(){ //GETTING DATA FROM JSON FILE
    return fetch("./vehicles.json")
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
      return data // RETURNING DATA TO FUNCTION
    })
}
loadData().then(function(data){
    let vehicles = document.getElementById("vehicleObjects")
    for (da in data){ // ITERATING OVER OBJECTS
       let div1 = document.createElement("div") //MAIN DIV
       div1.setAttribute("class","row p-2 border rounded shadow m-1")
       let div2 = document.createElement("div") // NESTED DIV
       div2.setAttribute("class","col-md-3 d-flex justify-content-center align-items-center")
       div2.innerHTML='<img src="forgetPassword.svg" class="img-fluid" alt="VehicleImage" height="50" width="50">'
       let div3 = document.createElement("div") // NESTED DIV
       div3.setAttribute("class","col-md-5 p-1 text-center")
       let p = document.createElement("p")
       p.setAttribute("class","fs-5 fw-bold")
       p.textContent= data[da].vehicle_model.model_name
       let i = document.createElement("i")
       let span = document.createElement("span")
       i.setAttribute("class","fas fa-gas-pump")
       span.textContent= data[da].vehicle_model.fuel
       let i1 = document.createElement("i")
       i1.setAttribute("class","fas fa-cogs ms-2")
       let span1 = document.createElement("span")
       span1.textContent= data[da].vehicle_model.transmission
       div3.appendChild(p)
       div3.appendChild(i)
       div3.appendChild(span)
       div3.appendChild(i1)
       div3.appendChild(span1)
       div1.appendChild(div2) //ADDING NESTED DIV TO MAIN DIV
       div1.appendChild(div3) //ADDING NESTED DIV TO MAIN DIV
       vehicles.appendChild(div1) //ADDING MAIN DIV TO BODY
    }
})
// GETTING VALUES FROM FILTER BOXES
function getvalues(){
    let district = document.getElementById("district")
    let min_price = document.getElementById("min_price")
    let max_price = document.getElementById("max_price")
    let brand = document.getElementById("brand")
    let fuel = document.getElementById("fuel")
    let transmission = document.getElementById("transmission")
    list = []
    list.push(district.value,min_price.value,max_price.value,brand.value,fuel.value,transmission.value)
    const params = {
        district : district.value,
        min_price : min_price.value,
        max_price : max_price.value,
        brand : brand.value,
        fuel : fuel.value,
        transmission : transmission.value
    }
    const options = {
        method : "POST",
        body : JSON.stringify(params) 
    }
    fetch("/endpoint",options)
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        return data
    })
}
let Allselect = document.getElementsByClassName("form-select")
for (var i=0;i<Allselect.length;i++){
    Allselect[i].addEventListener("change",function(){
        getvalues()
    })
}
