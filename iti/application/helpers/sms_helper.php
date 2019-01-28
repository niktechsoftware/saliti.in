<?php
function sms($number,$msg)
{  

	$url="http://bulksms.niktechsoftware.com/vendorsms/pushsms.aspx?user=sabiraliiti&password=sabiraliiti@123&msisdn=".$number."&sid=SALITI&msg=".urlencode($msg)."&fl=0&gwid=2";
	
	//$url="http://bulksms.gfinch.in/api/sendmsg.php?user=sabirali&pass=ghazipur@123&sender=SALITI&phone=".$number."&text=".urlencode($msg)."&priority=ndnd&stype=normal";
	//$url = "http://mysms.sms7.biz/rest/services/sendSMS/sendGroupSms?AUTH_KEY=".$authkey."&message=".urlencode($message)."&senderId=".$senderID."&routeId=1&mobileNos=".$number."&smsContentType=english";
	$ch = curl_init();
	curl_setopt($ch,CURLOPT_URL,$url);
	curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
	$output=curl_exec($ch);
	curl_close($ch);
}
function checkBalSms()
{ 
$url = "http://bulksms.niktechsoftware.com/vendorsms/CheckBalance.aspx?user=sabiraliiti&password=sabiraliiti@123";
$ch = curl_init();
curl_setopt($ch,CURLOPT_URL,$url);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
$output=curl_exec($ch);
curl_close($ch);
return $output;
}


