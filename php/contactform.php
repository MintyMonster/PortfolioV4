<?php

require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';
require 'phpmailer/src/Exception.php';

use PHPMailer\PHPMailer\PHPMailer;
Use PHPMailer\PHPMailer\Exception;

define('SMTP_SERVER', 'smtp.livemail.co.uk');
define('SMTP_PORT', 465);
define('SMTP_USERNAME', 'admin@cameronliddell.com');
define('MAIL_ADDRESS', 'camerongliddell@gmail.com');
define('MAIL_NAME', 'Cameron');

$file_path = __DIR__ . '/../../configs/config.php';
$config = require_once($file_path);

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Collect form data
    $fullname = $_POST["fullname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];

    // Configure SMTP settings
    $smtpHost = SMTP_SERVER;
    $smtpPort = SMTP_PORT;
    $smtpUsername = SMTP_USERNAME; // Sender email address
    $smtpPassword = $config['email_password']; // Sender email password

    // Create PHPMailer object
    $mail = new PHPMailer(true);

    try {
        // SMTP configuration
        $mail->isSMTP();
        $mail->Host = $smtpHost;
        $mail->SMTPAuth = true;
        $mail->Username = $smtpUsername;
        $mail->Password = $smtpPassword;
        $mail->SMTPSecure = 'ssl';
        $mail->Port = $smtpPort;

        // Email content
        $mail->setFrom($smtpUsername, $fullname); // Sender's name and email address
        $mail->addAddress(MAIL_ADDRESS, MAIL_NAME); // Recipient's name and email address
        $mail->Subject = $subject;
        $mail->Body = "Name: $fullname\nEmail: $email\nPhone: $phone\n\n$message";

        // Send email
        $mail->send();
        
        // Send success response to AJAX
        echo "success";
    } catch (Exception $e) {
        // Send error response to AJAX
        echo json_encode(["status" => "error", "message" => "Form submit failure" . $mail->ErrorInfo]);
    }
} else {
    // Invalid request
    http_response_code(405);
    echo json_encode(["status" => "error","message" => "Method Not Allowed"]);
}
?>