import { NgModule } from '@angular/core'; 
import {Routes, RouterModule } from '@angular/router'; 
import { AboutComponent } from './about/about.component';
import {CategoriasComponent} from './categorias/categorias.component';
import {HomeComponent} from './home/home.component';


const routes:Routes = [
    {
        path:'home',
        component: HomeComponent
    },
    { 
        path: 'categorias',
        component: CategoriasComponent 
    }, 
    { 
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { 
        path: 'about', 
        component: AboutComponent
    },
]; 

@NgModule({ 
    imports: [RouterModule.forRoot(routes)], 
    exports: [RouterModule] 
})

export class AppRoutingModule {}