//
//  ViewController.swift
//  Hill Top
//
//  Created by Justin Keller on 9/25/17.
//  Copyright © 2017 Justin Keller. All rights reserved.
//

import Cocoa
import WebKit
class myViewController: NSViewController {
    var timer: Timer!
    
    let formatter: DateFormatter = {
        let tmpFormatter = DateFormatter()
        tmpFormatter.dateFormat = "hh:mm:ss"
        return tmpFormatter
    }()

   
    @IBOutlet var currtime: NSTextField!
    @IBOutlet var Studentbutton: NSButtonCell!
    @IBOutlet var TeacherButton: NSButton!
    @IBOutlet var TeacherPortal: NSButton!
    @IBOutlet var hiddenbutton: NSButton!
    @IBOutlet var wv: WKWebView!

    
    override func viewDidLoad() {
        super.viewDidLoad()
        hiddenbutton.stringValue="a"

    }

    override var representedObject: Any? {
        didSet {
        // Update the view, if already loaded.
       }
       
    }
    override func viewDidAppear() {
        super.viewDidAppear()
        self.view.window?.title="Hill Top App"
        hiddenbutton.stringValue="a"
    }
    override func viewWillAppear() {
        super.viewWillAppear()
        including.displayHeader(wv)
        including.setBackground(self.view)
        timer = Timer.scheduledTimer(timeInterval: 1, target: self, selector: #selector(self.getTimeOfDate), userInfo: nil, repeats: true)
        

    }
    override func viewDidDisappear() {
        
    }
    override func prepare(for segue: NSStoryboardSegue, sender: Any?) {
        //self.view.window?.close()
    }
    func getTimeOfDate() {
        let curDate = Date()
        
        currtime.stringValue = formatter.string(from: curDate)
        
    }
    

}

class teacherview: NSViewController {
    @IBOutlet var wv: WKWebView!
    @IBAction func PortalT(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "https://webapps.pcrsoft.com/clue/Teacher-Portal-Login/11576")! as URL)
    }
    @IBAction private func TCal(_ sender: NSButton) {
        NSWorkspace.shared().open(NSURL(string: "http://hilltopprep.org/calendar")! as URL)
    }
    
    @IBAction func Temail(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "http://mail.google.com/a/hilltopprep.org")! as URL)
        
    }
    
    @IBAction func TGC(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "https://classroom.google.com")! as URL)
    }
    override func viewDidAppear() {
        super.viewDidAppear()
        self.view.window?.title="Hill Top App: Teachers"

    }
    override func viewWillAppear() {
    including.displayHeader(wv)
    including.setBackground(self.view)
    }
    override func prepare(for segue: NSStoryboardSegue, sender: Any?) {
        self.view.window?.close()
    }
    

}

class studentview: NSViewController {
    @IBOutlet var wv: WKWebView!
    @IBAction func power(_ sender: Any) {
        NSWorkspace.shared().open((NSURL(string: "http://www.powerlibrary.net/Interface/POWER.asp?ID=PL5455&START=List")! as URL))
    }
    @IBAction func PortalS(_ sender: Any) {
        NSWorkspace.shared().open((NSURL(string: "https://webapps.pcrsoft.com/clue/Student-Portal-Login/11552")! as URL))
    }
    @IBAction func Scal(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "http://hilltopprep.org/calendar")! as URL)
    }
    @IBAction func Semail(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "http://mail.google.com/a/hilltopprep.org")! as URL)
    }
    @IBAction func SGC(_ sender: Any) {
        NSWorkspace.shared().open(NSURL(string: "https://classroom.google.com")! as URL)
    }

    override func viewDidLoad() {
        
    }
    override func viewDidAppear() {
        super.viewDidAppear()
        self.view.window?.title="Hill Top App: Students"
        including.setBackground(self.view)
    }
    override func viewWillAppear() {
    including.displayHeader(wv)
    }
    override func prepare(for segue: NSStoryboardSegue, sender: Any?) {
        //self.view.window?.close()
    }
    
}

class schedview: NSViewController {
    override func viewWillAppear() {
        including.setBackground(self.view)
    }
   //static elements
    @IBOutlet var a: NSTextField!
    @IBOutlet var b: NSTextField!
    @IBOutlet var c: NSTextField!
    @IBOutlet var d: NSTextField!
    @IBOutlet var e: NSTextField!
    @IBOutlet var f: NSTextField!
    @IBOutlet var g: NSTextField!
    @IBOutlet var h: NSTextField!
    @IBOutlet var i: NSTextField!
    @IBOutlet var j: NSTextField!
    
    //schedule
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
    
    override func viewDidAppear() {
        super.viewDidAppear()
        self.view.window?.title="Hill Top App: Schedule"
    }
    
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
        let _=setStatic()

    }
    func setStatic() -> Int{
        a.stringValue="8:30-9:10"
        b.stringValue="9:10-9:50"
        c.stringValue="9:50-10:10"
        d.stringValue="10:10-10:50"
        e.stringValue="10:50-11:30"
        f.stringValue="11:30-12:40"
        g.stringValue="12:40-1:20"
        h.stringValue="1:20-2:00"
        i.stringValue="2:00-2:40"
        j.stringValue="2:40-3:20"
        community.stringValue="Community Meeting"
        mentor.stringValue="Mentor Period"
        return 1
    }
    

}

class schedEdit: NSViewController {
 
    @IBOutlet var s1: NSTextField!
    @IBOutlet var s2: NSTextField!
    @IBOutlet var s5: NSTextField!
    @IBOutlet var s4: NSTextField!
    @IBOutlet var s3: NSTextField!
    @IBOutlet var s6: NSTextField!
    @IBOutlet var s7: NSTextField!
    @IBOutlet var s8: NSTextField!
    
    @IBAction func submit(_ sender: Any) {
        NSLog("no error")
        UserDefaults.standard.set(s1.stringValue, forKey: "one")
        UserDefaults.standard.set(s2.stringValue, forKey: "two")
        UserDefaults.standard.set(s3.stringValue, forKey: "three")
        UserDefaults.standard.set(s4.stringValue, forKey: "four")
        UserDefaults.standard.set(s5.stringValue, forKey: "five")
        UserDefaults.standard.set(s6.stringValue, forKey: "six")
        UserDefaults.standard.set(s7.stringValue, forKey: "seven")
        UserDefaults.standard.set(s8.stringValue, forKey: "eight")
    }
    
    override func viewDidAppear() {
        super.viewDidAppear()
        self.view.window?.title="Hill Top App: Edit Schedule"
    }
    
    override func viewDidLoad() {
    
    //UserDefaults.standard.set(s1.stringValue, forKey: "one")
        
        
    }


    
    
}
//

