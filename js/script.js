const counter = document.querySelector('.counter')
const counterButton = document.querySelectorAll('button')[0]
const changeColorButton = document.querySelectorAll('button')[1]
const enlargeFontButton = document.querySelectorAll('button')[2]
const reduceFontButton = document.querySelectorAll('button')[3]
counterButton.addEventListener('click', function(){
    counter.innerHTML++
})

counter.style.fontSize = '16px'
enlargeFontButton.addEventListener('click', function(){  
    if (+counter.style.fontSize.slice(0, 2) < 32){
        counter.style.fontSize = `${+counter.style.fontSize.slice(0, 2) + 1}px`
        console.log(counter.style)
    }
})

reduceFontButton.addEventListener('click', function(){  
    if (+counter.style.fontSize.slice(0, 2) > 9){
        counter.style.fontSize = `${+counter.style.fontSize.slice(0, 2) - 1}px`
        console.log(counter.style)
    }
})
counter.style.backgroundColor = 'white'

changeColorButton.addEventListener('click', function(){
    if (counter.style.backgroundColor === 'white'){
        counter.style.backgroundColor = 'yellow'
    }else if(counter.style.backgroundColor === 'yellow'){
        counter.style.backgroundColor = 'orange'
    }else if(counter.style.backgroundColor === 'orange'){
        counter.style.backgroundColor = 'white'
    }
})