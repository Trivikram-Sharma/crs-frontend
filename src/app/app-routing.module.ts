import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminhomepageGuard } from './guards/adminhomepage/adminhomepage.guard';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ManagerhomepageGuard } from './guards/managerhomepage/managerhomepage.guard';
import { EngineerhomepageGuard } from './guards/engineerhomepage/engineerhomepage.guard';
import { CustomerhomepageGuard } from './guards/customerhomepage/customerhomepage.guard';

const routes: Routes = [
  {path: "",redirectTo: "/login",pathMatch:'full'},
  {path: "login",component:LoginComponent},
  {path: "register",component: RegisterComponent},
  {path: "homepage",
  children: [
    {path: "admin",
    resolve: AdminhomepageGuard,
    component:HomepageComponent},
    {path: "manager",
    resolve: ManagerhomepageGuard,
    component:HomepageComponent},
    {
      path: "engineer",
      resolve: EngineerhomepageGuard,
      component: HomepageComponent
    },
    {
      path: "customer",
      resolve: CustomerhomepageGuard,
      component: HomepageComponent
    }
  ]
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
