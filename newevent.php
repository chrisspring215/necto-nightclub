<?php
/*
$eventName = $_POST['eventName'];
$eventDayOfTheWeek = $_POST['eventDayOfTheWeek'];
$eventMonth = $_POST['eventMonth'];
$eventDate = $_POST['eventDate'];
$eventYear = $_POST['eventYear'];
$eventDescription = $_POST['eventDescription'];
$eventCover = $_POST['eventCover'];
$eventExternalLink = $_POST['eventExternalLink'];
$eventImage = $_POST['eventImage'];
$eventTicketLink = $_POST['eventTicketLink'];

$to = 'domelife@gmail.com';
$subject = 'New Event: ' . $eventName;
$headers = $eventImage;


$message = 'EVENT NAME: ' . $eventName . "\n" . 'DAY: ' . $eventDayOfTheWeek . "\n" . 'DATE: ' . $eventMonth . ' ' . $eventDate . ', ' . $eventYear  . "\n" . 'DESC: ' . $eventDescription . "\n" . 'COVER: ' . $eventCover . "\n" . 'OTHER LINK: ' . $eventExternalLink . "\n" . 'TICKET LINK: ' . $eventTicketLink;

mail ($to, $subject, $message, 'From: info@necto.com', $headers);
header("Location: http://www.necto.com/");
*/

	$eventName = $_POST['eventName'];
	$eventDayOfTheWeek = $_POST['eventDayOfTheWeek'];
	$eventMonth = $_POST['eventMonth'];
	$eventDate = $_POST['eventDate'];
	$eventYear = $_POST['eventYear'];
	$eventDescription = $_POST['eventDescription'];
	$eventCover = $_POST['eventCover'];
	$eventExternalLink = $_POST['eventExternalLink'];
	$eventImage = $_POST['eventImage'];
	$eventTicketLink = $_POST['eventTicketLink'];


?>