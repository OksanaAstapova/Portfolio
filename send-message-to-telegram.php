<?php

  const TOKEN = '5475927510:AAHLVKl4l2Uau7Q5A77FSg1C7LSiV1VPIEY';

  const CHATID = '-209253141';

  $types = array('image/gif', 'image/png', 'image/jpeg', 'application/pdf');

  $size = 1073741824; // 1 ГБ

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  $fileSendStatus = '';
  $textSendStatus = '';
  $msgs = [];
  
  if (!empty($_POST['name']) && !empty($_POST['phone'])) {
    
    $txt = "";
    
    if (isset($_POST['name']) && !empty($_POST['name'])) {
        $txt .= "Name: " . strip_tags(trim(urlencode($_POST['name']))) . "%0A";
    }
    
    if (isset($_POST['phone']) && !empty($_POST['phone'])) {
        $txt .= "Phone: " . strip_tags(trim(urlencode($_POST['phone']))) . "%0A";
    }
    
    if (isset($_POST['theme']) && !empty($_POST['theme'])) {
        $txt .= "Topic: " . strip_tags(urlencode($_POST['theme']));
    }

    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 

    if( isset(json_decode($textSendStatus)->{'ok'}) && json_decode($textSendStatus)->{'ok'} ) {
      if (!empty($_FILES['files']['tmp_name'])) {
    
          $urlFile =  "https://api.telegram.org/bot" . TOKEN . "/sendMediaGroup";
          
          $path = $_SERVER['DOCUMENT_ROOT'] . '/telegramform/tmp/';
          
          $mediaData = [];
          $postContent = [
            'chat_id' => CHATID,
          ];
      
          for ($ct = 0; $ct < count($_FILES['files']['tmp_name']); $ct++) {
            if ($_FILES['files']['name'][$ct] && @copy($_FILES['files']['tmp_name'][$ct], $path . $_FILES['files']['name'][$ct])) {
              if ($_FILES['files']['size'][$ct] < $size && in_array($_FILES['files']['type'][$ct], $types)) {
                $filePath = $path . $_FILES['files']['name'][$ct];
                $postContent[$_FILES['files']['name'][$ct]] = new CURLFile(realpath($filePath));
                $mediaData[] = ['type' => 'document', 'media' => 'attach://'. $_FILES['files']['name'][$ct]];
              }
            }
          }
      
          $postContent['media'] = json_encode($mediaData);
      
          $curl = curl_init();
          curl_setopt($curl, CURLOPT_HTTPHEADER, ["Content-Type:multipart/form-data"]);
          curl_setopt($curl, CURLOPT_URL, $urlFile);
          curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
          curl_setopt($curl, CURLOPT_POSTFIELDS, $postContent);
          $fileSendStatus = curl_exec($curl);
          curl_close($curl);
          $files = glob($path.'*');
          foreach($files as $file){
            if(is_file($file))
              unlink($file);
          }
      }
      echo json_encode('SUCCESS');
    } else {
      echo json_encode('ERROR');
     
    }
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}
