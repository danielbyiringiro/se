<?php

include "access_headers.php";
include "../settings/connection.php";
include "email_send.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Decode JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    $email = $input['email'];
    $student_id = $input['student_id'];
    $password = $input['password'];
    $confirm_password = $input['confirm_password'];
    $code = rand(10000, 99999);

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO STUDENT (email, student_id, password, auth_code) VALUES (?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sisi", $email, $student_id, $hashed_password, $code); // Execute the prepared statement with parameter binding

    if (!$stmt->execute()) 
    {
        echo json_encode(array('status' => 'error', 'message' => 'Error executing query' . $conn->error));
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