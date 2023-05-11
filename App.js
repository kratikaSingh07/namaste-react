/*
*   <div id = "parent">
        <div id ="child">
            <h1>Hello world from h1</h1>
            <h2>Hello world from h2</h2>
    *       </div>
    *   <div id = "child2">
            <h1>Hello world from h1</h1>
            <h2>Hello world from h2</h2>
    *   </div>
    </div>
*
*/
import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", {id:"parent"}, 
                [React.createElement("div", {id:"child1"},
                [React.createElement("h1", {}, "Hello world from h1"),
                 React.createElement("h2", {}, "Hello world from h2")]),

                 React.createElement("div", {id:"child2"},
                [React.createElement("h1", {}, "Hello world from h1"),
                 React.createElement("h2", {}, "Hello world from h2")])
                ]                
)

// const heading = React.createElement
//                 ("h1",
//                 {id: "heading", class:"heading-class"},
//                  "Hello from new file");
                 // This heading is an object. If you will console.log(heading) it is going to return an object
const rootElement = ReactDOM.createRoot(document.getElementById("root"));
//rootElement.render(heading);
rootElement.render(parent);
// this render method is responsible for taking this heading object and putting it inside the dom