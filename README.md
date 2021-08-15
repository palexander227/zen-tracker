# Zen Tracker 
A command line driven application for tracking and updating basic company records.

## Description
This application makes basic use of javascript, node, express and mysql to allow a
user to check and update records for a typical company, or small business. We use a simple 
MySql database structure named zen_db. Zen_db consists of three tables:

**Department**

 A table with an identification number for the department and 
    a *name* field for the name of the department. In the *seeds* file we have listed
    a Sales department, Engineering, Research and Development and Human Resources.

***
![View of departments display](img/departments%20view.png)
***



**Roles**

  This table lists the identification number for a specific role in a given department. We also list
    the *title*, *salary*, and *name of the department* for that role. In our sample data two levels of engineer
    are featured and a manager of sales.

***
![View of roles display](img/roles%20view.png)
***



**Employees** 

  The employees table features the employee id, first and last name, title, department, salary and the employee's 
    manager by name. 

***
![View of employees display](img/view%20of%20employees%20display.png)
***

## Usage

A short video of this app in use is available here ---> [link to loom video](https://www.loom.com/share/fe1039f7966e44c99fa2912fe08ae85e)

I demo all the features of this program in this video, but it is 7 minutes or so. I recommend setting the playback on 1.5x or 2x if you want to just get the idea. 

## Installation

This is pretty much a stand alone app. If you have node installed along with the package dependencies, you can simply clone this repo and hit npm run run-all. That will create the database for you and seed it with the abovementioned placeholder data. You can then experiment with defining your own data bases and and data sets as indicated by the sample user tables. 
