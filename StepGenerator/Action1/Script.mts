Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebEdit("username").Set "adactin123" @@ hightlight id_;_Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebEdit("username")_;_script infofile_;_ZIP::ssf1.xml_;_
Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebEdit("password").SetSecure "5971eeb9995e8e27cbe97e63b57f4d9913fc34a144eb7d8c1835" @@ hightlight id_;_Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebEdit("password")_;_script infofile_;_ZIP::ssf2.xml_;_
Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebButton("Login").Click @@ hightlight id_;_Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebButton("Login")_;_script infofile_;_ZIP::ssf3.xml_;_


Browser("AdactIn.com - Hotel Reservatio").Sync
Browser("AdactIn.com - Hotel Reservatio").FullScreen
 @@ hightlight id_;_Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebButton("Login")_1_;_script infofile_;_ZIP::ssf3.xml_;_
Browser("AdactIn.com - Hotel Reservatio").WaitProperty "username", "adactin123", 10

RoProp = Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").GetROProperty("title")
MsgBox RoProp


