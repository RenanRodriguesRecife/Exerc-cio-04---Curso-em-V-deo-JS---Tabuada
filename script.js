function verificar(){
    var num = window.document.getElementById("txtn")
    
    var res = window.document.getElementById("res")
    
    if(num.value == ""){
        window.alert("Digite um número")
    }else{
        num = Number.parseInt(num.value)
        res.innerHTML = ''
     
        for(var i = 1; i<=10; i++){
            let item = document.createElement('option')
            item.text = `${i} x ${num} = ${num * i}`
            res.appendChild(item)
        }
        
    }
    
}