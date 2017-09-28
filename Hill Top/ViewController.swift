//
//  ViewController.swift
//  Hill Top
//
//  Created by Justin Keller on 9/25/17.
//  Copyright © 2017 Justin Keller. All rights reserved.
//

import Cocoa

class myViewController: NSViewController {

   
    @IBOutlet var Studentbutton: NSButtonCell!
    @IBOutlet var TeacherButton: NSButton!
    @IBOutlet var TeacherPortal: NSButton!
    @IBAction func PortalS(_ sender: NSButton) {
        NSWorkspace.shared().open((NSURL(string: "https://webapps.pcrsoft.com/clue/Student-Portal-Login/11552")! as URL))
    }
    @IBAction func PortalT(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "https://webapps.pcrsoft.com/clue/Teacher-Portal-Login/11576")! as URL)
    }
    @IBAction private func TCal(_ sender: NSButton) {
        NSWorkspace.shared().open(NSURL(string: "http://hilltopprep.org/calendar")! as URL)
    }
    @IBAction func SCal(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "http://hilltopprep.org/calendar")! as URL)
    }
    @IBAction func Temail(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "http://mail.google.com/a/hilltopprep.org")! as URL)
        
    }
    @IBAction func Semail(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "http://mail.google.com/a/hilltopprep.org")! as URL)
    }
    @IBAction func TGC(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "https://classroom.google.com")! as URL)
    }
    
    @IBAction func SGC(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "https://classroom.google.com")! as URL)
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

class teacherview: NSViewController {

}

class studentview: NSViewController {
    
}

class schedview: NSViewController {
    @IBOutlet var one: NSTextField!
    @IBOutlet var two: NSTextField!
    @IBOutlet var three: NSTextField!
    @IBOutlet var community: NSTextField!
    @IBOutlet var four: NSTextField!
    @IBOutlet var mentor: NSTextField!
    @IBOutlet var five: NSTextField!
    @IBOutlet var six: NSTextField!
    @IBOutlet var seven: NSTextField!
    @IBOutlet var eight: NSTextField!
    
    override func viewDidLoad(){
        super.viewDidLoad()
        
        
        if let savedValue = UserDefaults.standard.string(forKey: "one") {
            one.stringValue=savedValue
        }
        else {
            one.stringValue="First Period"
        }
        if let savedValue = UserDefaults.standard.string(forKey: "two") {
            two.stringValue=savedValue
        }
        else {
            two.stringValue="Second Period"
        }
        if let savedValue = UserDefaults.standard.string(forKey: "three") {
            three.stringValue=savedValue
        }
        else {
            three.stringValue="Third Period"
        }
        if let savedValue = UserDefaults.standard.string(forKey: "four") {
            four.stringValue=savedValue
        }
        else {
            four.stringValue="Fourth Period"
        }
        if let savedValue = UserDefaults.standard.string(forKey: "five") {
            five.stringValue=savedValue
        }
        else {
            five.stringValue="Fifth Period"
        }
        if let savedValue = UserDefaults.standard.string(forKey: "six") {
            six.stringValue=savedValue
        }
        else {
            six.stringValue="Sixth Period"
        }
        if let savedValue = UserDefaults.standard.string(forKey: "seven") {
            seven.stringValue=savedValue
        }
        else {
            seven.stringValue="Seventh Period"
        }
        if let savedValue = UserDefaults.standard.string(forKey: "eight") {
            eight.stringValue=savedValue
        }
        else {
            eight.stringValue="Activity Period"
        }
        

    }
    

} //        UserDefaults.standard.set(valueToSave, forKey: "preferenceName")

