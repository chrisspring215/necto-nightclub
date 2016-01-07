<?php

$eventName = $_POST['eventName'];
$eventDayOfTheWeek = $_POST['eventDayOfTheWeek'];
$eventMonth = $_POST['eventMonth'];
$eventDate = $_POST['eventDate'];
$eventYear = $_POST['eventYear'];
$eventDescription = $_POST['eventDescription'];
$eventCalDescription = $_POST['eventCalDescription'];
$eventCover = $_POST['eventCover'];
$eventExternalLink = $_POST['eventExternalLink'];
$eventTicketLink = $_POST['eventTicketLink'];

$to = 'domelife@gmail.com';
$subject = 'New Event: ' . $eventName;


$message = 'EVENT NAME: ' . $eventName . "\n" . 'DAY: ' . $eventDayOfTheWeek . "\n" . 'DATE: ' . $eventMonth . ' ' . $eventDate . ', ' . $eventYear  . "\n" . 'DESC: ' . $eventDescription . "\n" . 'CAL DESC: ' . $eventCalDescription . "\n" .'COVER: ' . $eventCover . "\n" . 'OTHER LINK: ' . $eventExternalLink . "\n" . 'TICKET LINK: ' . $eventTicketLink;

mail ($to, $subject, $message, 'From: info@necto.com');
header("Location: http://www.necto.com/");

?>