import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: "ns-items",
    templateUrl: "pages/Collection/collections.component.html",
    styleUrls: ["pages/Collection/collections.css"],
})
export class CollectionsComponent implements OnInit {
    

    constructor(private router:Router) { }

    ngOnInit(): void {   
    }

    cardView()
    {
    	this.router.navigate(["cardview"]);
    }
}
