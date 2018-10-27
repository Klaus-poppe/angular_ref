import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name;
  age ;
  choice;
  info = false;
  warn = false; 
  title = 'Pandey ka randikhana';
  choices = ['randi' , 'girlfriend' , 'boyfriend' , 'One night' , 'apna haath'];
  addBtn = false ;
  text ='';

  showDetails()
  {
    if ( this.name != null  || this.age != null  || this.choice != null )
    {
      this.info = true;
      this.warn = false;
    }
   
    else
    {
      this.warn =true ;
      this.info = false ;
    }
  }

  onUpdate(event : Event)
  {
    this.text = (<HTMLInputElement>event.target).value;
    this.addBtn = true ;
    
  }

  addToList()
  {
    this.choices.push(this.text);
    alert ("list updated");
  }

}
