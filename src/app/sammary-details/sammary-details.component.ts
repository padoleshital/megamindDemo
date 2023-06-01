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

  columns = [
    { header: 'SamplingTime', dataKey: 'SamplingTime' },
    { header: 'Project Name', dataKey: 'ProjectName' },
    { header: 'Is Construction Completed', dataKey: 'IsConstructionCompleted' },
    { header: 'Length of the road', dataKey: 'Lengthoftheroad' }    
  ];  
  ngOnInit(): void {
    this.getDetail()
  } 
  getDetail()
  {
    this.getservice.getDetails().subscribe((res)=>{
      console.log(res,"data")  
      this.detailslist = res.Detas; 
      this.dataSource.data = this.detailslist;
    })    
}

dataSource = new MatTableDataSource<any>();
displayedColumns: string[] = this.columns.map(column => column.dataKey);


}
