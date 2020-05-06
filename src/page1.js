import React from "react";
import './App.css';
   import {Link } from "react-router-dom";

    function Page1() {
return (
          <div>
              <h1>Autoparts Ordering</h1>
               <form>
           <p>UserName:<input type="textbox" name="name" /></p>
           <p>Password:<input type="password" name="pass" /></p>
           <Link to="/page2">
              <button >
             LOGIN
            </button>
            </Link>
            </form>
          </div>
        );

    }

    export default Page1;