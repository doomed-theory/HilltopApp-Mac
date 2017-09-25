//
//  ViewController.swift
//  Hill Top
//
//  Created by Justin Keller on 9/25/17.
//  Copyright © 2017 Justin Keller. All rights reserved.
//

import Cocoa

class ViewController: NSViewController {
    let p1b="08:30:00".components(separatedBy: ":")
    let p1e="09:10:00".components(separatedBy: ":")
    let p2b="09:10:00".components(separatedBy: ":")
    let p2e="09:50:00".components(separatedBy: ":")
    let pcb="09:50:00".components(separatedBy: ":")
    let pce="10:10:00".components(separatedBy: ":")
    let p3b="10:10:00".components(separatedBy: ":")
    let p3e="10:50:00".components(separatedBy: ":")
    let p4b="10:50:00".components(separatedBy: ":")
    let p4e="11:30:00".components(separatedBy: ":")
    let pmb="11:30:00".components(separatedBy: ":")
    let pme="12:40:00".components(separatedBy: ":")
    let p5b="12:40:00".components(separatedBy: ":")
    let p5e="13:20:00".components(separatedBy: ":")
    let p6b="13:20:00".components(separatedBy: ":")
    let p6e="14:00:00".components(separatedBy: ":")
    let p7b="14:00:00".components(separatedBy: ":")
    let p7e="14:40:00".components(separatedBy: ":")
    let p8b="14:40:00".components(separatedBy: ":")
    let p8e="15:20:00".components(separatedBy: ":")
    let currentDateTime = Date()
    let userCalendar = Calendar.current
    let requestedComponents: Set<Calendar.Component> = [
        .hour,
        .minute ]
    


    @IBOutlet var Scurrper: NSTextField!
    @IBOutlet var Tcurrper: NSTextField!
    @IBOutlet var Studentbutton: NSButtonCell!
    @IBOutlet var TeacherButton: NSButton!
    @IBOutlet var TeacherPortal: NSButton!
    @IBAction func PortalS(_ sender: NSButton) {
        NSWorkspace.shared().open((NSURL(string: "https://webapps.pcrsoft.com/clue/Student-Portal-Login/11552")! as URL))
    }
    @IBAction func PortalT(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "https://webapps.pcrsoft.com/clue/Teacher-Portal-Login/11576")! as URL)
    }
    @IBAction func Student(_ sender: Any) {
    }
    @IBAction func Teacher(_ sender: Any) {
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        let dateTimeComponents = userCalendar.dateComponents(requestedComponents, from: currentDateTime)
        var hour=dateTimeComponents.hour!
        var minute=dateTimeComponents.minute!

        if hour>Int(p1b[0])! && minute>Int(p1b[1])! && hour<Int(p1e[0])! && minute < Int(p1b[1])!  {
                Scurrper.stringValue="First Period"
                Tcurrper.stringValue="First Period"
        }

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

