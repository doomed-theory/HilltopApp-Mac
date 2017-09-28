//
//  ViewController.swift
//  Hill Top
//
//  Created by Justin Keller on 9/25/17.
//  Copyright © 2017 Justin Keller. All rights reserved.
//

import Cocoa

class ViewController: NSViewController {

    


    


    @IBOutlet var Studentbutton: NSButtonCell!
    @IBOutlet var TeacherButton: NSButton!
    @IBOutlet var TeacherPortal: NSButton!
    @IBAction func PortalS(_ sender: NSButton) {
        NSWorkspace.shared().open((NSURL(string: "https://webapps.pcrsoft.com/clue/Student-Portal-Login/11552")! as URL))
    }
    @IBAction func PortalT(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "https://webapps.pcrsoft.com/clue/Teacher-Portal-Login/11576")! as URL)
    }
    @IBAction func TCal(_ sender: NSButton) {
        NSWorkspace.shared().open(NSURL(string: "http://hilltopprep.org/calendar")! as URL)
    }
    @IBAction func SCal(_ sender: Any) {
                NSWorkspace.shared().open(NSURL(string: "http://hilltopprep.org/calendar")! as URL)
    }

    
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    @objc private func buttonClicked() {
        // your code goes here
    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
        }
       
    }


}

