<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'PHPMailer-6.6.5/src/Exception.php';
    require 'PHPMailer-6.6.5/src/PHPMailer.php';

    $mail = new PHPMailer(true);
    $mail -> CharSet = 'UTF-8';
    $mail -> setLanguage('uk', 'PHPMailer-6.6.5/language/');
    $mail -> IsHTML(true);

    $mail -> setFrom('#');
    $mail -> addAddress('#');
    $mail -> Subject = 'Безкоштовна консультація юриста';

    if(trim(!empty($_POST['name']))){
        $body.= '<p><strong>Имʼя:</strong> '.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['phone']))){
        $body.= '<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
    }

    $mail->Body = $body;

    if (!$mail->send()){
        $message = 'Помилка';
    } else {
        $message = 'Дані надіслані!';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>