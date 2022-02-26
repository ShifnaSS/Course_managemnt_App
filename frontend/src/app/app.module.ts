import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NotifierModule } from 'angular-notifier';

// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { HomeprofileComponent } from './homeprofile/homeprofile.component';
import { ProfessorhomeComponent } from './professorhome/professorhome.component';
import { StudentregisterComponent } from './studentregister/studentregister.component';
import { ProfessorregisterComponent } from './professorregister/professorregister.component';
import { CourseregisterComponent } from './courseregister/courseregister.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { ApplicationsComponent } from './applications/applications.component';
import { StudentappComponent } from './studentapp/studentapp.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthService } from './auth.service';
import { MainService } from './main.service';
import { TokeninterceptorService } from './tokeninterceptor.service';
import { AuthGuard } from './auth.guard';
import { NotifictaionsComponent } from './notifictaions/notifictaions.component';
import { FacultiesComponent } from './faculties/faculties.component';
import { AppstatusComponent } from './appstatus/appstatus.component';

// import { Ng2TelInput } from 'ng2-tel-input';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HomeprofileComponent,
    ProfessorhomeComponent,
    StudentregisterComponent,
    ProfessorregisterComponent,
    CourseregisterComponent,
    LoginComponent,
    SignupComponent,
    MycoursesComponent,
    ApplicationsComponent,
    StudentappComponent,
    CoursesComponent,
    NotifictaionsComponent,
    FacultiesComponent,
    AppstatusComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NotifierModule
    // BrowserAnimationsModule
    // Ng2TelInput
  ],
  providers:  [AuthService,MainService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokeninterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
