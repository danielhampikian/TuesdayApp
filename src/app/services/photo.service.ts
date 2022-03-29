import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import {Camera, CameraResultType, CameraSource, Photo} from '@capacitor/camera';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor() { }

  public async addNewPhoto() {
    const captPic = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 100
    });
  }
}
