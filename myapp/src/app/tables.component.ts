import { Component } from '@angular/core';
import { tableDetails } from './tables';

@Component({
    selector: 'app-table',
    template: `
    <h1>Table Assignment</h1><br>
    <h2>User Record</h2>
    <table class="table table-bordered table-hover">
    <thead class="thead-dark">
    <tr>
    <th>
    UserName
    </th>
    <th>
    Password
    </th>
    <th>
    E-Mail
    </th>
    <th>
    Address
    </th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor='let user of userRecord'>
    <td>{{user.username}}</td>
    <td>{{user.password}}</td>
    <td>{{user.email}}</td>
    <td>{{user.address}}</td>
    </tr>
    </tbody>
    </table>
    <h2>Course Record</h2>
    <table class="table table-bordered table-hover">
    <thead class="thead-dark">
    <tr>
    <th>
    Author
    </th>
    <th>
    Title
    </th>
    <th>
    Price
    </th>
    <th>
    Published Date
    </th>
    </tr>
    </thead>
    <tbody>
    <tr *ngFor='let course of courseRecord'>
    <td>{{course.author}}</td>
    <td>{{course.title}}</td>
    <td>{{course.price}}</td>
    <td>{{course.publishedDate}}</td>
    </tr>
    </tbody>
    </table>
    `,
    styles:[`
    h2{
        text-decoration: underline;
    }
    table{
        width: 90%;
        margin: 30px 30px 30px 30px;
      }
    td{
        font-size: 12px;
    }
    thead{
        font-size: 16px;
    }  
    `]
})

export class TablesComponent{
    userRecord:Array<object>;
    courseRecord:Array<object>;
    constructor(private tables:tableDetails){
        this.userRecord = tables.getUserRecord();
        this.courseRecord = tables.getCourseRecord();
    }
}