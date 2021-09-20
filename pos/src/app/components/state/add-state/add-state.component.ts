import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country/country.service';
import { StateService } from 'src/app/services/state/state.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.css']
})
export class AddStateComponent implements OnInit {

  public country : any=[];
  constructor(private service : StateService, private countryService : CountryService) { }

  ngOnInit(): void {
    this.countryService.get().subscribe((res)=>{
      this.country = res;
    })
  }
  save(state:any) {
    this.service.create(state).subscribe((res)=>{
      window.alert(res);
    })
  }
}
