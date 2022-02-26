import { ApplicationModule, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications.component';
import { AppstatusComponent } from './appstatus/appstatus.component';
import { CourseregisterComponent } from './courseregister/courseregister.component';
import { CoursesComponent } from './courses/courses.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { HomeComponent } from './home/home.component';
import { HomeprofileComponent } from './homeprofile/homeprofile.component';
import { LoginComponent } from './login/login.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { NotifictaionsComponent } from './notifictaions/notifictaions.component';
import { ProfessorhomeComponent } from './professorhome/professorhome.component';
import { ProfessorregisterComponent } from './professorregister/professorregister.component';
import { SignupComponent } from './signup/signup.component';
import { StudentappComponent } from './studentapp/studentapp.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';

const routes: Routes = [{path:'',component:HomeComponent},
{path:'homeprofile',component:HomeprofileComponent},
{path:'professorhome',component:ProfessorhomeComponent},
{path:'studentregister',component:StudentregisterComponent},
{path:'professorregister',component:ProfessorregisterComponent},
{path:'login',component:LoginComponent},
{path:'signup',component:SignupComponent},
{path:'courseregister',component:CourseregisterComponent},
{path:'mycourses',component:MycoursesComponent},
{path:'applications',component:ApplicationsComponent},
{path:'studentapp',component:StudentappComponent},
{path:'courses',component:CoursesComponent},
{path:'notifications',component:NotifictaionsComponent},
{path:'faculties',component:FacultiesComponent},
{path:'appstatus',component:AppstatusComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
