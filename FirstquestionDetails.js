import React  from 'react';
import { Link,  useParams  } from 'react-router-dom';

function Details(_props)
{ 
    const { id }  = useParams();
  
    let studentArray =  [
        {  studentno : 10256, sname:"Scott", sage: 20, deptno : 10  },
        {  studentno : 10257, sname:"Smith", sage: 21, deptno : 20  },
        {  studentno : 10258, sname:"Sandy", sage: 20, deptno : 30  },
        {  studentno : 10259, sname:"Sam", sage: 20, deptno : 40  }
   ];

   let studentObj =  studentArray.find(item => item.studentno == id); 
 
    return (
    <div>
     <h3>Selected Student Details</h3>       
     <hr/>
     <div>
         Student Number :  {studentObj.studentno}  <br/>
         Student Name :  {studentObj.sname}  <br/>
         Student Age :  {studentObj.sage}  <br/>
         Student Deptno :  {studentObj.deptno}  <br/>  
     </div>
        <hr/>
      <Link  to="/Student">Back to Student</Link> 
    </div> 
    );
   
}  

export default Details;