
import SimpleJSON;
import UnityEngine;
import UnityEngine.UI;

var data : TextAsset;
var pokedex_data;
var Name : Text;
var att : Text;
var def : Text;
var health : Text;
var type : Text;

function Start () {
	pokedex_data = JSON.Parse(data.text);
	
	var pokemon = new Array();
		
	for(var i=0; i<6; i++)
	{
	
		pokemon.Push(pokedex_data[Random.Range(0,151)]);
		if(i == 0)
		{
			GameObject.FindWithTag("Name1").GetComponent(Text).text = pokemon[i]["name"]["en"];
			GameObject.FindWithTag("att1").GetComponent(Text).text = "Attack: " + parseInt(pokemon[i]["base_stats"]["atk"]);
			GameObject.FindWithTag("def1").GetComponent(Text).text = "Defense: " + parseInt(pokemon[i]["base_stats"]["def"]);
			GameObject.FindWithTag("Health1").GetComponent(Text).text = "Health: " + parseInt(pokemon[i]["base_stats"]["hp"]);
			GameObject.FindWithTag("type1").GetComponent(Text).text = "Type: " + pokemon[i]["type"][0];
		}
		else if(i == 1)
		{
			GameObject.FindWithTag("Name2").GetComponent(Text).text = pokemon[i]["name"]["en"];
			GameObject.FindWithTag("att2").GetComponent(Text).text = "Attack: " + parseInt(pokemon[i]["base_stats"]["atk"]);
			GameObject.FindWithTag("def2").GetComponent(Text).text = "Defense: " + parseInt(pokemon[i]["base_stats"]["def"]);
			GameObject.FindWithTag("Health2").GetComponent(Text).text = "Health: " + parseInt(pokemon[i]["base_stats"]["hp"]);
			GameObject.FindWithTag("type2").GetComponent(Text).text = "Type: " + pokemon[i]["type"][0];
		}
		else if(i == 2)
		{
			GameObject.FindWithTag("Name3").GetComponent(Text).text = pokemon[i]["name"]["en"];
			GameObject.FindWithTag("att3").GetComponent(Text).text = "Attack: " + parseInt(pokemon[i]["base_stats"]["atk"]);
			GameObject.FindWithTag("def3").GetComponent(Text).text = "Defense: " + parseInt(pokemon[i]["base_stats"]["def"]);
			GameObject.FindWithTag("Health3").GetComponent(Text).text = "Health: " + parseInt(pokemon[i]["base_stats"]["hp"]);
			GameObject.FindWithTag("type3").GetComponent(Text).text = "Type: " + pokemon[i]["type"][0];
		}
			else if(i == 3)
		{
			GameObject.FindWithTag("Name4").GetComponent(Text).text = pokemon[i]["name"]["en"];
			GameObject.FindWithTag("att4").GetComponent(Text).text = "Attack: " + parseInt(pokemon[i]["base_stats"]["atk"]);
			GameObject.FindWithTag("def4").GetComponent(Text).text = "Defense: " + parseInt(pokemon[i]["base_stats"]["def"]);
			GameObject.FindWithTag("Health4").GetComponent(Text).text = "Health: " + parseInt(pokemon[i]["base_stats"]["hp"]);
			GameObject.FindWithTag("type4").GetComponent(Text).text = "Type: " + pokemon[i]["type"][0];
		}
			else if(i == 4)
		{
			GameObject.FindWithTag("Name5").GetComponent(Text).text = pokemon[i]["name"]["en"];
			GameObject.FindWithTag("att5").GetComponent(Text).text = "Attack: " + parseInt(pokemon[i]["base_stats"]["atk"]);
			GameObject.FindWithTag("def5").GetComponent(Text).text = "Defense: " + parseInt(pokemon[i]["base_stats"]["def"]);
			GameObject.FindWithTag("Health5").GetComponent(Text).text = "Health: " + parseInt(pokemon[i]["base_stats"]["hp"]);
			GameObject.FindWithTag("type5").GetComponent(Text).text = "Type: " + pokemon[i]["type"][0];
		}
				else if(i == 5)
		{
			GameObject.FindWithTag("Name6").GetComponent(Text).text = pokemon[i]["name"]["en"];
			GameObject.FindWithTag("att6").GetComponent(Text).text = "Attack: " + parseInt(pokemon[i]["base_stats"]["atk"]);
			GameObject.FindWithTag("def6").GetComponent(Text).text = "Defense: " + parseInt(pokemon[i]["base_stats"]["def"]);
			GameObject.FindWithTag("Health6").GetComponent(Text).text = "Health: " + parseInt(pokemon[i]["base_stats"]["hp"]);
			GameObject.FindWithTag("type6").GetComponent(Text).text = "Type: " + pokemon[i]["type"][0];
		}
	/*
		for(var j=0; j<4; j++)
		{
			var randCount = Random.Range(0,pokemon[i]['moves'].Count-1);
			var moves = new Array();
			
			for(key in pokemon[i]['moves'].Keys)
				moves.Push(key);
			
			pokemon[i]['game_moves'][j] = pokemon[i]['moves'][randCount];
			
			pokemon[i]['game_moves'][j]['name'] = moves[randCount];
		}
		*/
	}
	
}
function Update () {

}
