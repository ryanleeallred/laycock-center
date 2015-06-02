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
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Newsies Medly - Vocal Point",
			img: 'img/newsies_thumb.jpg',
			comms: false,
			animation: true,
			visualArts: false,
			drama: true,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Anti-Drunk Driving PSAs",
			img: 'img/dui_thumb.jpg',
			comms: true,
			animation: true,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Library of Congress",
			img: 'img/loc_thumb.png',
			comms: true,
			animation: true,
			visualArts: true,
			drama: false,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Western Wilds",
			img: 'img/yellowstone_thumb.jpg',
			comms: false,
			animation: true,
			visualArts: true,
			drama: true,
			tma: false,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Hyundai Lens of Loyalty",
			img: 'img/hyundai_thumb.png',
			comms: true,
			animation: true,
			visualArts: true,
			drama: false,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Killers Music Video",
			img: 'img/killers_thumb.jpg',
			comms: false,
			animation: false,
			visualArts: true,
			drama: false,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Selfie Police",
			img: 'img/selfie_thumb.png',
			comms: true,
			animation: false,
			visualArts: true,
			drama: false,
			tma: false,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "BYU Virtual Campus Tour",
			img: 'img/pirates_thumb.png',
			comms: true,
			animation: true,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Vittana",
			img: 'img/vittana_thumb.png',
			comms: true,
			animation: true,
			visualArts: true,
			drama: false,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Sacred Gifts",
			img: 'img/sacred-gifts_thumb.png',
			comms: true,
			animation: true,
			visualArts: true,
			drama: false,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "GoPro Orchestra",
			img: 'img/flats_thumb.png',
			comms: false,
			animation: true,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Driven",
			img: 'img/driven_thumb.png',
			comms: true,
			animation: true,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "We Seek",
			img: 'img/weseek_thumb.png',
			comms: true,
			animation: false,
			visualArts: false,
			drama: false,
			tma: false,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Thought of You",
			img: 'img/thoughtofyou_thumb.png',
			comms: false,
			animation: false,
			visualArts: false,
			drama: true,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "DancEnsemble",
			img: 'img/crista_thumb.jpg',
			comms: false,
			animation: false,
			visualArts: true,
			drama: true,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "Water Balloons",
			img: 'img/balloons_thumb.png',
			comms: true,
			animation: false,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true,
			pageLink: '#'
		},
		{
			title: "BYU Women's Chorus Spring Concert",
			img: 'img/womenschorus_thumb.png',
			comms: true,
			animation: true,
			visualArts: false,
			drama: false,
			tma: true,
			showMe: true,
			pageLink: '#'
		}
		];