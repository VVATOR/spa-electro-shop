<?php 
$sitename = 'магазин';
if(isset($_GET['sitename'])){
    $sitename=$_GET['sitename'];
}
$orderNumber = rand(0,1000);


$to  = "vikhliayeu@gmail.com" ; 

$subject = $sitename." YOUR ORDER NUMBER: ".$orderNumber; 

$message = ' 
<html> 
    <head> 
        <title>$subject</title> 
    </head> 
    <body> 
        <h1>Ваш заказ принят!</h1>
        <h2>$orderNumber</h2>
        <p>Here are the birthdays upcoming in August!</p> 
        
        <br>
        
        <br>
        Спасибо за покупку!
    </body> 
</html>'; 

$headers  = "Content-type: text/html; charset=utf-8 \r\n"; 
$headers .= "From: Birthday Reminder <birthday@example.com>\r\n"; 
$headers .= "Bcc: birthday-archive@example.com\r\n"; 

mail($to, $subject, $message, $headers); 


echo $subject;
?>
