import {Component} from 'angular2/core';
import {CourseService} from './course.service';
import {AutoGrowDirective} from './auto-grow.directive';
import {HighlightMeDirective} from './highlightMe.directive';

@Component({
	selector: 'courses',
	template: `
		<h2>Courses</h2>
		{{ title }} 
		<input type="text" autoGrow />
		<ul>
			<li *ngFor="#course of courses">
			{{ course }}
			</li>
		</ul>
		<h3 highlightMe>choose you fav course!</h3>
	`,
	providers: [CourseService],
	directives: [AutoGrowDirective, HighlightMeDirective]
})
export class CoursesComponent {
	courses: string[] 
	title = "The title of courses page";
	
	constructor(courseService: CourseService) {
		this.courses = courseService.getCourses();
	}
}