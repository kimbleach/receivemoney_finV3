<?php
	header('Content-type: application/json; charset=utf-8');
	
	include('connect.php');
	mysql_query('SET NAMES UTF8');
	
	//$str = $_POST['output_json'];
	if(is_string($HTTP_RAW_POST_DATA)){
		$data = json_decode($HTTP_RAW_POST_DATA,true);
		
		$str1 = $data[id];
		$str2 = $data[deposit];
		$str3 = $data[transaction];
		$str4 = $data[tellerId];
		$str5 = $data[nameAcc];
		$str6 = $data[bookBank];
		$str7 = $data[typeBank];
		$str8 = $data[accountNumber];
		$str9 =  new DateTime($data[dateIn]);

	//consulta sql
	$query = sprintf("INSERT INTO recordGrid (number,deposit,transaction,tellerId,name,bookBank,type,accountNo,date) 
	values ('%s','%s','%s','%s','%s','%s','%s','%s','%s')",
		mysql_real_escape_string($str1),
		mysql_real_escape_string($str2),
		mysql_real_escape_string($str3),
		mysql_real_escape_string($str4),
		mysql_real_escape_string($str5),
		mysql_real_escape_string($str6),
		mysql_real_escape_string($str7),
		mysql_real_escape_string($str8),
		mysql_real_escape_string($str9->format('Y-m-d H:i:s')));

	$rs = mysql_query($query);

	echo json_encode(array(
		"success" => mysql_errno() == 0,
		"contacts" => array(
			"id" => mysql_insert_id(),
			"name" => $name,
			"deposit" => $deposit
		)
	));
	}
	
	//var_dump($_POST);
	//mysql_query("INSERT INTO recordGrid (name,bookBank,type,accountNo,date,number,transaction,deposit,tellerId)
	//VALUES ()");
	mysql_close();
?>