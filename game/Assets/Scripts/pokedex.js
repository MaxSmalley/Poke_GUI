#pragma strict

import SimpleJSON;
import System.Linq;
var data : TextAsset;

function Start () {
	var pokedex_data = JSON.Parse(data.text);
	
	for(var i=0; i < 6; i++)
	{
		
		var RandomPokemon = Random.Range(0, 748);
		print(pokedex_data[RandomPokemon]['name']['en']);
		
		var moves = new Array();
		var counter = 0;
		print(pokedex_data[0]['moves'].Keys);
//		for(var key in pokedex_data[RandomPokemon]['moves'].Keys)
//		{
//			moves.Push(key);
//			counter++;
//			if(counter >= 4)
//				break;
//		}
//		
//		for(var move in moves)
//			print(move);
	}
	
	
}

function Update () {

}