import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./componentes/paginas/about/about.component";
import { BlogComponent } from "./componentes/paginas/blog/blog.component";
import { ContactComponent } from "./componentes/paginas/contact/contact.component";
import { MainComponent } from "./componentes/paginas/main/main.component";
import { MasonryComponent } from "./componentes/paginas/masonry/masonry.component";


const routes: Routes = [
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'main', component: MainComponent},
    {path: 'masonry', component: MasonryComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'main'}
]

@NgModule ({

    imports: [RouterModule.forRoot(routes, {
        useHash: true,
        scrollPositionRestoration: 'enabled'
    })],
    exports: [RouterModule]

})

export class AppRoutingModule{

}