import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoteCardsComponent } from './note-cards/note-cards.component';
import { NoteCreatorComponent } from './note-creator/note-creator.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UserComponent } from './user/user.component';
import { NewNote } from './note-cards/new-note.model';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NoteCardsComponent,
    NoteCreatorComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatInputModule,
    FlexLayoutModule,
    MatExpansionModule
  ],
  providers: [NewNote],
  bootstrap: [AppComponent]
})
export class AppModule { }
