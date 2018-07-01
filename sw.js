//browser sets up a new SW for the first time
self.addEventListener('install', function(event){
	//when the Promise resolves, the browser knows the install is complete.

	//if the Promise rejects, then the Promise has failed and this SW should be discarded
	
	const assets = [
		'./',
		'/index.html',
		'/restaurant.html?id=1',
		'/restaurant.html?id=2',
		'/restaurant.html?id=3',
		'/restaurant.html?id=4',
		'/restaurant.html?id=5'
		// './js/main.js',
		// './js/dbhelper.js',
		// './js/restaurant-info.js',
		// './css/responsiveness.css',
		// './css/styles.css',
		// './img/2.jpg',
		// './img/4.jpg'
		];
	
	event.waitUntil(
	//open the 'restaurants-cache' and add the contents of the cache to it
		caches.open('restaurants-cache').then(function(cache){
			return cache.addAll(assets);
			// return cache.addAll([
		// './'
		// // '/index.html',
		// // '/restaurant.html?id=1',
		// // '/restaurant.html?id=2',
		// // '/restaurant.html?id=3',
		// // '/restaurant.html?id=4',
		// // '/restaurant.html?id=5',
		// // './js/main.js',
		// // './js/dbhelper.js',
		// // './js/restaurant-info.js',
		// // './css/responsiveness.css',
		// // './css/styles.css',
		// // './img/2.jpg',
		// // './img/4.jpg'
		// ]);
		})
	);
	
	
});

//fires when this SW becomes active
//perfect time to delete old caches
self.addEventListener('activate', function(event){
	
});


self.addEventListener('fetch', function(event){
	//respond with an entry from the cache if there is one, otherwise, fetch from the network
	event.respondWith(
		caches.match(event.request).then(function(response){
			//return the match in the cache
			if(response) return response;
			//return a fetch to the network for the original request
			return fetch(event.request);
		})
	);
});