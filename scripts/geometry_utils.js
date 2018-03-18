/**
 * @author jdev
 */
function getBasePathDString(startPoint, length) {
	return "M" + startPoint.x + " " + startPoint.y + " V " + (startPoint.y + 10) + " H " + length + " V " + startPoint.y;
}

function getWarningPathString(startPoint, length) {
	return "M" + startPoint.x + " " + startPoint.y + " H " + length; 
}

function getDayArray(dateFrom, dateTo) {
	startDate = new Date(dateFrom.getYear(), dateFrom.getMonth(), dateFrom.getDay());
}

function addLine(rootComponent, id, x1, y1, x2, y2, styleClass) {
	return rootComponent.append("line")
	                    .attr("id", id)
						.attr("x1", x1)
						.attr("y1", y1)
						.attr("x2", x2)
						.attr("y2", y2)
						.attr("class", styleClass);
}

function redrawLine(line, x1, y1, x2, y2) {
	return line.attr("x1", x1)
			   .attr("y1", y1)
			   .attr("x2", x2)
			   .attr("y2", y2);
}

function getOffsetedPoint(point, xOffset, yOffset) {
	return {"x": point.x + xOffset, "y": point.y + yOffset};
}

function cloneOldPoint(point) {
	return {"x": point.x, "y": point.y};
}

