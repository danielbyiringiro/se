<?php

include "access_headers.php";
include "../settings/connection.php";
include "email_send.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Decode JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    $email = $input['email'];
    $year = $input['year'];
    $major = $input['major'];
    $name = $input['name'];
    $student_id = $input['studentid'];
    $password = $input['password'];
    $confirm_password = $input['confirm'];
    $code = rand(10000, 99999);

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO STUDENT (email, name, year, major, password, auth_code) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssisi", $email, $name, $year, $major, $hashed_password, $code); // Execute the prepared statement with parameter binding

    if (!$stmt->execute()) 
    {
        $error_message = sprintf(
            'Error executing query: %s | Email: %s | Student ID: %s | Password: %s | Confirm Password: %s',
            $stmt->error, // Using $stmt->error for more specific error message from the statement execution
            htmlspecialchars($email), // Sanitize input for security
            htmlspecialchars($student_id),
            htmlspecialchars($password),
            htmlspecialchars($confirm_password)
        );
        
        echo json_encode(array('status' => 'error', 'message' => $error_message));
        exit;
    }
    else
    {
        $subject = 'Welcome to the Degree Audit Portal';
        $body = 'Hello ' . $name . ',<br><br>Thank you for signing up to the Portal. We are excited to have you on board.<br><br>To authenticate the validity of your email address, input the code below in the auth page of the application.<br><br>Code: ' . $code . '<br><br>Best,<br>The Degree Audit Team';
        $result = send_email_to($email, $subject, $body);
        if ($result)
        {
            echo json_encode(array('status' => 'success'));
            exit;
        }
        else
        {
            echo json_encode(array('status' => 'error', 'message' => 'Email issues. Please try again later.'));
            exit;
        }
    }
}