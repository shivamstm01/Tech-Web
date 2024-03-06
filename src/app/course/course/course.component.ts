import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  VideoPath=['pexels_videos_4409 (1080p).mp4','human_feeding_the_little_squirrel (Original).mp4'];

  constructor() { }

  ngOnInit(): void {
  }
 
}
