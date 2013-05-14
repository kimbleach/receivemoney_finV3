<?php
	header('Content-type: application/json; charset=utf-8');
	
	include("connect.php");
	mysql_query("SET NAMES UTF8");
	$str = $_REQUEST['idAccount'];
	$listQuery = mysql_query("select fin_bank_account.id ,fin_bank_account.account_number
		,fin_bank_account.type
							
		from fin_branch

		inner join fin_bank_account on fin_branch.id = fin_bank_account.branch_id

		inner join fin_bank on fin_bank.id = fin_bank_account.bank_id

		where fin_bank_account.id = $str");
	$rows = array();
	
	while($rec = mysql_fetch_assoc($listQuery)) {
		$rows[] = $rec;
	}
	
	echo json_encode(array(
		"account" => $rows,
		"success"=> true
	),JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
	
?>