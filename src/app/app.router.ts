// Angular Core
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Page Components
import { AdminComponent } from './pages/admin/admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AboutComponent } from './pages/about/about.component';

// Guards
import { AuthGuard } from './guards/auth.guard';

// Routes
const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }