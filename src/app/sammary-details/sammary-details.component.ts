import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DetailService } from 'src/service/detail.service';

@Component({
  selector: 'app-sammary-details',
  templateUrl: './sammary-details.component.html',
  styleUrls: ['./sammary-details.component.css']
})
export class SammaryDetailsComponent implements OnInit {
  detailslist:any;
 
   
  constructor(private getservice :DetailService ) { }

 
  ngOnInit(): void {
    this.getDetail()
  } 
  getDetail()
  {
    this.getservice.getDetails().subscribe((res)=>{
      this.detailslist = res;
      console.log(this.detailslist,"data")
      // this.detailslist = res.Detas; 
      // this.dataSource.data = this.detailslist;
     },)    
}

getProperty(properties: any[], label: string): any {
  const property = properties.find(prop => prop.Label === label);
  return property ? property.Value : '';
}



getPropertyByLabel(properties: any[], label: string) {
 
  return properties.find(property => property.Label === label);
}



}
