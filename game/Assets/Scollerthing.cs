using UnityEngine;
using System.Collections;

public class Scollerthing : MonoBehaviour {
	public float scrollval = 0;
	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		if (scrollval > .5) {
			transform.Translate (0, scrollval * Time.deltaTime, 0);
		}
		else if (scrollval < .5) {
			transform.Translate (0, -scrollval * Time.deltaTime, 0);
		}

	}
	public void scrollSpeed(float newscroll)
	{
		scrollval = newscroll;
	}
}
