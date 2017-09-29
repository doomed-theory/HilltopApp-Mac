//
//  ViewController.swift
//  Hill Top
//
//  Created by Justin Keller on 9/25/17.
//  Copyright © 2017 Justin Keller. All rights reserved.
//

import Cocoa

class Help: NSViewController {

    
    @IBOutlet var HelpLabel: NSTextField!
    override func viewDidLoad() {
        HelpLabel.stringValue="command+shift+c: calendar\n"+"command+shift+p: portal \n"+"command+shift+e: email\n"+"command+shift+g: google classroom\n"+"command+shift+s: view schedule"
       
    }
    
    override var representedObject: Any? {
        didSet {
            // Update the view, if already loaded.
        }
    }
    
    
}

