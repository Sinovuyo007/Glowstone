
let Guardian_E = {
    "name": "Enchantress",
    "health-points": 10,
    "attack-points": 5,
    "defence-pointes": 0,
    "card-attribute": "F"
}
let Guardian_P = {
    "name": "Enchatress",
    "health-points": 10,
    "attack-points": 5,
    "defence-pointes": 0,
    "character-card": 0,
    "card-attribute": "F"
}

let character3 = {
    "name": "character1",
    "health-points": 7,
    "attack-points": 5,
    "defence-pointes": 0,
    "card-attribute": "H5"
}
let character4 = {
    "name": "character1",
    "health-points": 7,
    "attack-points": 5,
    "defence-pointes": 0,
    "card-attribute": "H5"
}
let character5 = {
    "name": "character1",
    "health-points": 7,
    "attack-points": 5,
    "defence-pointes": 0,
    "card-attribute": "H5"
}
let character6 = {
    "name": "character1",
    "health-points": 7,
    "attack-points": 5,
    "defence-pointes": 0,
    "card-attribute": "H5"
}
let character7 = {
    "name": "Death",
    "health-points": 7,
    "attack-points": 5,
    "defence-pointes": 0,
    "card-attribute": "H5"
}
let character8 = {
    "name": "Death",
    "health-points": 7,
    "attack-points": 5,
    "defence-pointes": 0,
    "card-attribute": "H5"
}
let character9 = {
    "name": "Death",
    "health-points": 7,
    "attack-points": 5,
    "defence-pointes": 0,
    "card-attribute": "H5"
}
let character10 = {
    "name": "charaDeathcter1",
    "health-points": 7,
    "attack-points": 5,
    "defence-pointes": 0,
    "card-attribute": "H5"
}
const e_card = document.getElementById('E_card');
const pg_card = document.getElementById('PG_card');
const matchInfo = document.getElementById('match-info');
A_AP = Guardian_P["attack-points"];
A_HP = Guardian_P["health-points"];
E_AP = Guardian_E["attack-points"];
E_HP = Guardian_E["health-points"];

E_AP1 = character3["attack-points"];
E_HP1 = character3["health-points"];
E_AP2 = character4["attack-points"];
E_HP2 = character4["health-points"];
E_AP3 = character5["attack-points"];
E_HP3 = character5["health-points"];
E_AP4 = character6["attack-points"];
E_HP4 = character6["health-points"];

A_AP5 = character7["attack-points"];
A_HP5 = character7["health-points"];
A_AP6 = character8["attack-points"];
A_HP6 = character8["health-points"];
A_AP7 = character9["attack-points"];
A_HP7 = character9["health-points"];
A_AP8 = character10["attack-points"];
A_HP8 = character10["health-points"];
function attack(){
    let turn =0;
    matchInfo.value = "Turn"+ turn;
    let card =  prompt("Which card will you attack with?e.g guardian or card1 ","");
    switch(card) {
    case "guardian":

        let AttackPrompt =  prompt("Attack wich card e.g G or c1","");
        switch(AttackPrompt){
            case "G":
                Guardian_E = Guardian_E - A_AP ;
	    
                if (E_HP<= 0 ) {
                    alert("Game over");
                    alert("You win");
                    e_card.style.visibility = false;
                    }
                    else if (A_HP <= 0) {
                        alert("Game over");
                        alert("You lose");
                    pg_card.style.visibility = false;    
                    }
                    else {
                 matchInfo.value = "Health reduced";
                 matchInfo.value = "Enemy Guardian";
                 matchInfo.value = "Health : " + E_HP;
                 matchInfo.value = "Attack :" + E_AP;
                 matchInfo.value = "2 turn penalty";
                 matchInfo.value = "Enemy guardians turn";
                 matchInfo.value = "Calculating...";
            
                        A_HP = A_HP- (E_AP1 + E_AP2);
            
                        matchInfo.value = "Your guardian health is reduced";
                        matchInfo.value = "Health :"+ A_HP;
                        matchInfo.value = "Attack :"+ A_AP;
                    }	 
                    break; 
                    case "c1":
        E_HP1 = E_HP1 - A_AP ;
	
        matchInfo.value = "Guardian used 2 turns awarded to enemy team";
        if (E_HP1<= 0 ) {
            alert(character3.name + " has been defeated");
            // e_card.style.visibility = false;
            }
            else if (A_HP5 <= 0) {
                alert("Card is defeated ");
             pg_card.style.visibility = false;    
            }
            else {
             matchInfo.value =  "Enemy card health reduced";
             matchInfo.value =  "Health : " + E_HP;
             matchInfo.value =  "Enemy cards turn";
             matchInfo.value = "Calculating...";
    
                A_HP = A_HP- (E_AP2 + E_AP3);
    
             matchInfo.value =  "Your characters cards health is reduced";
             matchInfo.value = "Health :"+ A_HP5;
            }
            case "c2":
                E_HP1 = E_HP1 - A_AP6 ;   
            matchInfo.value = "Guardian used 2 turns awarded to enemy team";
            
                if (E_HP1<= 0 ) {
                    alert(character4.name + " has been defeated");
                    // e_card.style.visibility = false;
                    }
                    else if (A_HP5 <= 0) {
                        alert("Card is defeated ");
                    // p_card.style.visibility = false;    
                    }
                    else {
                     matchInfo.value =  "Enemy card health reduced";
                     matchInfo.value =  "Health : " + E_HP;
                     matchInfo.value =  "Enemy card turn";
                     matchInfo.value = "Calculating...";
            
                        A_HP = A_HP- (E_AP3 + E_AP4);
            
                     matchInfo.value =  "Your characters cards health is reduced";
                     matchInfo.value = "Health :"+ A_HP6;
                    }
                     case "c3":
                E_HP1 = E_HP1 - A_AP6 ;
            
                matchInfo.value = "Guardian used 2 turns awarded to enemy team";
                if (E_HP1<= 0 ) {
                    alert(character5.name + " has been defeated");
                    // e_card.style.visibility = false;
                    }
                    else if (A_HP5 <= 0) {
                        alert("Card is defeated ");
                    // p_card.style.visibility = false;    
                    }
                    else {
                     matchInfo.value =  "Enemy card health reduced";
                     matchInfo.value =  "Health : " + E_HP;
                     matchInfo.value =  "Enemy card turn";
                     matchInfo.value = "Calculating...";
            
                        A_HP = A_HP- (E_AP2 + E_AP4);
            
                     matchInfo.value =  "Your characters cards health is reduced";
                     matchInfo.value = "Health :"+ A_HP6;
                    }
                     case "c4":
                E_HP1 = E_HP1 - A_AP6 ;
            
                matchInfo.value = "Guardian used 2 turns awarded to enemy team";
                if (E_HP1<= 0 ) {
                    alert(character6.name + " has been defeated");
                    // e_card.style.visibility = false;
                    }
                    else if (A_HP5 <= 0) {
                        alert("Card is defeated ");
                    // p_card.style.visibility = false;    
                    }
                    else {
                     matchInfo.value =  "Enemy card health reduced";
                     matchInfo.value =  "Health : " + E_HP;
                     matchInfo.value =  "Enemy card turn";
                     matchInfo.value = "Calculating...";
            
                        A_HP = A_HP- (E_AP1 + E_AP3);
            
                     matchInfo.value =  "Your characters cards health is reduced";
                     matchInfo.value = "Health :"+ A_HP6;
                    }
                  
        }
       	  turn++;
    }
   
   
       	  turn++;
    }


function Special(){
    alert("using card attribute");
}
