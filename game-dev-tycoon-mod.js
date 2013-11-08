
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
			header: "Thunderstorm Destruction".localize(),
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
			//nothing happens at first, but in a few weeks, you work on your game design
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


var eventId = "F413452E-2109-4968-A990-A7E99D5DEED6";//any string, but needs to be globally unique

var myRandomEvent = {
	id: eventId,
	isRandom: true, //if you want to test this event, you can set this to false and it will trigger during dev. of the first game.
	maxTriggers: 1,
	trigger: function (company) {
		//only in second office and only while a game is in development.
		//most events that fire during game-dev work better if they don't fire right at the start or right at the end, that's why we use isGameProgressBetween
		return company.currentLevel == 2 && company.isGameProgressBetween(0.2, 0.9);
	},
	//because we dynamically create the notification every time the event triggers, we use getNotification
	getNotification: function (company) {
		var game = company.currentGame;

		var msg = "Dr. Squid and Centipede-Man smash through your window, and smash each other through all of your desks. They battle each other and hit each other into the wall. {n} They accidentally destroy every game console and television that your testers were using to test your game. Your testers get mad and complain to you.\nHow do you want to react to the situation?\n\nYou could call the police, ignore the situation and continue working on your game, or let them destroy your office."
			.localize().format(game.title);
		//notice how we break up the story in two screens by using {n}. This creates a better flow than having one longer block of text.
		//Also, since this is a story with multiple options and the buttons can only hold a small amount of text, we explain the options beforehand.

		//the situation, lowered a bit of hype on your game.
		//since the event isn't delayed we can do this directly on the company, otherwise we could call adjustHype() on the notification object to schedule the effect with the notification.
		company.adjustHype(5 - 5 * company.getRandom());//lower hype between 5 and 0.

		return new Notification({
			sourceId: eventId,//this is important, otherwise nothing will happen when the player selects an option.
			header: "Superhero Disaster".localize(),
			text: msg,
			options: ["Call the police", "Ignore Situation", "Destroy Office"]//maximum of three choices
		});
	},
	complete: function (decision) {
		//decision is a number and will correspond to the index of the option that was chosen.
		//0=call police, 1=ignore situation, 2=destroy office
		//it's best if every decision has a different outcome

		var company = GameManager.company;//we fetch the company object for use later.

		if (decision === 0) {//call police
			//we create a new, simple notification to tell the outcome. no sourceId or options are necessary this time.
			var n = new Notification({
				header: "Superhero Disaster".localize(),//keep the header consistent with the prior part of the story
				text: "You called the police and Dr. Squid and Centipede Man got arrested and sent to jail."
			});
			n.adjustHype(10 + 15 * company.getRandom());//increase hype between 10 and 25.
			
			company.activeNotifications.addRange(n.split()); //since this notification should be shown immediately (not one second later) we insert it into activeNotifications. calling .split() is just good practice in case we use {n} inside the notification.
			return;
		}
		if (decision === 1) {//ignore destruction
			//nothing happens at first, but in a few weeks, your office is a total disaster
			var n = new Notification({
				header: "Superhero Disaster".localize(),
				text: "You have ignored the situation with Dr. Squid and Centipede Man. You tried to work on your game, but there was too much noise in the background.\n Centipede Man and Dr. Squid destroyed your office. (-900 cr.) - This might have been a terrible mistake",
				weeksUntilFired: 1 + 2 * company.getRandom()
			});
			n.adjustCash(-900, "restore the office");
			company.notifications.push(n);//this notification isn't shown immediately so we add it to the normal company.notifications array.
			return;
		}
		if (decision === 2) {//redo design
			var n = new Notification({
				header: "Superhero Disaster".localize(),//keep the header consistent with the prior part of the story
				text: "Centipede Man and Dr. Squid continued battling each other, and they destroyed the office. Your game gets badly delayed, when everyone witnesses the destruction."
			});
			n.adjustHype(5 - 20 * company.getRandom());//decrease hype between 5 and -15
			company.activeNotifications.addRange(n.split()); //since this notification should be shown immediately (not one second later) we insert it into activeNotifications. calling .split() ist just good practice in case we use {n} inside the notification.
			return;
		}
	}
};

GDT.addEvent(myRandomEvent);

var icon = 'Mods/Game-Dev-Tycoon-Mod/images/SuperBox.png';
GDT.addPlatform({
	id : 'SuperBox',
	name : 'SuperBox',
	company : 'Supersonic Games',
	startAmount : 0.15,
	unitsSold : 0.358,
	licencePrize : 5000,
	published : '1/3/4',
	platformRetireDate : '5/6/4',
	developmentCosts : 10000,
	genreWeightings : [0.9, 1, 1, 0.9, 1, 0.7],
	audienceWeightings : [0.9, 1, 0.8],
	techLevel : 1,
	iconUri : icon,
	events : [{
			id : '10537DA1-58F1-4F23-8854-F1E2621933BF',
			date : '1/2/1',
			getNotification : function (company) {
				return new Notification({
					header : "Industry News".localize(),
					text : "Coming out of nowhere a company called Supersonic Games has announced that they will publish a new game console called the SuperBox {0}.".localize().format(General.getETADescription('1/2/1', '1/3/4')),
					image : icon
				});
			}
		}
	]
});

GDT.addTopics([
	{ 
		id: "Trivia", 
		name: "Trivia".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 0.9, 1.0], 
		audienceWeightings: [1.0, 1.0, 0.6] 

	}
]);