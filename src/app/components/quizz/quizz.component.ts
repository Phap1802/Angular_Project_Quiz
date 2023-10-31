import { Component } from '@angular/core';
import quizz_questions from "../../../assets/data/quizz_questions.json"





@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent {
  
  title:string = "";

  questions:any ;
  questionSelected:any ; 

  answers:string[] = [];
  answerSelected:string = "";

  questionIndex:number = 0;
  questionMaxIndex:number = 0;

  finished:boolean = false;
 
 


  constructor(
   ) {   
  }

  //recarrega a pagina para fazer novamente o quizz.
  reload() {
    location.reload();
   
  }

  ngOnInit():void {
    if(quizz_questions){
      this.finished = false
      this.title = quizz_questions.title
      
      this.questions = quizz_questions.questions
      this.questionSelected = this.questions[this.questionIndex]

      this.questionIndex = 0 
      this.questionMaxIndex = this.questions.length

    }

  }

  playerChoose(value:string){
    this.answers.push(value)
    // após receber a resposta verifica qual proximo passo. 
    this.nextStep();
   
  }


   async nextStep(){
    this.questionIndex+=1

    if(this.questionMaxIndex > this.questionIndex){

      this.questionSelected = this.questions[this.questionIndex]


    }else{

      const finalAnswer:string = await this.checkResult(this.answers) 
      this.finished = true 
      this.answerSelected = quizz_questions.results[finalAnswer as keyof typeof quizz_questions.results ]
      
      

    }

  }

  async checkResult(anwsers:string[]){

    //algoritimo de frequencia

    const result = anwsers.reduce((previous, current, i, arr)=> {
      if(
          arr.filter(item => item === previous).length > 
          arr.filter(item => item === current).length  
      ) {
          return previous
      } else {
         return current
      }
    })

    return result

  }

  



}
