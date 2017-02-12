import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { registerElement } from "nativescript-angular/element-registry";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

@Component({
    selector: "cardView",
    templateUrl: "pages/Collection/CardView/cardView.component.html",
    styleUrls: ["pages/Collection/CardView/cardView.css"],
})
export class CardViewComponent implements OnInit {
    

    constructor(private router:Router,private page: Page) { }

    ngOnInit(): void {  
    
    }

  
}
