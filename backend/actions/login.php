<?php

include "access_headers.php";
include "../settings/connection.php";
include "email_send.php";

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Decode JSON input
    $input = json_decode(file_get_contents('php://input'), true);
    $email = $input['email'];
    $password = $input['password'];

    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    $sql = "SELECT * FROM STUDENT WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email);

    if (!$stmt->execute()) 
    {
        echo json_encode(array('status' => 'error', 'message' => 'Error executing query' . $conn->error));
        exit;
    }
    else
    {
        $row = $stmt->get_result()->fetch_assoc();
        if ($row)
        {
            
            if (password_verify($password, $row['PASSWORD']))
            {
                if ($row['STATUS'] == 1)
                {
                    echo json_encode(array('status' => 'success', 'user_data' => $row));
                    exit;
                }
                else
                {
                    echo json_encode(array('status' => 'error', 'message' => 'Email address is not yet authenticated'));
                    exit;
                }
            }
            else
            {
                echo json_encode(array('status' => 'error', 'message' => 'Invalid password'));
                exit;
            }
        }
        else
        {
            echo json_encode(array('status' => 'error', 'message' => 'Invalid email'));
            exit;
        }
    }
}