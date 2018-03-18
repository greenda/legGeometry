/**
 * @author jdev
 */
function GridGeometry() {
	var leftBound;
	var rightBound;
	var topBound;
	var bottomBound;
	var tailHeight
    var dayWidth;
	var height;
	var width;
	
	var dayScale;
	var tailScale;
	
	var rootComponent;
	var groupComponent;
	var startPoint;
	
	var GRID_GROUP_ID = "grid_group_id";
	
	this.init = function(newRootComponent, newStartPoint, 
	                     newTailHeight, newDayWidth, 
						 newHeight, newWidth,
						 newDayScale, newTailScale, 
						 newLeftBound) {
		groupComponent = newRootComponent.append("g")
		                              .attr("id", GRID_GROUP_ID);
		startPoint = newStartPoint;
		tailHeight = newTailHeight;
		dayWidth = newDayWidth;
		height = newHeight;
		width = newWidth;
		dayScale = newDayScale;
		tailScale = newTailScale; 
		leftBound = newLeftBound;
	};
	
	var tailLines = [];
	var dayLines = [];
	
	this.create = function(tails, dayArray) {
		if (tails) {
			var localStartPoint = {"x": startPoint.x, "y": startPoint.y};
			
			for (var tail in tails) {
				tailLines.push(addLine(groupComponent, "tail_line_id_" + tail.id, 
				              localStartPoint.x, localStartPoint.y + tailHeight*tailScale,
							  localStartPoint.x + width, localStartPoint.y + tailHeight*tailScale, "gridLine"));
				localStartPoint = getOffsetedPoint(localStartPoint, 0, tailHeight*tailScale);		
			}
			
			localStartPoint = {"x": startPoint.x, "y": startPoint.y};
			for (var day in dayArray) {
				dayLines.push(addLine(groupComponent, "day_line_id_" + day, 
				              localStartPoint.x, localStartPoint.y,
						      localStartPoint.x, localStartPoint.y + height, "gridLine"));
				localStartPoint = getOffsetedPoint(localStartPoint, dayWidth*dayScale, 0);
			}
		}
	};
	
	this.zoom = function(newDayScale, newTailScale) {
		dayScale = newDayScale;
		tailScale = newTailScale;
		redrawDayLine();
	};
	
	this.zoomToBounds = function(leftBound, rightBound) {
		var newDayScale = width * dayScale / Math.abs(leftBound - rightBound);
		this.zoom(newDayScale, tailScale); // Разобраться, почему this
	};
	
	var redrawDayLine = function() {
		var localStartPoint = cloneOldPoint(startPoint);
		for (var i = 0; i < dayLines.length; i++) {
			redrawLine(dayLines[i], localStartPoint.x, localStartPoint.y, 
			           localStartPoint.x, localStartPoint.y + height, "gridLine");
			localStartPoint = getOffsetedPoint(localStartPoint, dayWidth*dayScale, 0);		
		}
		
		localStartPoint = cloneOldPoint(startPoint);
		for (var i = 0; i < tailLines.length; i++) {
			redrawLine(tailLines[i], localStartPoint.x, localStartPoint.y, 
			           localStartPoint.x + width, localStartPoint.y, "gridLine");
			localStartPoint = getOffsetedPoint(localStartPoint, 0, tailHeight*tailScale);		   
		}
	};
	
	var redraw = function(tails) {
		d3.select("#" + GRID_GROUP_ID)
	};
}
