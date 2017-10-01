//
//  Include.swift
//  Hill Top
//
//  Created by Justin Keller on 10/1/17.
//  Copyright © 2017 Justin Keller. All rights reserved.
//

import Foundation
import WebKit


class constants {
static let appName="Hill Top App"
}
class including {
    static func displayHeader(_ wv:WKWebView) {
        do {
            guard let filePath = Bundle.main.path(forResource: "header", ofType: "html", inDirectory:"web/html")
                else {
                    // File Error
                    print ("File reading error")
                    return
            }
            
            let contents =  try String(contentsOfFile: filePath, encoding: .utf8)
            let baseUrl = URL(fileURLWithPath: filePath)
            wv.loadHTMLString(contents as String, baseURL: baseUrl)
        }
        catch {
            print ("File HTML error")
        }
        
    }
    static func setBackground(_ view:NSView) {
        view.wantsLayer = true
        
        let image = NSImage(named: "hilltop2.jpg")
        view.layer?.contents = image
    }
    }
/*<div id="welcome">
<img id="logo" width="64" height="64" src="../res/logo.png">
<h1 id="school-name-header">Hill Top Preparatory School</h1>
<hr>
<h3>Welcome!</h3>
</div> */
