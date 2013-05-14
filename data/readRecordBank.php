<?php
	header('Content-type: application/json; charset=utf-8');
	
	include("connect.php");
	mysql_query("SET NAMES UTF8");
	$str = $_REQUEST['idBranch'];
	$listQuery = mysql_query("select fin_bank_account.id
							, CONCAT(fin_bank.`name`,' : สาขา',fin_bank_account.branch) as bank_name

		from fin_branch

		inner join fin_bank_account on fin_branch.id = fin_bank_account.branch_id

		inner join fin_bank on fin_bank.id = fin_bank_account.bank_id

		where fin_branch.id = $str");
	$rows = array();
	
	while($rec = mysql_fetch_assoc($listQuery)) {
		$rows[] = $rec;
	}
	
	echo json_encode(array(
		"bank" => $rows
	),JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
	
?>