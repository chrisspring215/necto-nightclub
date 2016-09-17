function nav() {

	// Find out if a page is in a subfolder and split into arr
	var url 		= window.location;
	var stringedURL = url.toString();
	stringedURL 	= stringedURL.split('/');

	// Sets the URl for each day. Change this if a day updates
	var mondayURL   = 'factory-monday.html';
	var thursdayURL = 'mix-thursday.html';
	var fridayURL   = 'pride-friday.html';
	var saturdayURL = 'frequency-saturday.html';

	// Sets the URL for other pages
	var bottleServiceURL = 'bottle-service-and-reservations.html';
	var privEventURL 	 = 'private-event-night-club-rental.html';
	var homeLogoURL 	 = 'index.html';
	var contactURL       = 'contact.html';
	var directionsURL	 = 'directions.html';
	var calendarURL		 = 'calendar.html';

	// Setsup a varible for the Logos in the headers
	var desktopLogo    = document.getElementsByClassName('header-logo');
	var mobileLogo     = document.getElementById('mobileLogo');

	if (stringedURL.length <= 4) {	
		mondayURL        = mondayURL;
		thursdayURL      = thursdayURL;
		fridayURL        = fridayURL;
		saturdayURL      = saturdayURL;
		bottleServiceURL = bottleServiceURL;
		privEventURL     = privEventURL;
		homeLogoURL      = homeLogoURL;
		desktopLogo[0].src = 'img/necto-nightclub-logo-ann-arbor-small.png';
		mobileLogo.src = 'img/necto-mobile-logo.png';
		contactURL		 = contactURL;
		directionsURL	 = directionsURL;
		calendarURL		 = calendarURL;
	}

	else if (stringedURL.length === 5) {
		mondayURL        = '../' + mondayURL;
		thursdayURL      = '../' + thursdayURL;
		fridayURL        = '../' + fridayURL;
		saturdayURL      = '../' + saturdayURL;
		bottleServiceURL = '../' + bottleServiceURL;
		privEventURL     = '../' + privEventURL;
		homeLogoURL      = '../' + homeLogoURL;
		desktopLogo[0].src = '../' + 'img/necto-nightclub-logo-ann-arbor-small.png';
		mobileLogo.src = '../' + 'img/necto-mobile-logo.png';
		contactURL		 = '../' + contactURL;
		directionsURL	 = '../' + directionsURL;
		calendarURL		 = '../' + calendarURL;
	}

	else if (stringedURL.length === 6) {
		mondayURL        = '../../' + mondayURL;
		thursdayURL      = '../../' + thursdayURL;
		fridayURL        = '../../' + fridayURL;
		saturdayURL      = '../../' + saturdayURL;
		bottleServiceURL = '../../' + bottleServiceURL;
		privEventURL     = '../../' + privEventURL;
		homeLogoURL      = '../../' + homeLogoURL;
		desktopLogo[0].src = '../../' + 'img/necto-nightclub-logo-ann-arbor-small.png';
		mobileLogo.src = '../../' + 'img/necto-mobile-logo.png';
		contactURL		 = '../../' + contactURL;
		directionsURL	 = '../../' + directionsURL;
		calendarURL		 = '../../' + calendarURL;
	}


	/* SET NUMBER OF COLUMNS (Must change if adding/removing a night) */
	document.getElementById('globalNavLargeLis').className = 'small-block-grid-2 large-block-grid-4';

	/* Weekly Event Links */
	/* MONDAY */
	document.getElementById('desktopMondayLink').href = mondayURL;
	document.getElementById('mobileMondayLink').href  =  mondayURL;
	desktopMondayLink.insertAdjacentHTML('afterbegin', '<strong>FACTORY</strong><br>MONDAY');
	mobileMondayLink.insertAdjacentHTML('afterbegin', 'FACTORY MONDAY');
	/* THURSDAY*/
	document.getElementById('desktopThursdayLink').href = thursdayURL;
	document.getElementById('mobileThursdayLink').href  = thursdayURL;
	desktopThursdayLink.insertAdjacentHTML('afterbegin', '<strong>MIX</strong><br>THURSDAY');
	mobileThursdayLink.insertAdjacentHTML('afterbegin', 'MIX THURSDAY');
	/* FRIDAY */
	document.getElementById('desktopFridayLink').href = fridayURL;
	document.getElementById('mobileFridayLink').href  = fridayURL;
	desktopFridayLink.insertAdjacentHTML('afterbegin', '<strong>PRIDE</strong><br>FRIDAY');
	mobileFridayLink.insertAdjacentHTML('afterbegin', 'PRIDE FRIDAY');
	/* SATURDAY */
	document.getElementById('desktopSaturdayLink').href = saturdayURL;
	document.getElementById('mobileSaturdayLink').href  = saturdayURL;
	desktopSaturdayLink.insertAdjacentHTML('afterbegin', '<strong>FREQUENCY</strong><br>SATURDAY');
	mobileSaturdayLink.insertAdjacentHTML('afterbegin', 'FREQUENCY SATURDAY');

	// Other Pages
	// Bottle Service
	document.getElementById('desktopBottleServiceURL').href = bottleServiceURL;
	document.getElementById('mobileBottleServiceURL').href  = bottleServiceURL;
	// Private Events
	document.getElementById('desktopPrivEventsURL').href    = privEventURL;
	document.getElementById('mobilePrivEventsURL').href		= privEventURL;
	// Logo Home Link
	document.getElementById('desktopHomeLogoURL').href 		= homeLogoURL;
	document.getElementById('mobileHomeLogoURL').href		= homeLogoURL;
	// Contact
	document.getElementById('desktopContactURL').href		= contactURL;
	// There is no mobile contact page
	// Directions
	document.getElementById('desktopDirectionsURL').href	= directionsURL;
	document.getElementById('mobileDirectionsURL').href		= directionsURL;
	// Calendar
	document.getElementById('desktopCalendarURL').href		= calendarURL;
	document.getElementById('mobileCalendarURL').href		= calendarURL;

}