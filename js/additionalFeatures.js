$(document).ready(function(){
	document.getElementById('LoseGame').style.display = 'none';
	document.getElementById('WinGame').style.display = 'none';
       <!-- $("#Start").button().click(function(){ -->
            <!-- player.reset(); -->
            <!-- })  -->
        //$("#dialog .WinGame").dialog();
		  
        $("#LoseGame .my-titlebar-close").click(function(){
            $(this).parent().remove(); 
        })		
  
        $("#LoseGame .my-titlebar-close").click(function(){
            $(this).parent().remove(); 
        })
        
        $("#New_game").button().click(function(){
		//if (document.readyState == "complete"){
            if (document.getElementById("getImagePlayerSelected").innerHTML == "" || document.getElementById("getImagePlayerSelected").innerHTML == undefined){
                console.log("Select a player");
			}	
		
		//}		
       
        // Now instantiate your objects.
        else if (document.readyState == "complete"){
            if (allEnemies != null || allEnemies != undefined){
                allEnemies.splice(0,allEnemies.length);
			}
		
        player.reset();
        var enemy = new Enemy([6.5,120],[100,140]);
        var enemy2 = new Enemy([10,50],[140,180]);
        var enemy3 = new Enemy([20,200],[90,120]);
        // Place all enemy objects in an array called allEnemies
        allEnemies.push(enemy,enemy2,enemy3);
        };
    })
 });
 