/**
 * @author jdev
 */
function LegTypeGeometryDictionary() {
	this.standartLeg = 
	    new LegGeometryType("http://127.0.0.1:8000/LegGeometry/templates/leg_template2.svg", 
		    function(legJson, rootComponent) {
				var template = this.getTemplate();
				var newElement = rootComponent.append("g").html(template.innerHTML);
				newElement.select("#left_apt_label_")
				        .attr("id", "left_apt_label_" + legJson.id)
						.text(legJson.iata1);
				newElement.select("#leg_base_path_")
				         .attr("id", "leg_base_path_" + legJson.id)
						 .attr("d", getBasePathDString({x: 50, y: 70}, legJson.legLength));
						 		
				newElement.select("#right_apt_label_")
				        .attr("id", "right_apt_label_" + legJson.id)
						.attr("x", function() {
							return (this.attributes.x.nodeValue * 1) - 160 + legJson.legLength;
						})
						.text(legJson.iata2);
				newElement.select("#warning_line_")
				        .attr("id", "warning_line_" + legJson.id)
						.attr("d", getWarningPathString({x: 50, y: 90}, legJson.legLength))		
								
			});
}
