import { Component } from "@angular/core";

@Component({
    selector: "ns-app",
    moduleId: module.id,
    template: `<page-router-outlet></page-router-outlet>
    <Label visibility="collapsed">
    </Label>`
})
export class AppComponent { }
