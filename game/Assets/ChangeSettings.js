#pragma strict
var aa: String;
var inputField : UnityEngine.UI.InputField;
var nameDisplay : UnityEngine.UI.Text;
function Start () {

}

function Update () {

}
function AA()
{
aa = inputField.text;
nameDisplay.text = "Anti Aliasing: " +aa;
inputField.enabled = false;
QualitySettings.antiAliasing = parseInt(aa);
}
function CameraMB()
{
//var blur :MotionBlur = Camera.main.GetComponent(MotionBlur);
//blur.blurAmount = Random.Range(0, Random.Range(0, Random.Range(10)));
}
function DoF(amount : int)
{
	if (amount > 0)
	{
	  Camera.main.GetComponent(DepthOfField).enabled = true;
	  Camera.main.GetComponent(DepthOfField).focalSize = amount;
	}
	else
	  Camera.main.GetComponent(DepthOfField).enabled = false;
}
function EdgeDetect()
{

}
function ContrastEnhance()
{

}