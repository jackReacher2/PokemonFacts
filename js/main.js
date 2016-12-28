$(document).ready(function() {
	var i;
	var quotes = [
		"Ivysaur is the only Generation I Pokémon whose name begins with the letter I.",
		"Venusaur is a combination of the words Venus which refers to the Venus Flytrap plant, and the Greek word saur, meaning lizard.",
		"Charmander is the tallest Fire-type starter Pokémon.",
		"Charmeleon is capable of learning Leer in Generation I.",
		"Charizard was voted as the favourite Pokémon by Official Nintendo Magazine readers in February 2012.",
		"Squirtle is the first Water-type Pokémon in National Pokédex.",
		"Wartortle gets its name from a combination of war/warrior, tortoise, and turtle.",
		"Blastoise has the highest base Special Defense of all fully evolved starter Pokémon.",
		"Caterpie was the first Pokémon to be seen evolving in the animé.",
		"Metapod is known as a Cocoon Pokémon.",
		"Butterfree has been trained by Trainers Ash, Drew, Ritchie and Solidad.",
		"Weedle evolves at level 7, the lowest level required for any Pokémon to evolve by leveling up.",
		"Kakuna has been shown evolving more than any other Pokémon in the animé.",
		"Beedrill was originally going to be spelled with only one L.",
		"Pidgey is the only Pokémon with a base stat total of 251.",
		"Pidgeotto was caught by Ash in Ash Catches a Pokémon. Since then, it was one of Ash’s main Pokémon.",
		"Pidgeot is the only Pokémon with a base stat total of 469.",
		"Rattata is the first pure Normal-type in National Pokédex order.",
		"Raticate was classified as a Rat Pokémon in Pokémon Red and Blue, however, from Generation III onward, it is classified as a mouse.",
		"Spearow is a combination of spear and sparrow or arrow.",
		"Fearow weighs 38kg.",
		"Ekans spells snake backwards, which is also Ekans’ species.",
		"Arbok is the last Pokémon to be featured on the Kanto Pokérap.",
		"Pikachu is voiced by Ikue Outani.",
		"Raichu can be male or female, the difference in appearance is the female has smaller, blunted lightning bolt at the end of its tail.",
		"Sandshrew is based on an animal called the pangolin, it’s a mammal that curls up into a ball, has sharp claws, and lives in desert regions.",
		"Sandslash evolves from Sandshrew from level 22.",
		"Nidoran can lay eggs which have a chance of hatching into a Nidoran.",
		"Nidorina are common in the Kanto region, but rare in Sinnoh.",
		"Nidoqueen evolves from Nidorina when exposed to a Moon Stone.",
		"Nidoran‚ made its first appearance in the animé in ‘Pokémon Fashion Flash‘.",
		"Nidorino appeared in the very first episode, battling a Gengar in a battle Ash was watching on TV.",
		"Nidoking, along with Nidoqueen are the only two Pokémon with a Poison/Ground type combination.",
		"Clefairy was originally going to be the mascot of Pokémon instead of Pikachu.",
		"Clefable is based on a fairy and pixie.",
		"Vulpix was originally going to be called Foxfire.",
		"Ninetales was misspelled as Ninetails in the Pokémon Trading Card Game for the Game Boy Color.",
		"Jigglypuff is the only character to keep its original voice track through all three Super Smash Bros. games.",
		"Wigglytuff is 1m tall.",
		"Zubat does not have eyes.",
		"Golbat is the first Pokémon in the National Pokédex to gain a new evolution in a later generation."
		
	];
	
    $(".quoter").click(function() {
		
		function randomRange(myMin, myMax) {
			return Math.floor(Math.random() * (myMax - myMin + 1) + myMin); 
		}
		
		i = randomRange(0, 40);	
        $(".lead").text(quotes[i]);  
		
		var uriLink = encodeURIComponent(quotes[i]);
	
	$(".tweeter").click(function(){ 
  	window.open("https://twitter.com/intent/tweet?text="+uriLink, "_blank");
	});
    });
	
	
	
});
