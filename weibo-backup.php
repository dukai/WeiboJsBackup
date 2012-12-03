<?php
require_once "common.php";
$db = getDb();

	$data = $_GET['content'];
	$callback = $_GET['callback'];
	$cha=mb_detect_encoding($data);
	$data = json_decode($data, true);
	$data['content'] = addslashes($data['content']);
	$data['backupid'] = $_GET['backupid'];
	
	if(empty($data['refer'])){
		$data['refer'] = array('content'=>'', 'datetime' => '', 'comefrom' => '', 'img' => '');
	}
try{
	$cmd = "insert into weibos (mid, content, dateline, comefrom, backupid, datetime, img, refer_content, refer_datetime, refer_comefrom, refer_img ) values('{$data['mid']}', '{$data['content']}', '{$data['dateline']}', '{$data['comefrom']}', '{$data['backupid']}', '{$data['datetime']}', '{$data['img']}', '{$data['refer']['content']}', '{$data['refer']['datetime']}', '{$data['refer']['comefrom']}', '{$data['refer']['img']}')";


	$db->query($cmd);
	exit($callback . '(' . json_encode(array('status' => true)) . ')');
}catch(Exception $ex){
	exit($callback . '(' . json_encode(array('status' => false)) . ')');
}