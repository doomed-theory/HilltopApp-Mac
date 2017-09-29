//
//  Admin.swift
//  Hill Top
//
//  Created by Justin Keller on 9/29/17.
//  Copyright © 2017 Justin Keller. All rights reserved.
//

import AppKit

class admin: NSViewController {
    @IBOutlet var pwdlabel: NSTextField!
    @IBOutlet var pwdfield: NSSecureTextField!
    @IBAction func accessClicked(_ sender: Any) {
        let passwordEntered :string
        let passwordCorrect :string="Fab*1964"
        passwordEntered=pwdfield.stringValue
        
    }
    override func viewDidLoad() {
        pwdlabel.stringValue="Enter Password"
    }
    override func viewDidAppear() {
        super.viewDidAppear()
        self.view.window?.title="Hill Top App: Administrative Panel Locked"
    }
    
}
