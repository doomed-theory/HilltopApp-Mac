//
//  credits.swift
//  Hill Top
//
//  Created by Justin Keller on 10/6/17.
//  Copyright © 2017 Justin Keller. All rights reserved.
//

import Foundation
import AppKit

class creditsClass :NSViewController {
    @IBOutlet var myMainMan: NSTextField!
    override func viewWillAppear() {
        super.viewWillAppear()
        myMainMan.stringValue="Justin Keller, C)PTE, ACTC, ACMT, ACSP -- Lead Developer, Project Manager\n"+"Matthew Kleiner -- Developer\n"+"Ryan Wellock -- Chief Designer"
        
    }
}
