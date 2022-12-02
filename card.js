function interation(){
    let name = document.getElementsById('txtna')
    let num = document.getElementsById('txtn')
    let mon = document.getElementsByName('txtm')
    let year = document.getElementsByName('txty')
    let sec = document.getElementsByName('txtc')
    let res = document.getElementsByName('res')
    let valores = []

    if(name.length == 0 && num.length == 0 && mon.length == 0 && year.length == 0 && sec.length == 0){
        window.alert('Valores inválidos,por favor preencher os espaços em branco!')
    }else{
        valores.push(Number(num.value,mon.value,year.value,sec.value))
        let n = Number(num.value)
        let m = Number(mon.value)
        let y = Number(year.value)
        let s = Number(sec.value)
        res.innerHTML = ''
        

    }
}