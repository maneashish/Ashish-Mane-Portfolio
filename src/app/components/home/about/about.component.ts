import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  technologies = [
    "Angular",
    "HTML5",
    "CSS",
    "Bootstrap",
    "JavaScript",
    "TypeScript",
    "jQuery",
    "MongoDB",
    "Node.js",
    "Kendo UI",
    "Responsive design",
    "Visual Studio",
    "Postman",
    "Unit Testing (Karma, Jasmine)",
    "Git",
    "GitHub",
    "Bitbucket",
    "Sourcetree",
    "Agile methodologies",
    "Jira",
    "RESTful APIs",
    "JSON",
    "MVC design pattern",
    "Single Page Applications (SPAs)",
    "Problem-solving skills",
  ];
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
