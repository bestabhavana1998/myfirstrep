import React from "react";

   function Page2() {

        return (
          <div>
            <input type="text" placeholder="Search.." name="search"></input>
            <br></br>
           <sectiom>
             <p>My Address:</p>
              <p>JP Nagar, 2nd cross road, BTM Layout, Banglore</p>
            </sectiom>
            <b><h4>Frequently ordered items</h4></b>
            <div class="list-group">
  <a class="list-group-item list-group-item-action">Brakes</a>
   <a class="list-group-item list-group-item-action">Axles</a>
  <a class="list-group-item list-group-item-action">Battery</a>
  <a class="list-group-item list-group-item-action">Fuel Injector</a>
</div>
<h4>Privilege Status</h4>
            <div class="btn-group">
  <button>Platinum</button>
  <button>Gold</button>
  <button>Silver</button>
</div>
           <h3>Employee details</h3>
            <table class="table">
    <thead>
      <tr>
        <th>Key ID</th>
        <th>Name</th>
        <th>DOB</th>
        <th>Position</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>ABC</td>
        <td>10/10/2020</td>
        <td>Manager</td>
      </tr>
      <tr>
        <td>2</td>
        <td>John</td>
        <td>10/10/2020</td>
        <td>Manager</td>
      </tr>
      <tr>
        <td>3</td>
        <td>Michael</td>
        <td>10/10/2020</td>
        <td>Manager</td>
      </tr>
      <tr>
        <td>4</td>
        <td>Michael</td>
        <td>10/10/2020</td>
        <td>Manager</td>
      </tr>
      <tr>
        <td>5</td>
        <td>Michael</td>
        <td>10/10/2020</td>
        <td>Manager</td>
      </tr>
      <tr>
        <td>6</td>
        <td>Michael</td>
        <td>10/10/2020</td>
        <td>Manager</td>
      </tr>
    </tbody>
  </table>
  
      </div>
        );

    }

    export default Page2;