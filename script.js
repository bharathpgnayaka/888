const startbutton = document.getElementById(['start-btn'])
const nextbutton = document.getElementById(['next-btn'])
const questioncontainer = document.getElementById(['question-container'])
const questionelement = document.getElementById(['question'])
const answerbuttonelement = document.getElementById(['answer-btn'])

 let shuffledquestion, currentquestionindex

startbutton.addEventListener('click', startgame)
nextbutton.addEventListener('click',() => {
  currentquestionindex++
  setnextquestion()
})


function startgame(){
    startbutton.classList.add('hide')
    shuffledquestion = question.sort(() => Math.random() - .5)
    currentquestionindex = 0
    questioncontainer.classList.remove('hide')
  

    setnextquestion()


}
 function setnextquestion(){
  resetstate()
 showquestion(shuffledquestion[currentquestionindex])

 }
  function showquestion(question){
    questionelement.innerText = question.question
    question.answers.forEach (answer => {
     const button = document.createElement('button')
     button.innerText = answer.Text
     button.classList.add('btn')
     if(answer.correct){
      button.dataset.correct = answer.correct
     }
     button.addEventListener('click',selectanswer)
     answerbuttonelement.appendChild(button)
    });
    
  }
     
  function resetstate(){
    clearstatusclass(document.body)
    nextbutton.classList.add('hide')
    while (answerbuttonelement.firstChild){
      answerbuttonelement.removeChild(answerbuttonelement.firstChild)
    }
  }

 function selectanswer(e){
  const selectbutton = e.target
  const correct = selectbutton.dataset.correct
  setstatusclass(document.body, correct)
  Array.from(answerbuttonelement.children).forEach(button => {
    setstatusclass(button,button.dataset.correct)
  })
    if(shuffledquestion.length > currentquestionindex + 1){
      nextbutton.classList.remove('hide')
    }else{
      startbutton.innerText = 'restart'
      startbutton.classList.remove('hide')
    }
     
 }

    function setstatusclass(element, correct){
      clearstatusclass(element)
      if(correct){
        element.classList.add('correct')
      }else{
        element.classList.add('wrong')
      }
    }

    function clearstatusclass(element){
      element.classList.remove('correct')
      element.classList.remove('wrong')
    }
 const question = [
    {
    question:'Slove 5 + 10 ',
    answers:[
         {Text:'15',correct:true},
        { Text:'22',correct:false}
    ]
 },
 {
  question:'chitradurga known for? ',
  answers:[
       {Text:'fort',correct:true},
      { Text:'beach',correct:false}
  ]
},{
  question:'BARAGERAMMA TEMPLE is in ',
  answers:[
       {Text:'holalkere road',correct:true},
      { Text:'malapanahatti',correct:false}
  ]
},{
  question:'Slove 5 + 10 ',
  answers:[
       {Text:'15',correct:true},
      { Text:'22',correct:false}
  ]
},{
  question:'who is priest of barageramma temple ',
  answers:[
       {Text:'bharath pujar nayaka',correct:true},
      { Text:'mani pujar',correct:false}
  ]
}
]
