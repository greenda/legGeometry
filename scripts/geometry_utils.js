/**
 * @author jdev
 */
function getBasePathDString(startPoint, length) {
	return "M" + startPoint.x + " " + startPoint.y + " V " + (startPoint.y + 10) + " H " + length + " V " + startPoint.y;
}

function getWarningPathString(startPoint, length) {
	return "M" + startPoint.x + " " + startPoint.y + " H " + length; 
}
