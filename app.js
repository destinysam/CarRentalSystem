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
function apply_filter_Values(){
    let Allselect = document.getElementById("filterbars")
    let AllSelectTags = Allselect.getElementsByTagName("select")
    let dict = {}
    for (var i=0;i<AllSelectTags.length;i++){
        let Key = AllSelectTags[i].getAttribute("key")
        let Value = AllSelectTags[i].value
        if (Value != 0){
            dict[Key] = AllSelectTags[i].options[AllSelectTags[i].selectedIndex].text
        }
        
    }
    return dict
}
let apply = document.getElementById("apply")
apply.addEventListener("click",function(){
    apply_filter_Values()
})


