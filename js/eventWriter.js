function eventWriter() {
	var fullUrl  = document.location.toString();
	var urlsplit = fullUrl.split('/');
	var path     = urlsplit.length - 1;

	var eventTitleContent=document.getElementById("eventTitle"),eventMetaDescriptionContent=document.getElementById("eventMetaDescription"),eventDateBodyContent=document.getElementById("eventDateBody"),eventTitleBodyContent=document.getElementById("eventTitleBody"),eventDescriptionBodyContent=document.getElementById("eventDescriptionBody"),eventDoorsContent=document.getElementById("eventDoors"),eventCoverContent=document.getElementById("eventCover"),eventOtherContent=document.getElementById("eventOther"),eventImageSmallContent=document.getElementById("eventImageSmall"),eventImageLargeContent=document.getElementById("eventImageLarge"),ticketButtonLargeContent=document.getElementById("ticketButtonLarge"),ticketButtonLargeHeaderContent=document.getElementById("ticketButtonLargeHeader"),ticketButtonSmallContent=document.getElementById("ticketButtonSmall"),ticketButtonSmallHeaderContent=document.getElementById("ticketButtonSmallHeader"),eventMetaDescriptionTailValue="Necto Nightclub in Ann Arbor, Michigan.";

	if (urlsplit[path] === '1test.html')
	{
		var eventName                 = 'Chris Birthday';
		var eventDate                 = 'Jan 12, 2015';
		var eventMetaDescriptionValue = eventName + ' on ' + eventDate + ' at the ' + eventMetaDescriptionTailValue;
		var eventDescriptionBody      = 'This is gonna be fun This is gonna be fun This is gonna be fun This is gonna be fun This is gonna be fun This is gonna be fun This is gonna be fun';
		var eventDoors				  = '9p,';
		var eventCover				  = 'Free';
		var eventOther				  = 'Fuck off';
		var eventImage			      = '../img/event-images/' + 'alyssa-edwardso-at-necto-nightclub-ann-arbor.png';
		var ticketedEvent             = true;
		var ticketLink			  	  = 'http://www.google.com';

		eventTitleContent.innerHTML=eventName+" | "+eventDate+" | "+eventMetaDescriptionTailValue,eventMetaDescriptionContent.setAttribute("content",eventMetaDescriptionValue),eventDateBodyContent.innerHTML=eventDate,eventTitleBodyContent.innerHTML=eventName,eventDescriptionBodyContent.innerHTML=eventDescriptionBody,eventDoorsContent.innerHTML=eventDoors,eventCoverContent.innerHTML=eventCover,eventOtherContent.innerHTML=eventOther,eventImageSmallContent.setAttribute("src",eventImage),eventImageLargeContent.setAttribute("src",eventImage),0==ticketedEvent?(ticketButtonLargeContent.setAttribute("class","hide"),ticketButtonLargeHeaderContent.setAttribute("class","hide"),ticketButtonSmallContent.setAttribute("class","hide"),ticketButtonSmallHeaderContent.setAttribute("class","hide")):(ticketButtonLargeHeaderContent.setAttribute("class","hide-for-small"),ticketButtonLargeContent.setAttribute("class","hide-for-small standard-button tix-button"),ticketButtonLargeContent.setAttribute("href",ticketLink),ticketButtonSmallContent.setAttribute("class","hide-for-medium-up standard-button tix-button"),ticketButtonSmallContent.setAttribute("href",ticketLink),ticketButtonSmallHeaderContent.setAttribute("class","hide-for-medium-up"));
		};
	};
	
}