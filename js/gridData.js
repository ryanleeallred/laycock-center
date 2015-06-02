var app = angular.module('gridSort');

app.service('gridData', function() {
	this.getData= function(){
		return projects;
	}
})

var projects = [
		{
			title: "The Laycock Center in the News",
			img: 'img/laycock_thumb.jpg',
			comms: true,
			animation: true,
			visualArts: true,
			drama: true,
			tma: true,
			showMe: true
		},
		{
			title: "Newsies Medly - Vocal Point",
			img: 'img/newsies_thumb.jpg',
			comms: false,
			animation: true,
			visualArts: false,
			drama: true,
			tma: true,
			showMe: true
		},
		{
			title: "Anti-Drunk Driving PSAs",
			img: 'img/dui_thumb.jpg',
			comms: true,
			animation: true,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true
		},
		{
			title: "Library of Congress",
			img: 'img/loc_thumb.png',
			comms: true,
			animation: true,
			visualArts: true,
			drama: false,
			tma: true,
			showMe: true
		},
		{
			title: "Western Wilds",
			img: 'img/yellowstone_thumb.jpg',
			comms: false,
			animation: true,
			visualArts: true,
			drama: true,
			tma: false,
			showMe: true
		},
		{
			title: "Hyundai Lens of Loyalty",
			img: 'img/hyundai_thumb.png',
			comms: true,
			animation: true,
			visualArts: true,
			drama: false,
			tma: true,
			showMe: true
		},
		{
			title: "Killers Music Video",
			img: 'img/killers_thumb.jpg',
			comms: false,
			animation: false,
			visualArts: true,
			drama: false,
			tma: true,
			showMe: true
		},
		{
			title: "Selfie Police",
			img: 'img/selfie_thumb.png',
			comms: true,
			animation: false,
			visualArts: true,
			drama: false,
			tma: false,
			showMe: true
		},
		{
			title: "BYU Virtual Campus Tour",
			img: 'img/pirates_thumb.png',
			comms: true,
			animation: true,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true
		},
		{
			title: "Vittana",
			img: 'img/vittana_thumb.png',
			comms: true,
			animation: true,
			visualArts: true,
			drama: false,
			tma: true,
			showMe: true
		},
		{
			title: "Sacred Gifts",
			img: 'img/sacred-gifts_thumb.png',
			comms: true,
			animation: true,
			visualArts: true,
			drama: false,
			tma: true,
			showMe: true
		},
		{
			title: "GoPro Orchestra",
			img: 'img/flats_thumb.png',
			comms: false,
			animation: true,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true
		},
		{
			title: "Driven",
			img: 'img/driven_thumb.png',
			comms: true,
			animation: true,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true
		},
		{
			title: "We Seek",
			img: 'img/weseek_thumb.png',
			comms: true,
			animation: false,
			visualArts: false,
			drama: false,
			tma: false,
			showMe: true
		},
		{
			title: "Thought of You",
			img: 'img/thoughtofyou_thumb.png',
			comms: false,
			animation: false,
			visualArts: false,
			drama: true,
			tma: true,
			showMe: true
		},
		{
			title: "DancEnsemble",
			img: 'img/crista_thumb.jpg',
			comms: false,
			animation: false,
			visualArts: true,
			drama: true,
			tma: true,
			showMe: true
		},
		{
			title: "Water Balloons",
			img: 'img/balloons_thumb.png',
			comms: true,
			animation: false,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true
		},
		{
			title: "BYU Women's Chorus Spring Concert",
			img: 'img/womenschorus_thumb.png',
			comms: true,
			animation: true,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true
		}
		];