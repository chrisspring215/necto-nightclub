<?php

$renter_name = $_POST['renter_name'];
$renter_phone = $_POST['renter_phone'];
$renter_email = $_POST['renter_email'];
$renter_message = $_POST['renter_message'];
$to = 'info@thenecto.com';
$subject = 'Private Rental';

$message = 'NAME: ' . $renter_name . "\n" . 'PHONE: ' . $renter_phone . "\n" . 'EMAIL: ' . $renter_email . "\n" . 'MESSAGE: ' . $renter_message;

mail ($to, $subject, $message, 'From: ' . $renter_name);
header("Location: http://www.necto.com/private-event-thank-you.html");

?>