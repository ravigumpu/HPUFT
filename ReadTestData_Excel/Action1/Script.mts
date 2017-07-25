'Wait Strategies - Synchronisation mechanism

'Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebEdit("username").Set "adactin123" @@ hightlight id_;_Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebEdit("username")_;_script infofile_;_ZIP::ssf5.xml_;_
'Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebEdit("password").SetSecure "5971eeb9995e8e27cbe97e63b57f4d9913fc34a144eb7d8c1835" @@ hightlight id_;_Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebEdit("password")_;_script infofile_;_ZIP::ssf6.xml_;_
'Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebButton("Login").Click

call Login ("adactin123","adactin123")

Browser("AdactIn.com - Hotel Reservatio").FullScreen
 @@ hightlight id_;_Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Hotel Reservatio").WebButton("Login")_1_;_script infofile_;_ZIP::ssf3.xml_;_
If Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Search Hotel").WebButton("Search").Exist(3) Then
Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Search Hotel").WebButton("Search").Click @@ hightlight id_;_Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Search Hotel").WebButton("Search")_;_script infofile_;_ZIP::ssf8.xml_;_
Reporter.ReportEvent 0 , "Sample Step Name", "Details" 
'Reporter.ReportEvent micPass , "Sample Step Name", "Sample Details"
Else
MsgBox "Sorry"
End If
 @@ hightlight id_;_Browser("AdactIn.com - Hotel Reservatio").Page("AdactIn.com - Search Hotel").WebButton("Search")_;_script infofile_;_ZIP::ssf9.xml_;_

Call Logout

Call ReadExcelData




