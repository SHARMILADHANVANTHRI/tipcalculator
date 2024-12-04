
function calculator1() {
    let bill1 =Number(document.getElementById("bill").value) 
    let tip1 = Number( document.getElementById("tip").value)

let percent =(tip1/100) * bill1
let over =(bill1 + percent )
    document.getElementById('total').innerHTML = over

}


