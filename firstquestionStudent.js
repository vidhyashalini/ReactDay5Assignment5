import React from 'react';
import { Link } from 'react-router-dom';
import './Student.css';

export default  function Student()
{  
    let student =  [
             {  studentno : 10256, sname:"Scott", sage: 20, deptno : 10  },
             {  studentno : 10257, sname:"Smith", sage: 21, deptno : 20  },
             {  studentno : 10258, sname:"Sandy", sage: 20, deptno : 30  },
             {  studentno : 10259, sname:"Sam", sage: 20, deptno : 40  },
             {  studentno : 10256, sname:"Scott", sage: 21, deptno : 10  },
             {  studentno : 10257, sname:"Smith", sage: 21, deptno : 20  },
             {  studentno : 10258, sname:"Sandy", sage: 20, deptno : 30  },
             {  studentno : 10259, sname:"Sam", sage: 21, deptno : 40  },
        ];
 

    
 
        var result = student.map( (item, index) => 
            <tr className={ index % 2 == 0?"c2":"c3" } >  
               <td> {item.studentno}  </td> 
               <td> {item.sname}  </td> 
               <td> {item.sage}  </td> 
               <td> {item.deptno}  </td> 
               <td align='center'>
                        <Link  to={"/Details/" + item.studentno}>Details</Link>
               </td>
            </tr>);

      return (
        <div>             
            <h3>All Student Details</h3>
            <table  border="2"  cellpadding="5"  cellSpacing="0" width="700">
                <tr className="c1">
                    <th>Student Number</th>
                    <th>Student Name</th>
                    <th>Student Age</th>
                    <th>Student Deptno</th>    
                    <th></th>                
                </tr>
                {result}
            </table>
        </div>  );
    }
 

 