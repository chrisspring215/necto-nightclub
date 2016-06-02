<?php

$reservation_name = $_POST['reservation_name'];
$reservation_phone = $_POST['reservation_phone'];
$reservation_email = $_POST['reservation_email'];
$reservation_date = $_POST['reservation_date'];
$reservation_message = $_POST['reservation_message'];
// $to = 'info@thenecto.com';
$to = 'info@necto.com';
$subject = 'Booth Rental or Bottle Service';

$message = 'NAME: ' . $reservation_name . "\n" . 'PHONE: ' . $reservation_phone . "\n" . 'EMAIL: ' . $reservation_email . "\n" . $reservation_date . "\n" . 'MESSAGE: ' . $reservation_message;

// mail ($to, $subject, $message, 'From: ' . $reservation_name);
mail ($to, $subject, $message, 'From: ' . $reservation_email);
header("Location: https://www.necto.com/bottle-service-and-reservation-thank-you.html");


?>