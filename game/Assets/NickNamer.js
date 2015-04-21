
var nickName : String;
var inputField : UnityEngine.UI.InputField;
var nameDisplay : UnityEngine.UI.Text;
function NameInput()
{
nickName = inputField.text;
nameDisplay.text = nickName;
inputField.enabled = false;
}