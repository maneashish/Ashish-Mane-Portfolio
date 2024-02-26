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
    "Node.js",
    "CSS",
    "Bootstrap",
    "jQuery",
    "MongoDB",
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "Kendo UI",
    "Responsive design",
    "Cross-browser compatibility",
    "MS Office suite",
    "Visual Studio",
    "Sublime Text Editor",
    "Photoshop",
    "Postman",
    "Unit Testing (Karma, Jasmine)",
    "Integration Testing",
    "End-to-End Testing",
    "Git",
    "Bitbucket",
    "Sourcetree",
    "GitHub",
    "Agile methodologies",
    "Jira",
    "RESTful APIs",
    "JSON",
    "MVC design pattern",
    "Single Page Applications (SPAs)",
    "Project management",
    "Problem-solving skills",
    "Strong communication skills"
  ];
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
