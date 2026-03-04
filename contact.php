<?php
// contact.php

// 1) Where enquiries should be delivered
$to = "hello@cornwallscalesltd.co.uk";

// 2) MUST be a real mailbox or forwarder on your hosting
$sender = "website@cornwallscalesltd.co.uk";

// 3) Redirect after successful submission
$successRedirect = "/thanks";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit("Method not allowed");
}

// Honeypot spam trap (bots often fill hidden fields)
if (!empty($_POST["company"])) {
    exit("OK");
}

// Collect and sanitize inputs
$subject = trim($_POST["subject"] ?? "");
$name    = trim($_POST["name"] ?? "");
$email   = trim($_POST["email"] ?? "");
$message = trim($_POST["message"] ?? "");

// Validate required fields
if ($subject === "" || $name === "" || $message === "" || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    exit("Please complete the form correctly.");
}

// Prevent header injection
foreach ([$subject, $name, $email] as $value) {
    if (preg_match("/[\r\n]/", $value)) {
        http_response_code(400);
        exit("Invalid input detected.");
    }
}

$emailSubject = "Website enquiry: " . $subject;

$body  = "Subject: $subject\n";
$body .= "Name: $name\n";
$body .= "Email: $email\n\n";
$body .= "Message:\n$message\n";

// Improved headers for better email deliverability
$headers = [];
$headers[] = "From: Cornwall Scales Website <{$sender}>";
$headers[] = "Reply-To: {$email}";
$headers[] = "MIME-Version: 1.0";
$headers[] = "Content-Type: text/plain; charset=UTF-8";

// Use -f to set the envelope sender (important for shared hosting)
$mailSent = mail($to, $emailSubject, $body, implode("\r\n", $headers), "-f {$sender}");

if ($mailSent) {
    header("Location: " . $successRedirect);
    exit;
}

http_response_code(500);
echo "Sorry — your message could not be sent. Please try again later.";