 $(document).ready(function(){
    document.getElementById('LoseGame').style.display = 'none';
    document.getElementById('WinGame').style.display = 'none';
       <!-- $("#Start").button().click(function(){ -->
            <!-- player.reset(); -->
            <!-- })  -->
        //$("#dialog .WinGame").dialog();
        $("#WinGame .my-titlebar-close").click(function(){
            $(this).parent().remove(); 
        })

        $("#LoseGame .my-titlebar-close").click(function(){
            $(this).parent().remove(); 
        })
        
        $("#New_game").button().click(function(){
        player.reset();
        // Now instantiate your objects.
        if (document.readyState == "complete"){
            if (allEnemies != null || allEnemies != undefined){
                allEnemies.splice(0,allEnemies.length);
        }
        
        var enemy = new Enemy([6.5,120],[100,140]);
        var enemy2 = new Enemy([10,50],[140,180]);
        var enemy3 = new Enemy([20,200],[90,120]);
        // Place all enemy objects in an array called allEnemies
        allEnemies.push(enemy,enemy2,enemy3);
        };
    })
 });
 