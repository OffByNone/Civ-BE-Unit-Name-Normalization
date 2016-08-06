/*
	This will normalize the unit names in civ beyond earth
	How to use:
	1. Open CivBEGameTextInfos_UnitUpgrades.xml in Firefox
	2. Press [SHIFT] + [F4]
	3. Open File...
	4. Select this file
	5. Click Run
	6. Save xml file

*/

var units = document.querySelectorAll("Row Text");

for (var unit of units) {
	var baseUnitName = unit.parentNode.attributes.getNamedItem("Tag").value
							.replace("TXT_KEY_UNIT_", "")
							.replace("_", " ")
							.toLowerCase();

	var hasLevel = baseUnitName.match(/[0-9]+/g);
	var unitLevelText = "";
	var affinity = "";
	var unitName = baseUnitName;

	
	if (hasLevel) {
		while (isNaN(baseUnitName.slice(-1))) { //remove any extra characters after the level
			affinity += baseUnitName.slice(-1).toUpperCase();
			baseUnitName = baseUnitName.slice(0, -1);
		}

		var unitLevel = parseInt(baseUnitName.slice(-2)); //grab the level
		unitName = baseUnitName.slice(0, -2); //remove the level

		for (var i = 1; i <= unitLevel; i++)
			unitLevelText += "I";
	}

	unit.innerHTML = (unitName + " " + unitLevelText + " " + affinity).trim();
}