// بسم الله الرحمن الرحيم 

var canvas = document.createElement('canvas') ;

canvas.width = '600' ;

canvas.height = '400' ;

canvas.style.border = '0px solid white' ;
canvas.style.borderRadius = '5px' ;
canvas.style.boxShadow = '0px 0px 400px white'

document.body.style = ' margin:100px auto ; text-align:center ' ;

document.body.appendChild(canvas) ;

canvas.addEventListener('click' , event => {

    console.log(`x=[${event.layerX}] , y=[${event.layerY}]`) ;

});


var cx = canvas.getContext('2d') ;


var title = 'Nosyrat company for Developing' ;

var numberLines = 6 ;

var data = [

    {name:'APPLE' , parcent:40 , color:'black'},
    {name:'SAMSUNG' , parcent:60 , color:'lime'},
    {name:'MICROSOFT' , parcent:100 , color:'yellow'},
    {name:'FACEBOOK' , parcent:90 , color:'orange'},
    {name:'GOOGLE' , parcent:50 , color:'white'},
    {name:'WHATSAPP' , parcent:80 , color:'gray'},
    {name:'TELEGRAM' , parcent:45 , color:'red'},
    
] ; 



function fillText(text , context){
    
    'use strict';
    context.save();
    context.shadowOffsetX = 0 ;
    context.shadowOffsetY = 0 ;
    context.shadowBlur = 20 ; 
    context.shadowColor = 'white' ;
    context.textAlign = 'center' ;
    context.font = '25px sans-serif';
    context.fillStyle = 'rgb(190 , 220 , 255)' ;
    context.fillText(text , canvas.width/2 , 30) ;
    context.restore() ;

}

function drawLines(numLines , context , rank){

    'use strict' ;

    cx.lineWidth = 2 ;
     
    context.save() ;

    var distanceOnY = 300/(numLines-2) ;

    var partRank = rank/(numLines-2) ;

    context.shadowBlur = 10 ; 
    context.shadowColor = 'rgb(23 , 250 , 255)' ;
    context.shadowOffsetX = 3 ;
    context.shadowOffsetY = 3 ;
    context.strokeStyle = 'rgb(100 , 179 , 255)' ;
    context.fillStyle = 'rgb(100 , 179 , 255)' ;
    context.font = '18px arial' ;
    context.fillText(rank , 15 , 55);
    
    context.beginPath() ;
    context.moveTo(50 , 50);
    context.lineTo(550 , 50) ;
    context.stroke() ;


    //console.log(distanceOnY) ;

for(let h = 0 ; h < numLines-1 ; h++){

    if (parseInt((rank - partRank)- (h*partRank)) < 0 ) {

        context.fillText( "0" , 15 , 55 + distanceOnY + distanceOnY*h ) ;

    } else {

         context.fillText( parseInt((rank - partRank)- (h*partRank))  , 15 ,55 + distanceOnY + distanceOnY*h ) ;

    }
   
    context.beginPath();
    context.moveTo(50 ,  50 + distanceOnY + distanceOnY*h) ;
    context.lineTo(550, 50 + distanceOnY + distanceOnY*h) ;
    context.stroke() ;

}

context.restore() ;

}

function drawData(arrayOfData , context){

    
    var width = 500/arrayOfData.length ;

    for(let i = 0 ; i < arrayOfData.length ; i++){

        context.fillStyle = arrayOfData[i].color ; 
        context.fillRect(55+(i*width) , 350-(3*arrayOfData[i].parcent) , width-(10/100 * width) , 3*arrayOfData[i].parcent) ;
        
        context.strokeStyle = 'rgb(100 , 179 , 255)' ;
        context.beginPath();
        context.moveTo(50+(i*width) + width/2 , 350);
        context.lineTo(50+(i*width) + width/2 , 360) ;
        context.stroke() ;


        context.font = `${(width/7)+1}px bold` ;
        context.textAlign = 'left' ;
        context.textBaseline = 'top' ;
        context.fillText(arrayOfData[i].name , 60+(i*width) , 365 ) ;
    }
}


fillText(title , cx) ;
drawLines(numberLines+1 , cx ,  100) ;
//drawData(data , cx) ;



var changeData = document.getElementById('change') ;
var container = document.getElementById('con');
var close = document.getElementById('close');

var namee = document.getElementById('input-name') ;
var parcent = document.getElementById('input-parcent');
var color = document.getElementById('input-color') ;

var numberData = document.getElementById('number');
var text = document.getElementsByClassName('n') ;
var getData = document.getElementById('get-data');
var contat2 = document.getElementById('conta2') ;

var nextBtn = document.getElementById('next');
var previosBtn = document.getElementById('previos');
var fillDataBtn = document.getElementById('fill-data');
var information = document.getElementById('information') ;

var numberOfData ;

var nameOfData = [] ;
var parcentOfData = [] ;
var colorOfData = [] ;



numberData.addEventListener('blur' , event=>{

    if(event.target.value != ''){

        numberData.style.transform = 'scale(0)' ;

        text[0].style.transform = 'scale(0)' ;

        getData.style.transform = 'scale(1)'

        contat2.style.height = '70%' ;

        numberOfData = numberData.value ;

        nextBtn.style.display = 'block';

        previosBtn.style.display = 'block';

        information.style.transform = 'scale(1)' ;
        
       // count = numberOfData ;
    }
});


namee.addEventListener('blur' , event => {
    
    nameOfData.push(namee.value)   ;
    
})


parcent.addEventListener('blur' , event =>{

    parcentOfData.push(parcent.value)   ;

});

color.addEventListener('change' , event => {

    

    colorOfData.push(color.value)   ;

    

})


function nextPreviosButtons(){
    
    var index = 1 ;
    var count = 0 ;
    
    var inter = setInterval(() => {

         count = numberData.value ;

        if(index == 1 ){

            previosBtn.style.transform = 'scale(0)' ;

        }else if(index != 1 && index != count){
            
            console.log(count) ;
            previosBtn.style.transform = 'scale(1)';
            nextBtn.style.transform = 'scale(1)' ;
            fillDataBtn.style.transform = 'scale(0)'

        }else if(index == count){

            console.log('hay i am here ') ;

            nextBtn.style.transform = 'scale(0)' ;

            fillDataBtn.style.transform = 'scale(1)' ;
            
        }
    }, 10);

    nextBtn.addEventListener('click' , function (){

        'use strict' ;
    
        namee.value = '' ;
        parcent.value = '' ;
        color.value = '#ff0000' ;
        index++ ;
        console.log(index) ;
        information.textContent = 'Information of data number ['+ index +']' ;
    
    });
    
    previosBtn.addEventListener('click' , function () {
    
        'use strict' ;

        index-- ;
        namee.value = nameOfData[index-1] ;
        parcent.value = parcentOfData[index-1];
        color.value = colorOfData[index-1] ;   
        information.textContent = 'Information of data number ['+ index +']' ;
        
    });

    fillDataBtn.addEventListener('click' , () => {

        container.style.transform = 'scale(0)' ;

        var data2 = [] ;
        
        for(var i = 0 ; i < count ; i++ ){

            data2.push({name:nameOfData[i] , parcent:parcentOfData[i] , color:colorOfData[i]}) ;
        }
        
        drawData(data2 , cx) ;

    });

}

nextPreviosButtons() ;



changeData.onclick = function (){
    
    'use strict' ;

    container.style.transform = 'scale(1)' ;
    

}

close.onclick = function (){

    'use strict' ;

    container.style.transform = 'scale(0)'
}


