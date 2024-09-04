$(document).ready(function(){

  let choices = ["pedra","tesoura","papel"]
  let user_points = 0;
  let bot_points = 0;
  function randomChoice(){
    let bot_choice = choices[Math.floor(Math.random() * 3)];
    return bot_choice;
  }
  
  function determineWinner(user_choice, bot_choice){
    
    if(user_choice == bot_choice){
      return "Draw";
      
    }else if((user_choice == "paper" && bot_choice == "pedra") || 
             (user_choice == "tesoura" && bot_choice == "papel") || 
             (user_choice == "pedra" && bot_choice == "tesoura"))
    {
      
      return "Usuario";
    
    }else{
      return "Bot";
    
    }
    
  }
  
  $(".choice").click(function (){
    let user_choice = $(this).data("choice");
    let bot_choice = randomChoice();
    
    switch(determineWinner(user_choice, bot_choice)){
      case "Draw":
        window.alert("Os dois escolheram igual");
        break;

      case "Bot":
        window.alert("O computador venceu");
        bot_points++;
        
        $("#computer_points").text(bot_points);
        break;
      
      case "Usuario":
        window.alert("O usuario venceu");
        user_points++;
        $("#user_points").text(user_points);
        break;
    }
  
  });
});
