<?php
	header('Content-type: application/json; charset=utf-8');
	
	include("connect.php");
	mysql_query("SET NAMES UTF8");
	$listQuery = mysql_query("SELECT * FROM fin_branch");
	$rows = array();
	
	while($rec = mysql_fetch_assoc($listQuery)) {
		$rows[] = $rec;
	}
	
	echo json_encode(array(
		"branch" => $rows
	),JSON_UNESCAPED_UNICODE|JSON_PRETTY_PRINT);
	
?>