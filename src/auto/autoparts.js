import React from 'react';
class Autoparting extends  React.Component{
    render() {
        return (
            <div>
                <h3>The autoparts available in AutoZone are:</h3>
              <ul>
                <h4>Car body and main part:</h4>
                <li>Body components, including Trim</li>
                <li>Doors</li>
                <li>Windows</li>
                </ul>
                <ul>
                <h4>Low voltage/auxilary electrical system and electronics</h4>
                <li>Audio/video devices</li>
                <li>Cameras</li>
                <li>Ignition system</li>
                <li>sensors</li>
                <li>Electrical switches</li>
                </ul>
                <ul>
                <h4>Power-train and chassis</h4>
                <li>Braking system</li>
                <li>Exhaust system</li>
                <li>Fuel supply system</li>
                </ul>
            </div>
        );
    }
}
export default Autoparting;