import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  VideoPaths = ['pexels_videos_4409 (1080p).mp4', 'human_feeding_the_little_squirrel (Original).mp4'];

  videos = [
    { path: 'pexels_videos_4409 (1080p).mp4', description: 'Description for video 1' },
    { path: 'human_feeding_the_little_squirrel (Original).mp4', description: 'Description for video 2' },
    { path: 'pexels_videos_4409 (1080p).mp4', description: 'Description for video 3' },
    { path: 'human_feeding_the_little_squirrel (Original).mp4', description: 'Description for video 4' },
    { path: 'pexels_videos_4409 (1080p).mp4', description: 'Description for video 5' },
    { path: 'human_feeding_the_little_squirrel (Original).mp4', description: 'Description for video 5' },
    { path: 'pexels_videos_4409 (1080p).mp4', description: 'Description for video 3' },
    { path: 'human_feeding_the_little_squirrel (Original).mp4', description: 'Description for video 6' }
];

  
  constructor() { }

  ngOnInit(): void {
  }
  getVideoDescription(videoPath: string): string {
    switch (videoPath) {
        case 'pexels_videos_4409 (1080p).mp4':
            return 'Description for video 1';
        case 'human_feeding_the_little_squirrel (Original).mp4':
            return 'Description for video 2';
        default:
            return 'No description available';
    }
}
 
}
