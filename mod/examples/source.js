var Examples = {};
(function () {
	Examples.addTopic = function () {
GDT.addTopics([
	{ 
		id: "Trivia", 
		name: "Trivia".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 0.9, 1.0], 
		audienceWeightings: [1.0, 1.0, 0.6] 

	} , {
		id: "Platformer", 
		name: "Platformer".localize("game topic"), 
		genreWeightings: [1.0, 1.0, 0.6, 0.6, 0.8, 1.0], 
		audienceWeightings: [1.0, 1.0, 0.6]
	} , {
		id: "Chess", 
		name: "Chess".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 1.0, 1.0], 
		audienceWeightings: [1.0, 1.0, 0.6]
	} , {
		id: "Alternate Reality", 
		name: "Alternate Reality".localize("game topic"), 
		genreWeightings: [0.7, 0.7, 0.7, 1.0, 1.0, 1.0], 
		audienceWeightings: [1.0, 1.0, 0.8]
	} , {
		id: "Japanese", 
		name: "Japanese".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 1.0, 0.9, 0.9, 0.8], 
		audienceWeightings: [1.0, 1.0, 0.6]
	} , {
		id: "Drinking", 
		name: "Drinking".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 1.0, 1.0], 
		audienceWeightings: [0.6, 0.6, 1.0]
	} , {
		id: "Math", 
		name: "Math".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 1.0, 1.0], 
		audienceWeightings: [1.0, 1.0, 0.6]
	} , {
		id: "Party", 
		name: "Party".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 1.0, 1.0], 
		audienceWeightings: [1.0, 1.0, 0.6]
	} , {
		id: "Ball and Paddle", 
		name: "Ball and Paddle".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 8.0, 1.0], 
		audienceWeightings: [1.0, 1.0, 0.6]
	} , {
		id: "Beat 'em up", 
		name: "Beat 'em up".localize("game topic"), 
		genreWeightings: [0.7, 0.8, 0.7, 0.6, 1.0, 0.6], 
		audienceWeightings: [1.0, 1.0, 1.0]
	} , {
		id: "Hack and Slash", 
		name: "Hack and Slash".localize("game topic"), 
		genreWeightings: [0.9, 0.9, 0.8, 0.6, 1.0, 0.6], 
		audienceWeightings: [1.0, 1.0, 1.0]
	} , {
		id: "Fighting", 
		name: "Fighting".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 1.0, 1.0], 
		audienceWeightings: [1.0, 1.0, 0.6]
	} , {
		id: "Pinball", 
		name: "Pinball".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 1.0, 1.0], 
		audienceWeightings: [1.0, 1.0, 0.6]
	} , {
		id: "Shooters", 
		name: "Shooters".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.6, 0.6, 1.0]
	} , {
		id: "First Person Shooter", 
		name: "First Person Shooter".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.6, 1.0, 1.0]
	} , {
		id: "MMO FPS", 
		name: "MMO FPS".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.6, 0.6, 1.0]
	} , {
		id: "Shoot 'em Up", 
		name: "Shoot 'em Up".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.6, 0.6, 1.0]
	} , {
		id: " Tactical Shooter", 
		name: "Tactical Shooter".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.6, 0.6, 1.0]
	} , {
		id: "Rail Shooter", 
		name: "Rail Shooter".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.6, 0.6, 1.0]
	} , {
		id: "Third Person Shooter", 
		name: "Third Person Shooter".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.6, 1.0, 1.0]
	} , {
		id: "Stealth", 
		name: "Stealth".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.8, 1.0, 1.0]
	} , {
		id: "Survival Horror", 
		name: "Survival Horror".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.6, 1.0, 1.0]
	} , {
		id: "Visual Novel", 
		name: "Visual Novel".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.8, 1.0, 0.8], 
		audienceWeightings: [0.9, 1.0, 1.0]
	} , {
		id: "Western RPG", 
		name: "Western RPG".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.8, 1.0, 1.0]
	} , {
		id: "Sandbox RPG", 
		name: "Sandbox RPG".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.8, 1.0, 1.0]
	} , {
		id: "Management", 
		name: "Management".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.8, 1.0, 0.6]
	} , {
		id: "Tycoon", 
		name: "Tycoon".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.8, 1.0, 0.6]
	} , {
		id: "Vehicle", 
		name: "Vehicle".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.9, 1.0, 0.6]
	} , {
		id: "4X", 
		name: "4X".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.8, 1.0, 0.6]
	} , {
		id: "Turn-Based", 
		name: "Turn-Based".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.8, 1.0, 0.8]
	} , {
		id: "Real-Time Strategy", 
		name: "Real-Time Strategy".localize("game topic"), 
		genreWeightings: [0.9, 0.9, 0.9, 0.8, 1.0, 0.8], 
		audienceWeightings: [0.9, 1.0, 0.7]
	} , {
		id: "Tower Defense", 
		name: "Tower Defense".localize("game topic"), 
		genreWeightings: [0.8, 0.8, 0.9, 0.7, 1.0, 0.6], 
		audienceWeightings: [0.8, 1.0, 0.7]
	} , {
		id: "Football", 
		name: "Football".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 1.0, 1.0], 
		audienceWeightings: [0.8, 1.0, 0.6]
	} , {
		id: "Basketball", 
		name: "Basketball".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 1.0, 1.0], 
		audienceWeightings: [0.8, 1.0, 0.6]
	} , {
		id: "Dodge-ball", 
		name: "Dodge-ball".localize("game topic"), 
		genreWeightings: [0.6, 0.6, 0.6, 1.0, 1.0, 1.0], 
		audienceWeightings: [0.8, 1.0, 0.6]
	} , {
			}
		}
	}
]);