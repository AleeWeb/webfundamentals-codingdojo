

var pennyAmount = 0.01;

var bank = 0;




for(var i = 0; i <= 30; i++) {

	 //console.log(i);
     console.log("day: " + i + " bank: " + bank + " pennyAmount: " + pennyAmount);

	 bank = pennyAmount + bank; //now bank is 0.01

     pennyAmount = pennyAmount * 2; //now 0.02


 }

// console.log("made it to the end")