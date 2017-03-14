import { Component } from '@angular/core';
@Component({
    selector: 'modal-demo',
	template: `
	
<div class="container">
  
<div class="container-fluid" >
	<h2>Assignment12.4 (Custom-Pipes Example)</h2>
	<div class="row">
	<div class="col-sm-4"><b>NAME</b></div><div class="col-sm-4"><b>HOBBY'S</b></div><br>
	<div *ngFor="let fr of (friends|filterName) ">
	
	<div class="col-sm-4">{{fr.name}}</div><div class="col-sm-8">{{fr.hobby}}</div>
	</div>
	</div><hr>
	<h2>Assignment12.4 (Built In Pipes Example)</h2>
	<div class="row">
	<div class="col-sm-4"><b>NAME</b></div><div class="col-sm-4"><b>HOBBY'S</b></div><br>
	<div *ngFor="let fr of friends ">
	
	<div class="col-sm-4">{{fr.name | uppercase}}</div><div class="col-sm-8">{{fr.hobby | lowercase}}</div>
	</div>
	</div>
</div>
</div>
`,
})

export class AppComponent{
	
	

friends: any = [
{ name: "Avnesh", hobby: "Coding"},
{ name: "Kaushik", hobby: "Coding" },
{ name: "Archana", hobby: "Cooking" },
{ name: "Piyush", hobby: "Singing" },
{ name: "Archit", hobby: "Sports" },
{ name: "Hema", hobby: "Gossiping" }
]; 

	constructor()
	{
		
	}
}
