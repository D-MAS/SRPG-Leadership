(function () {
	var alias1 = SupportCalculator._checkSkillStatus;
	SupportCalculator._checkSkillStatus = function(unit, targetUnit, isSelf, totalStatus) {
		alias1.call(this, unit, targetUnit, isSelf, totalStatus);
		var i, skill;
		var arr = SkillControl.getDirectSkillArray(unit, SkillType.CUSTOM, 'Leadership');
		var count = arr.length;
		
		for (i = 0; i < count; i++) {
			skill = arr[i].skill;
			
			if (this._isSupportable(unit, targetUnit, skill)) {
				// this._addStatus(totalStatus, skill.getSupportStatus());
				var n = unit.getLv() / 2;
				totalStatus.hitTotal += n;
				totalStatus.avoidTotal += n;
				totalStatus.criticalTotal += n;
				totalStatus.criticalAvoidTotal += n;
			}
		}
		// return skillStatus;
	}
})()