

import { CollectionsComponent } from "./pages/Collection/collections.component";
import {CardViewComponent} from "./pages/Collection/CardView/cardView.component";


export const routes = [
  
    { path: "", component: CollectionsComponent },
    { path: "cardview", component: CardViewComponent },
   
    
];

export const navigatableComponents = [
CollectionsComponent,
CardViewComponent,


];