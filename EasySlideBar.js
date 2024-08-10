var sliders = document.getElementsByClassName('slider')
var silder_text = document.getElementsByClassName('silder_text')

function setSliders(max_values, values_arr) {
    if(values_arr.length != sliders.length) {
        console.error("Sliders Array Length and Values Array Length does not match!")
    }
    for(i = 0; i < sliders.length; i++) {
        sliders[i].min = 0
        sliders[i].max = 100
        result = Math.floor((values_arr[i]/max_values[i])*100, -1)
        sliders[i].value = result
        silder_text[i].style.left = 0 - (100 - result*4.8) - 430
        if(result != 0) {
            silder_text[i].innerHTML = result+ "%"
        }
    }
}