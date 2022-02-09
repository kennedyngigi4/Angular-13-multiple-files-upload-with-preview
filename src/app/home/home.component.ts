import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public selectedFiles: Array<any> = [];
  public imagepath: Array<string> = [];

  constructor() { }

  ngOnInit(){
  }

  getFiles(event: any){
    const images = event.target.files;

    for(let i = 0; i<images.length; i++){
      this.selectedFiles.push(images[i]);

      const reader = new FileReader();
      reader.onload = () => {
        this.imagepath.push(reader.result as string)
      }

      reader.readAsDataURL(images[i]);

    }

  }

  removeImg(i: any){
    if(i > -1){
      this.imagepath.splice(i, 1);
      this.selectedFiles.splice(i, 1);
      
    }
    
  }

  uploadFiles(){
    if(this.selectedFiles.length == 0){
      alert('Please select an image');
    } else {
      //Upload your images here to through the api endpoint
      //its advisable that you use a service to access the api
      alert('Uploading images ...');
    }
  }

 

}
