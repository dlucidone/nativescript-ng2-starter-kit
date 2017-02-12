"use strict";
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CollectionsComponent = (function () {
    function CollectionsComponent(router) {
        this.router = router;
    }
    CollectionsComponent.prototype.ngOnInit = function () {
    };
    CollectionsComponent.prototype.cardView = function () {
        this.router.navigate(["cardview"]);
    };
    return CollectionsComponent;
}());
CollectionsComponent = __decorate([
    core_1.Component({
        selector: "ns-items",
        templateUrl: "pages/Collection/collections.component.html",
        styleUrls: ["pages/Collection/collections.css"],
    }),
    __metadata("design:paramtypes", [router_1.Router])
], CollectionsComponent);
exports.CollectionsComponent = CollectionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29sbGVjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29sbGVjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQXlDO0FBT3pDLElBQWEsb0JBQW9CO0lBRzdCLDhCQUFvQixNQUFhO1FBQWIsV0FBTSxHQUFOLE1BQU0sQ0FBTztJQUFJLENBQUM7SUFFdEMsdUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBRUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDTCwyQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBWlksb0JBQW9CO0lBTGhDLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsNkNBQTZDO1FBQzFELFNBQVMsRUFBRSxDQUFDLGtDQUFrQyxDQUFDO0tBQ2xELENBQUM7cUNBSTZCLGVBQU07R0FIeEIsb0JBQW9CLENBWWhDO0FBWlksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL0NvbGxlY3Rpb24vY29sbGVjdGlvbnMuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL0NvbGxlY3Rpb24vY29sbGVjdGlvbnMuY3NzXCJdLFxufSlcbmV4cG9ydCBjbGFzcyBDb2xsZWN0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjpSb3V0ZXIpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7ICAgXG4gICAgfVxuXG4gICAgY2FyZFZpZXcoKVxuICAgIHtcbiAgICBcdHRoaXMucm91dGVyLm5hdmlnYXRlKFtcImNhcmR2aWV3XCJdKTtcbiAgICB9XG59XG4iXX0=