import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/services/country/country.service';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.css']
})
export class AddCountryComponent implements OnInit {

  constructor(private service : CountryService) { }

  ngOnInit(): void {
  }

  save(country:any) {
    this.service.create(country).subscribe((res)=>{
      window.alert(res);
    })
  }
}
