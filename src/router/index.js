import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../views/Dashboard.vue'
import Employee from '../views/employee/Employee'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/employees',
    name: 'Employee',
    component: Employee
  },
  {
    path : '/employees/create',
    name: 'employee.add',
    component: () => import('../views/employee/AddEmployee.vue'),
    children : [
      {
          path: '/employees/create/employee-details',
          name : 'employee.create.details',
          component: () => import('../views/employee/steps/EmployeeDetail.vue') 
      },
      {
        path: '/employees/create/personal-information',
        name : 'employee.create.personal',
        component: () => import('../views/employee/steps/PersonalInformation.vue') 
      },
      {
        path: '/employees/create/work-information',
        name : 'employee.create.job',
        component: () => import('../views/employee/steps/WorkInformation.vue') 
      },
      {
        path: '/employees/create/education',
        name : 'employee.create.education',
        component: () => import('../views/employee/steps/Education.vue') 
      },
      {
        path: '/employees/create/work-experience',
        name : 'employee.create.work',
        component: () => import('../views/employee/steps/WorkExperience.vue') 
      }
    ]
  },
  {
    path : '/departments',
    name: 'Departments',
    component: () =>
      import("../views/settings/Department.vue"),
  },
  {
    path : '/designations',
    name : 'Designations',
    component: () => import('../views/settings/Designation.vue')
  },
  {
    path : '/employee-types',
    name : 'Employee Types',
    component: () => import('../views/settings/EmployeeType.vue')
  },
  {
    path : '/employee-statuses',
    name : 'Employee Statuses',
    component: () => import('../views/settings/EmployeeStatus.vue')
  },
  {
    path : '/employees/:employeeId',
    name : 'employee.show',
    component : () => import('../views/employee/ShowEmployee.vue'),
    children: [
      {
        path: '/employees/:employeeId/personal-information',
        name : 'employee.show.personal',
        component: () => import('../views/employee/tabs/PersonalInformation.vue') 
      },
      {
        path: '/employees/:employeeId/work-information',
        name : 'employee.show.job',
        component: () => import('../views/employee/tabs/WorkInformation.vue') 
      },
      {
        path: '/employees/:employeeId/education',
        name : 'employee.show.education',
        component: () => import('../views/employee/tabs/Education.vue') 
      },
      {
        path: '/employees/:employeeId/work-experience',
        name : 'employee.show.work',
        component: () => import('../views/employee/tabs/WorkExperience.vue') 
      },
      {
        path: '/employees/:employeeId/emergency-contact',
        name : 'employee.show.emergency',
        component: () => import('../views/employee/tabs/Contact.vue') 
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router