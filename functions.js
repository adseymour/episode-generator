   function randNum (max) {
          max = Math.floor(max);
           return Math.floor(Math.random() * (max)) + 1;
        }   
     function generateS () {
         let maxS = document.getElementById('sea').value;
         let randS = randNum(maxS);
         document.getElementById("seaNum").innerHTML = randS;
       }
     function generateE () {
         let maxE = document.getElementById('epi').value;
         let randE = randNum(maxE);
        document.getElementById("episodeNum").innerHTML = randE;
       }
