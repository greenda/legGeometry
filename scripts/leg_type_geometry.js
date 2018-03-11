/**
 * @author jdev
 */
function LegGeometryType(templateUrl, bindVariableFunction) {
	var template = "template";
	
	this.bindVariables = bindVariableFunction;
	
	var create = function(templateUrl) {
		d3.xml(templateUrl, function(error, xml) {
			if (error) throw error;
		    template = xml.childNodes[0];	
		});
	};	
	
	this.getTemplate = function() {
		return template;
	};
	
	create(templateUrl);
}
