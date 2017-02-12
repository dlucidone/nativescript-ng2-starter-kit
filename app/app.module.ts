import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {ModalDialogService, ModalDialogOptions, ModalDialogHost} from "nativescript-angular/modal-dialog";
import { AppComponent } from "./app.component";
import { registerElement } from "nativescript-angular/element-registry";
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform";
import { Routes } from "@angular/router";

import { routes, navigatableComponents } from "./app.routing";

registerElement("DropDown", () => require("nativescript-drop-down/drop-down").DropDown);
registerElement('CardView', () => require("nativescript-cardview").CardView);

registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);

registerElement("Tags", () => require("nativescript-tag").Tags);
registerElement("TagGroup", () => require("nativescript-tag").TagGroup);
 var LoadingIndicator = require("nativescript-loading-indicator").LoadingIndicator;

registerElement("CircleProgressBar", () => require("nativescript-progressbar").CircleProgressBar);
registerElement("Fab", () => require("nativescript-floatingactionbutton").Fab);

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
       NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptRouterModule.forRoot(routes)
    ],
    declarations: [
      AppComponent,
    ...navigatableComponents
    ],
    providers:[ModalDialogService],
    entryComponents: [],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule {}

