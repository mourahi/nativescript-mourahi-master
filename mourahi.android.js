var app = require("application");

var mourahi = {
	quoi : function(){
		
			this.vibrator_service = app.android.context.getSystemService(android.content.Context.BATTERY_SERVICE);
			return this.vabrator_service.isCharging();
		}

	}
};

module.exports = mourahi;
