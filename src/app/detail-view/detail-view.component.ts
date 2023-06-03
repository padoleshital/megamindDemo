import { Component, Input, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { DetailService } from 'src/service/detail.service'

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.css']
})
export class DetailViewComponent implements OnInit {
  detailslist: any
  selectedSamplingTime: any
  myForm!: FormGroup
  submitted = false

  @Input() sammaryData: any
  constructor (private getservice: DetailService, private fb: FormBuilder) {
    this.myForm = this.fb.group({
      ProjectName: ['', [Validators.required]],
      constructionCount: ['', [Validators.required]],
      Countruction: [false, [Validators.required]],
      lenghtRoad: ['', [Validators.required]]
    })
  }
  ngOnInit (): void {
    this.getDetail()
    console.log(this.sammaryData)
  }
  get f () {
    return this.myForm.controls
  }
  getDetail () {
    this.getservice.getDetails().subscribe(res => {
      this.detailslist = res
      this.myForm.patchValue(res)
      console.log(this.detailslist, 'data', res)
      res.forEach((element: any) => {})
    })
  }

  getProperty (properties: any[], label: string): any {
    const property = properties.find(prop => prop.Label === label)
    return property ? property.Value : ''
  }
  selectSamplingTime (samplingTime: string, dataItem: any) {
    this.selectedSamplingTime = samplingTime
    console.log(dataItem, '55')
    console.log(dataItem.Properties.find((x: any) => x.Label == 'Project Name'))
    let projectname = dataItem.Properties.find(
      (x: any) => x.Label == 'Project Name'
    ).Value
    this.myForm.patchValue({
      ProjectName: projectname
    })

    this.myForm.patchValue({
      constructionCount: dataItem.Properties.find(
        (x: any) => x.Label == 'Construction Count'
      )?.Value
    })

   
  
    this.myForm.patchValue({
      Countruction: dataItem.Properties.find(
        (x: any) => x.Label == 'Is Construction Completed'
      )?.Value
    })

    this.myForm.patchValue({
      lenghtRoad: dataItem.Properties.find(
        (x: any) => x.Label == 'Length of the road'
      ).Value
    })
   
  }

  onSubmit () {
    this.submitted = true
    console.log(this.myForm.value, 'value')
    this.getservice.postDeatils(this.myForm.value).subscribe((data: any) => {
      console.log(data, 'postData')
    })
  }
}
