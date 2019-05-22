//this is a simple example of how react can be used to create components of what would normally be separated in html and css

//-------------------------------------------------in javascript file
function Person(props) { //props is the concept of arguments in the component
    return (
        <div className="person"> 
            <h1>{props.name}</h1>
            <p>{props.age}</p>
        </div>
    );
    // class is replaced by className as it is the javascript form
}

//name and age are sent to props as arguments
ReactDOM.render(<Person name="Somebody" age="00" />, document.querySelector('#p1')); // renders a javascript function as a real DOM
//telling react that I want to render the Person function in the div with id of p1

//ReactDOM.render(<Person name="Somebody Else" age="99" />, document.querySelector('#p1'));
//to limit multiple ReactDOM.render calls do as below

var app = (
    <div>
        <Person name="Somebody" age="00" />
        <Person name="Somebody Else" age="99" />
    </div>
);

ReactDOM.render(app, document.querySelector('#app'));


//------------------------------------------------in html file
<div id="p1"></div>
<div id="p2"></div>

<div id="app"></div>

