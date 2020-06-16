/**
 * Simples Slide Show
 * @author ThiagoTJ
 */

let intervalo = 2000 //2000 Milesegundos = 2s
function slide1() {
    document.getElementById('banner').src = "banner/banner1.jpg" 
    //A linha abaixo "executa" a função após 3s(intervalo) 
    setTimeout("slide2()", intervalo)
}
/**
 *  let intervalo = 3000 -> o intervalo do banner 
    function slide1() { -> função e o id 
    document.getElementById('banner').src = "banner1.jpg" -> imagem 
    setTimeout("slide2()", intervalo) -> intervalo de 3s 
}
 */

function slide2() {
    document.getElementById('banner').src = "banner/banner2.jpg"
    setTimeout("slide3()", intervalo)
}

function slide3() {
    document.getElementById('banner').src = "banner/banner3.jpg"
    setTimeout("slide4()", intervalo)
}
function slide4() {
    document.getElementById('banner').src = "banner/banner4.jpg"
    setTimeout("slide5()", intervalo)
}
function slide5() {
    document.getElementById('banner').src = "banner/fundo.jpg"
    setTimeout("slide1()", intervalo)
}