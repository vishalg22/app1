import {Http} from "@angular/http";
import { FormsModule } from '@angular/forms';
import { Calendar } from '@ionic-native/calendar';

import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Storage } from '@ionic/storage';
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { StudentsPage } from '../pages/students/students';
import {EventsPage} from '../pages/events/events';
import {HomeworkPage} from '../pages/homework/homework';
import {FacilitiesPage} from '../pages/facilities/facilities';
import {TeachersPage} from '../pages/teachers/teachers';
import {MediaPage} from '../pages/media/media';
import {SchedulePage} from '../pages/schedule/schedule';
import {ContactusPage} from '../pages/contactus/contactus';
import {NoticesPage} from '../pages/notices/notices';
import {AddnoticePage} from '../pages/addnotice/addnotice';
import {AddstudentPage} from '../pages/addstudent/addstudent';
import {AddteacherPage} from '../pages/addteacher/addteacher';
import {NoticePage} from '../pages/notice/notice';
import {HomeworklistPage} from '../pages/homeworklist/homeworklist';



//import { Page1 } from '../pages/page1/page1';
//import { Page2 } from '../pages/page2/page2';

import {Users} from '../providers/users';
import {Comman} from '../providers/comman';
import {Classes} from '../providers/classes';
import {HomeworkService} from '../providers/homework-service';
import {NoticesService} from '../providers/notices-service';
import {Media} from '../providers/media-service';
import {Hepldesk} from '../providers/helpdesk-service';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http, "i18n/", ".json");
}

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    DashboardPage,
    StudentsPage,
    HomeworkPage,
    EventsPage,
    FacilitiesPage,
    TeachersPage,
    SchedulePage,
    MediaPage,
    AddnoticePage,
    AddstudentPage,
    ContactusPage,
    AddteacherPage,
    NoticesPage,
    NoticesPage,
    NoticePage,
    HomeworklistPage,
    HomeworkPage

  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule,
    TranslateModule.forRoot({
    loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [Http]
          }

    })
  ],
  exports:[
	TranslateModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    DashboardPage,
    StudentsPage,
    HomeworkPage,
    EventsPage,
    FacilitiesPage,
    TeachersPage,
    SchedulePage,
    MediaPage,
    AddnoticePage,
    AddstudentPage,
    ContactusPage,
    AddteacherPage,
    NoticesPage,
    NoticePage,
    HomeworklistPage,
    HomeworkPage
  ],
  providers: [Storage,Calendar,Users,Comman,Classes,HomeworkService,NoticesService,Media,Hepldesk,{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
