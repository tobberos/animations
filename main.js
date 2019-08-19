anime({
    targets: '.welcome-text',
    translateY: '3em',
  });

anime({
    targets: '.squareAnimation',
    backgroundColor: '#FFF',
    borderRadius: ['0%', '50%'],
    easing: 'easeInOutQuad',
    direction:'alternate',
    loop:true
});

let squares = document.querySelectorAll('.squares')
anime({
    targets: squares,
    translateX:200,
    direction:'alternate',
    delay:function(el,i,l){
        return i * 100;
    },
    loop:true
})

let chargingDiv = document.querySelector('.charging');

let myObj = {
 charging:'0%'
}

anime({
targets: myObj,
charging:'100%',
easing:'linear',
round:1,
update: function(){
 chargingDiv.innerHTML = JSON.stringify(myObj);
}
});

anime({
targets:'.rotate',
rotate:{
value:360,
duration: 3600
},
loop:true
});
