function eventWriter() {
	var fullUrl  = document.location.toString();
	var urlsplit = fullUrl.split('/');
	var path     = urlsplit.length - 1;

	var eventTitleContent=document.getElementById("eventTitle"),eventMetaDescriptionContent=document.getElementById("eventMetaDescription"),eventDateBodyContent=document.getElementById("eventDateBody"),eventTitleBodyContent=document.getElementById("eventTitleBody"),eventDescriptionBodyContent=document.getElementById("eventDescriptionBody"),eventDoorsContent=document.getElementById("eventDoors"),eventCoverContent=document.getElementById("eventCover"),eventOtherContent=document.getElementById("eventOther"),eventImageSmallContent=document.getElementById("eventImageSmall"),eventImageLargeContent=document.getElementById("eventImageLarge"),ticketButtonLargeContent=document.getElementById("ticketButtonLarge"),ticketButtonLargeHeaderContent=document.getElementById("ticketButtonLargeHeader"),ticketButtonSmallContent=document.getElementById("ticketButtonSmall"),ticketButtonSmallHeaderContent=document.getElementById("ticketButtonSmallHeader"),eventMetaDescriptionTailValue="Necto Nightclub in Ann Arbor, Michigan.";

	if (urlsplit[path] === 'medma-impulse-3-at-necto-nightclub-ann-arbor-michigan-dec-21st-2015.html')
	{
		var eventName                 = 'MEDMA Impulse 3';
		var eventDate                 = 'Jan 14, 2015';
		var eventMetaDescriptionValue = eventName + ' on ' + eventDate + ' at the ' + eventMetaDescriptionTailValue;
		var eventDescriptionBody      = 'MEDMA celebrates the new semester with raw, gritty, and primal music in the basement of Necto on January 14th. Attire is jungle-inspired.';
		var eventDoors				  = '10pm';
		var eventCover				  = 'Free with MEDMA Pass until midnight';
		var eventOther				  = '18 and up';
		var eventImage			      = '../img/event-images/' + 'medma-impulse-3-at-necto-nightclub-ann-arbor.png';
		var ticketedEvent             = false;
		var ticketLink			  	  = 'http://www.necto.com';

		eventTitleContent.innerHTML=eventName+" | "+eventDate+" | "+eventMetaDescriptionTailValue,eventMetaDescriptionContent.setAttribute("content",eventMetaDescriptionValue),eventDateBodyContent.innerHTML=eventDate,eventTitleBodyContent.innerHTML=eventName,eventDescriptionBodyContent.innerHTML=eventDescriptionBody,eventDoorsContent.innerHTML=eventDoors,eventCoverContent.innerHTML=eventCover,eventOtherContent.innerHTML=eventOther,eventImageSmallContent.setAttribute("src",eventImage),eventImageLargeContent.setAttribute("src",eventImage),0==ticketedEvent?(ticketButtonLargeContent.setAttribute("class","hide"),ticketButtonLargeHeaderContent.setAttribute("class","hide"),ticketButtonSmallContent.setAttribute("class","hide"),ticketButtonSmallHeaderContent.setAttribute("class","hide")):(ticketButtonLargeHeaderContent.setAttribute("class","hide-for-small"),ticketButtonLargeContent.setAttribute("class","hide-for-small standard-button tix-button"),ticketButtonLargeContent.setAttribute("href",ticketLink),ticketButtonSmallContent.setAttribute("class","hide-for-medium-up standard-button tix-button"),ticketButtonSmallContent.setAttribute("href",ticketLink),ticketButtonSmallHeaderContent.setAttribute("class","hide-for-medium-up"))
	};
}