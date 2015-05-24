<?php

$reservation_name = $_POST['reservation_name'];
$reservation_phone = $_POST['reservation_phone'];
$reservation_email = $_POST['reservation_email'];
$reservation_message = $_POST['reservation_message'];
$to = 'info@thenecto.com';
$subject = 'Booth Rental or Bottle Service';

$message = 'NAME: ' . $reservation_name . "\n" . 'PHONE: ' . $reservation_phone . "\n" . 'EMAIL: ' . $reservation_email . "\n" . 'MESSAGE: ' . $reservation_message;

mail ($to, $subject, $message, 'From: ' . $reservation_name);
header("Location: http://www.necto.com/bottle-service-and-reservation-thank-you.html");


?>