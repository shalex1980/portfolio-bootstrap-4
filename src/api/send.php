<?php
  $name = htmlspecialchars($_POST['name']);
  $email = htmlspecialchars($_POST['email']);
  $message = htmlspecialchars($_POST['message']);

  $name = urlencode($name);
  $email = urlencode($email);
  $message = urlencode($message);
  
  if(mail("alexonesh@gmail.com","Заявка с формы","Имя ".$name." email ".$email." Сообщение ".$message)) {
    echo "message succeess";
    echo "</br>";
    echo $name;
    echo "</br>";
    echo $email;
    echo "</br>";
    echo $message;
  }
  else {
    echo "message error";
  }
?>