
var eventId = "F413351E-2108-4967-A989-A7E98D4DEED5";//any string, but needs to be globally unique

var myRandomEvent = {
	id: eventId,
	isRandom: true, //if you want to test this event, you can set this to false and it will trigger during dev. of the first game.
	maxTriggers: 1,
	trigger: function (company) {
		//only in first office and only while a game is in development.
		//most events that fire during game-dev work better if they don't fire right at the start or right at the end, that's why we use isGameProgressBetween
		return company.currentLevel == 1 && company.isGameProgressBetween(0.2, 0.9);
	},
	//because we dynamically create the notification every time the event triggers, we use getNotification
	getNotification: function (company) {
		var game = company.currentGame;

		var msg = "A huge thunderstorm has hit the city, while you were working on your game in the garage {0}. The thunderstorm smashed a huge hole into the garage's roof. {n} The rain from the storm has ruined your work on the game. You witness the destruction, and you get super angry!\nHow do you want to react to the destruction?\n\nYou could start the game over from scratch, ignore the destruction and work around it, or redo the design."
			.localize().format(game.title);
		//notice how we break up the story in two screens by using {n}. This creates a better flow than having one longer block of text.
		//Also, since this is a story with multiple options and the buttons can only hold a small amount of text, we explain the options beforehand.

		//the thunderstorm, lowered a bit of hype on your game.
		//since the event isn't delayed we can do this directly on the company, otherwise we could call adjustHype() on the notification object to schedule the effect with the notification.
		company.adjustHype(-5 - 15 * company.getRandom());//lower hype between -5 and -20.

		return new Notification({
			sourceId: eventId,//this is important, otherwise nothing will happen when the player selects an option.
			header: "Thunderstorm Destruction".localize(),//granted, this is a silly header.
			text: msg,
			options: ["Start game over from scratch", "Ignore destruction", "Redo design"]//maximum of three choices
		});
	},
	complete: function (decision) {
		//decision is a number and will correspond to the index of the option that was chosen.
		//0=start game over from scratch, 1=ignore destruction, 2=redo design
		//it's best if every decision has a different outcome

		var company = GameManager.company;//we fetch the company object for use later.

		if (decision === 0) {//start game over from scratch
			//we create a new, simple notification to tell the outcome. no sourceId or options are necessary this time.
			var n = new Notification({
				header: "Thunderstorm Destruction".localize(),//keep the header consistent with the prior part of the story
				text: "You start the game over from scratch, and you redo every design for the game."
			});
			n.adjustHype(-5 - 15 * company.getRandom());//increase hype between -5 and -20.
			
			company.activeNotifications.addRange(n.split()); //since this notification should be shown immediately (not one second later) we insert it into activeNotifications. calling .split() is just good practice in case we use {n} inside the notification.
			return;
		}
		if (decision === 1) {//ignore destruction
			//nothing happens at first, but in a few weeks Billy again breaks in...
			var n = new Notification({
				header: "Thunderstorm Destruction".localize(),
				text: "You have ignored the destruction of the thunderstorm. You try to work around the wet parts of the game design documents.\nUnfortunately you have to recreate the documents, because you got so frustrated. (-500 cr.) - This might have been a terrible mistake",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(-500, "restoring documents");
			company.notifications.push(n);//this notification isn't shown immediately so we add it to the normal company.notifications array.
			return;
		}
		if (decision === 2) {//redo design
			var n = new Notification({
				header: "Thunderstorm Destruction".localize(),//keep the header consistent with the prior part of the story
				text: "You redo the design for your game. You work on the game design super hard, so you can still release your game on time."
			});
			n.adjustHype(15 + 25 * company.getRandom());//increase hype between 15 and 40
			company.activeNotifications.addRange(n.split()); //since this notification should be shown immediately (not one second later) we insert it into activeNotifications. calling .split() ist just good practice in case we use {n} inside the notification.
			return;
		}
	}
};

GDT.addEvent(myRandomEvent);