import { Component } from "@angular/core";

@Component( {
    selector: 'app-course-list',
    templateUrl: '/course-list.component.html'
})


export class CourseListComponent {

    oneWayDataBinding='lucas'
    twoWayDataBinding="cassio"

}