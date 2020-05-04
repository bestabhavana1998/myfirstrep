import React from 'react';
var username=123;
var password="xyz";
function Login(){
return(
<div>
    <table>
        <tr>
            <td>UserName:</td>
            <td>{username}</td>
        </tr>
        <tr>
            <td>Password:</td>
            <td>{password}</td>
        </tr>
        </table>
        <button>Submit</button>
        <button>Cancel</button>
    </div>
);
}

export default Login;