import React from 'react';
var id=123;
var name="xyz";
var designation="Associate Consultant";
function Employee(){
return(
<div>
    <table>
        <tr>
            <td>Empl ID:</td>
            <td>{id}</td>
        </tr>
        <tr>
            <td>Name:</td>
            <td>{name}</td>
        </tr>
        <tr>
            <td>Designation:</td>
            <td>{designation}</td>
        </tr>
    </table>
</div>
);
}

export default Employee;