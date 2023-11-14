var showTestE=document.querySelector('.show__test-content')
    var actionTestE=document.querySelector('.action__input')
    var show_resultE=document.querySelector('.show__result-grade')
    var timesWrongE=document.querySelector('.timesWrong2')
    var timeE=document.querySelector('.show__test-time')
    var overleyE=document.querySelector('.overley')
    var resultE=document.querySelector('.result')
    var gradeE=document.querySelector('.result__grade')
    var playGainE=document.querySelector('.result__playgain')
    let level;
    var levelE=document.querySelector('#level')
    var choiceLevelE=document.querySelector('.choice__level')
        choiceLevelE.addEventListener('change',(e)=>{
        level=e.target.value
        localStorage.setItem('level',level)
        console.log(localStorage.getItem('level'))

    })
    level=localStorage.getItem('level')!==null ? localStorage.getItem('level') : 'medium';
    levelE.value=localStorage.getItem('level')!==null? localStorage.getItem('level'):'medium';
    var words=[
        'hi',
        'how are you',
        'im fine',
        'thank you',
        'do you know',
        'the sun can be sunside',
        'hey you',
        'you can be better ',
        'no pain no gain'
    ]
var grade=0;

var time=0;
if(level=='business'){
    time=7;
    console.log('easy')
}
else if(level=='medium'){
    time=5;
    console.log('medium')
}
else if(level=='hard'){
    time=3;
    console.log('hard')
}

var randomword;
var timeInterval;

var countWord=words.length;
function getRanDomWords(){
    return words[Math.floor(Math.random()*countWord)]
}
function addWordToDom(){
    randomword=getRanDomWords();
    showTestE.innerHTML=randomword;
}
function timeup(){
    timeE.innerHTML=time+"s"
    timeInterval=setInterval(()=>{
        time--;
        timeE.innerHTML = time + "s"
        if(time<=0){
            clearInterval(timeInterval)
            gameOver()
        }
    }, 1000);
    
}
function updateGrade(){
    grade+=100;
    show_resultE.innerHTML = grade + " Điểm"
}

function gameOver(){
    gradeE.innerHTML = grade 
    showTestE.innerHTML=""
    overleyE.classList.add('dpl')
    resultE.classList.add('dpl')
    grade=0;
    actionTestE.value="";
    time=0;
    timeE.innerHTML=0;
    show_resultE.innerHTML=grade;
    
}
function start(){
    if(level=='business'){
        time=7;
        console.log('easy')
    }
    else if(level=='medium'){
        time=5;
        console.log('medium')
    }
    else if(level=='hard'){
        time=3;
        console.log('hard')
    }
    addWordToDom()  
    actionTestE.focus() 
    timeup()
}

function end(){
    clearInterval(timeInterval)
    gameOver();

}
function playgain(){
    overleyE.classList.remove('dpl')
    resultE.classList.remove('dpl')
    start();

}
actionTestE.addEventListener('input',function(e){
    var inputValue=e.target.value;
    if(inputValue==randomword){
        updateGrade();
        if(level=='business'){
            time+=7;
            console.log('easy')
        }
        else if(level=='medium'){
            time+=5;
            console.log('medium')
        }
        else if(level=='hard'){
            time+=3;
            console.log('hard')
        }
        actionTestE.value='';
        addWordToDom()
    }
})




