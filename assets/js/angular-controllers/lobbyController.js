app.controller("lobbyController", ['$scope', '$http', function ($scope, $http) {
	var self = this;
	self.displayAce = false;
	self.aceClicked = false;
	self.aceRules = function() {
		self.displayAce = !self.displayAce;
	};
	self.startAce = function() {
		self.aceClicked = !self.aceClicked;
	}

	// Upon clicking ready button
	self.ready = function () {
		console.log("\nready");
		io.socket.put("/game/ready", function (res, jwres) {
			console.log(jwres);
		});
	};



}]);