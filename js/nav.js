function nav()
{
	// Find out if a page is in a subfolder and split into arr
	var url = window.location;
	var stringedURL = url.toString();
	stringedURL = stringedURL.split('/');

	// Sets the URl for each day. Change this if a day updates
	var mondayURL   = 'factory-monday.html';
	var thursdayURL = 'mix-thursday.html';
	var fridayURL   = 'pride-friday.html';
	var saturdayURL = 'frequency-saturday.html';

	// Sets the URL for other pages
	var bottleServiceURL = 'bottle-service-and-reservations.html'
	var privEventURL = 'private-event-night-club-rental.html'


	if (stringedURL.length <= 5) {
		mondayURL   = mondayURL;
		thursdayURL = thursdayURL;
		fridayURL   = fridayURL;
		saturdayURL = saturdayURL;
		bottleServiceURL = bottleServiceURL;
		privEventURL = privEventURL;
	}

	else if (stringedURL.length === 6) {
		mondayURL   = '../' + mondayURL;
		thursdayURL = '../' +  thursdayURL;
		fridayURL   = '../' +  fridayURL;
		saturdayURL = '../' +  saturdayURL;
		bottleServiceURL = '../' + bottleServiceURL
		privEventURL = '../' + privEventURL;
	}

	else if (stringedURL.length === 7) {
		mondayURL   = '../../' + mondayURL;
		thursdayURL = '../../' + thursdayURL;
		fridayURL   = '../../' + fridayURL;
		saturdayURL = '../../' + saturdayURL;
		privEventURL = '../../' + privEventURL;
	}


	/* SET NUMBER OF COLUMNS (Must change if adding/removing a night) */
	document.getElementById('globalNavLargeLis').className = 'small-block-grid-2 large-block-grid-4';

	/* Weekly Event Links */
	/* MONDAY */
	document.getElementById('desktopMondayLink').href = mondayURL;
	document.getElementById('mobileMondayLink').href=  mondayURL;
	desktopMondayLink.insertAdjacentHTML('afterbegin', '<strong>FACTORY</strong><br>MONDAY');
	mobileMondayLink.insertAdjacentHTML('afterbegin', 'FACTORY MONDAY');
	/* THURSDAY*/
	document.getElementById('desktopThursdayLink').href= thursdayURL;
	document.getElementById('mobileThursdayLink').href= thursdayURL;
	desktopThursdayLink.insertAdjacentHTML('afterbegin', '<strong>MIX</strong><br>THURSDAY');
	mobileThursdayLink.insertAdjacentHTML('afterbegin', 'MIX THURSDAY');
	/* FRIDAY */
	document.getElementById('desktopFridayLink').href= fridayURL;
	document.getElementById('mobileFridayLink').href= fridayURL;
	desktopFridayLink.insertAdjacentHTML('afterbegin', '<strong>PRIDE</strong><br>FRIDAY');
	mobileFridayLink.insertAdjacentHTML('afterbegin', 'PRIDE FRIDAY');
	/* SATURDAY */
	document.getElementById('desktopSaturdayLink').href= saturdayURL;
	document.getElementById('mobileSaturdayLink').href= saturdayURL;
	desktopSaturdayLink.insertAdjacentHTML('afterbegin', '<strong>FREQUENCY</strong><br>SATURDAY');
	mobileSaturdayLink.insertAdjacentHTML('afterbegin', 'FREQUENCY SATURDAY');

	// Other Pages
	// Bottle Service
	document.getElementById('desktopBottleServiceURL').href = bottleServiceURL;
	document.getElementById('mobileBottleServiceURL').href=  bottleServiceURL;
	// Private Events
	document.getElementById('desktopPrivEventsURL').href = privEventURL;
	document.getElementById('mobilePrivEventsURL').href=  privEventURL;

}