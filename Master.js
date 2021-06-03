// Hey there!
// This is CODE, lets you control your character with code.
// If you don't know how to code, don't worry, It's easy.
// Just set attack_mode to true and ENGAGE!



setInterval(function(){

	loot();
    handle_use_potions(200, 300)
	
	var target=get_targeted_monster();
	if(!target)
	{
		target=get_nearest_monster({min_xp:100,max_att:120});
		if(target) change_target(target);
		else
		{
			set_message("No Monsters");
			return;
		}
	}
	
	if(!is_in_range(target))
	{
		move(
			character.x+(target.x-character.x)/2,
			character.y+(target.y-character.y)/2
			);
		// Walk half the distance
	}
	else if(can_attack(target))
	{
		set_message("Attacking");
		attack(target);
	}

},250/4); // Loops every 1/4 seconds.

// Learn Javascript: https://www.codecademy.com/learn/introduction-to-javascript
// Write your own CODE: https://github.com/kaansoral/adventureland
// NOTE: If the tab isn't focused, browsers slow down the game
// NOTE: Use the performance_trick() function as a workaround

var last_use_hp_potion = null;
var last_use_mp_potion = null;
function handle_use_potions(hp_amt, mp_amt){

    if(character.mp <= character.mp_cost* 5){
        if(last_use_mp_potion == null || new Date() - last_use_mp_potion >= parent.G.skills.use_mp.cooldown){
            use('mp')
            last_use_potion = new Date();

        }
       
        }  else if(character.hp <=  character.max_hp - hp_amt){
                if(last_use_hp_potion == null || new Date() - last_use_hp_potion >= parent.G.skills.use_hp.cooldown){
                    use('hp')
                    last_use_potion = new Date();
        
                }
        }else if(character.mp <= character.max_mp - mp_amt){
                if(last_use_mp_potion == null || new Date() - last_use_mp_potion >= parent.G.skills.use_mp.cooldown){
                    use('mp')
                    last_use_potion = new Date();
        
            }
        }
            
    }

var last_respawn = null;
function handle_respawn(){
if(character.rip){
    if(last_respawn == null|| new Date() - last_respawn >= 10000){
    respawn();
    last_respawn = new Date();
    }
    return;
    }   
}
