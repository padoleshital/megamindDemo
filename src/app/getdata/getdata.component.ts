import { Component, OnInit } from '@angular/core';
import { DetailService } from 'src/service/detail.service';

@Component({
  selector: 'app-getdata',
  templateUrl: './getdata.component.html',
  styleUrls: ['./getdata.component.css']
})
export class GetdataComponent implements OnInit {
  

  constructor(private getservice :DetailService ) { }

  ngOnInit(): void {
    this.getDetail()
  }

  getDetail()
  {
    this.getservice.getDetails().subscribe((res)=>{
      console.log(res,"data")
    })
  }

}
