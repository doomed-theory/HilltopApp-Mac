//
//  Admin.swift
//  Hill Top
//
//  Created by Justin Keller on 9/29/17.
//  Copyright © 2017 Justin Keller. All rights reserved.
//

import AppKit
import WebKit
class admin: NSViewController {
    @IBOutlet var pwdlabel: NSTextField!
    @IBOutlet var pwdfield: NSSecureTextField!
    @IBAction func accessClicked(_ sender: Any) {
        let passwordEntered :String
        let passwordCorrect :String="Fab*1964"
        passwordEntered=pwdfield.stringValue
        if passwordEntered == passwordCorrect {
            performSegue(withIdentifier: "adminsecret", sender: (Any).self)
        }
        
    }
    override func viewDidLoad() {
        pwdlabel.stringValue="Enter Password"
    }
    override func viewDidAppear() {
        super.viewDidAppear()
        self.view.window?.title="Hill Top App: Administrative Panel Locked"
    }
    override func shouldPerformSegue(withIdentifier identifier: String, sender: Any?) -> Bool {
        var pwd: String {
            get{
                return self.pwdfield.stringValue
            }
            
        }
        
        if pwd == "Fab*1964" {
            return true
        }
        else {
            return false
        }

    }
    override func prepare(for segue: NSStoryboardSegue, sender: Any?) {
            self.dismiss(nil)
    }

}
    class admmain: NSViewController {
        @IBOutlet var wv: WKWebView!
        @IBOutlet var submitbutton: NSPopUpButton!
        override func viewWillAppear() {
        including.displayHeader(wv)
        }
        @IBAction func submitalert(_ sender: Any) {
            let enteredAlert=submitbutton.titleOfSelectedItem
            let enteredText :String?=(textarea.string ?? "")
            print(enteredAlert ?? NSError())
            print(enteredText ?? "no text entered")
            SendEmail.send(enteredAlert!,enteredText!)
        }
    @IBOutlet var textarea: NSTextView!
    @IBOutlet var alerting: NSTextField!
        override func viewDidLoad() {
            alerting.stringValue="Enter Alert Text"
            
        }

}
class SendEmail: NSObject {
    static func send(_ subject:String, _ msg: String) {
   
    }
}
