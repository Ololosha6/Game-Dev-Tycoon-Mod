(function () {

	var checkgenericContracts = function (genericContracts) {
		if (!(Checks.checkPropertiesPresent(genericContracts, ['name', 'description','requiredD','requiredT','spawnedD','spawnedT','payment', 'penalty','weeksToFinish', 'rF', 'isGeneric', 'size'])
			&& Checks.checkUniqueness(genericContracts, 'name', genericContracts.k))
			&& genericContracts.spawnedD>=0)
			return false;

		return true;
	};

	GDT.addgenericContracts = function (genericContracts) {
		if (!checkgenericContracts(genericContracts))
			return;

		genericContracts.k.push(genericContracts);
	};
})();