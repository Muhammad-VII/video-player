import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { BitrateOptions } from '@videogular/ngx-videogular/core';

@Component({
  selector: 'app-hls',
  templateUrl: './hls.component.html',
  styleUrls: ['./hls.component.scss'],
})
export class HlsComponent implements AfterViewInit {
  @ViewChild('videoPlayer') private videoElementRef!: ElementRef;
  videoElement!: HTMLVideoElement;
  url: string =
    '../../../../assets/2c377df2-e67b-4923-b2b9-a716485f3bf9/index.m3u8';
  bitrates: BitrateOptions[] = [
    {
      qualityIndex: 0,
      width: 426,
      height: 240,
      bitrate: 10000,
      mediaType: 'm3u8',
      label: '240p',
    },

    {
      qualityIndex: 1,
      width: 640,
      height: 360,
      bitrate: 420000,
      mediaType: 'm3u8',
      label: '360p',
    },

    {
      qualityIndex: 2,
      width: 842,
      height: 480,
      bitrate: 680000,
      mediaType: 'm3u8',
      label: '480p',
    },

    {
      qualityIndex: 3,
      width: 1280,
      height: 720,
      bitrate: 1256000,
      mediaType: 'm3u8',
      label: '720p',
    },

    {
      qualityIndex: 4,
      width: 1920,
      height: 1080,
      bitrate: 2000000,
      mediaType: 'm3u8',
      label: '1080p',
    },
  ];

  ngAfterViewInit(): void {
    // this.videoElement = this.videoElementRef?.nativeElement;
    // if (Hls.isSupported()) {
    //   const hls = new Hls();
    //   hls.loadSource('../../../../assets/2c377df2-e67b-4923-b2b9-a716485f3bf9/1080p.m3u8');
    //   hls.attachMedia(this.videoElement);
    //   hls.on(Hls.Events.MANIFEST_PARSED,  () => {
    //     this.videoElement.play();
    //   });
    // }
    // else if (this.videoElement.canPlayType('application/vnd.apple.mpegurl')) {
    //   this.videoElement.src = '../../../../assets/2c377df2-e67b-4923-b2b9-a716485f3bf9/1080p.m3u8';
    // }
  }
}
