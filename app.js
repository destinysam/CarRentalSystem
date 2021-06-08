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
       vehicles.innerHTML += '<div class="col-md-12 col-lg-6 g-0">'+
                                '<div class="row p-2 border rounded shadow m-1">'+  
                                    '<div class="col-md-3 d-flex justify-content-center align-items-center">'+
                                        '<img src="forgetPassword.svg" alt="" class="img-fluid">'+
                                    '</div>'+
                                    '<div class="col-md-5 p-1 text-center">'+
                                        `<p class="fs-5 fw-bold">${data[da].vehicle_model.model_name}</p>`+
                                        `<i class="fas fa-gas-pump"></i> <span>${data[da].vehicle_model.fuel}</span>`+
                                        '<i class="fas fa-cogs ms-2"></i>'+
                                        `<span class="carAttribute">${data[da].vehicle_model.transmission}</span>`+
                                    '</div>'+
                                    '<div class="col-md-4 p-1 d-flex justify-content-center align-items-center">'+
                                        '<p class="fs-5 fw-bolder">₹ 1100 <i class="fs-6 fw-light">/month</i></p>'+
                                    '</div>'+
                                '</div>'+
                            '</div>'
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


