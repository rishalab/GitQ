var request1 = false;
var request2 = false;
var request3 = false;
var request4 = false;
var request5 = false;

// function reload_server()
// {
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function() 
//     {
//       if (this.readyState == 4 && this.status == 200) 
//       {
//             console.log('Flask reload Completed!'); 
//       }
//     }
//     xhttp.open("POST","https://services.iittp.ac.in/gitq/reload","true");
//     xhttp.setRequestHeader('Content-type', "application/x-www-form-urlencoded");
//     xhttp.send();
// }
function css_change(){
  document.getElementById('f1').style.background = '#feb60a'
  document.getElementById('f2').style.background = '#feb60a'
  

  document.getElementById('f3').style.background = '#ff0062'
  document.getElementById('f4').style.background = '#ff0062'
  
  document.getElementById('f5').style.background = '#44CC11'
  document.getElementById('f6').style.background = '#44CC11'
  document.getElementById('bugs').style.background = '#ff0062'
  document.getElementById('impacted_files').style.background = '#feb60a'              
  document.getElementById('impacted_loc').style.background = '#feb60a'
  document.getElementById('active').style.background =  '#ff0062' 
}
function insight()
{
    var bug_insight = ""; 
    var bugs = document.getElementById('bugs').innerHTML.split(" : ");
    var open_bugs = parseInt(bugs[0]);
    var closed_bugs = parseInt(bugs[1]);
    if(closed_bugs >= (2*open_bugs))
    {   
        bug_insight = `
        <div class="icon icon__safe" style="margin-left: 43rem;" >
        <div class="insight insight__safe">
            Excellent bug handling. Project is safe. 
        </div>
        <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/nolan/64/bug.png"/>
    </div>`;
    }
    else if(closed_bugs < open_bugs)
    {   
        bug_insight = `
        <div class="icon icon__ok" style="margin-left: 43rem;" >
        <div class="insight insight__ok">
            Good bug handling. Good to go about using the project. 
        </div>
        <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/nolan/64/bug.png"/>
    </div>`;
    }
    else 
    {
        bug_insight = `
        <div class="icon icon__danger" style="margin-left: 43rem;">
        <div class="insight insight__danger">
            Poor bug handling - Could you take a step to resolve one of the bugs? 
        </div>
        <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/nolan/64/bug.png"/>
    </div>`;
    }
    var file_insight = "" 
    var ifiles = parseInt(document.getElementById('impacted_files').innerHTML.split("%")[0]);
    console.log(ifiles)
    if(ifiles <= 10)
    {   
        file_insight = `
        <div class="icon icon__safe" style="margin-left: 10rem;" >
        <div class="insight insight__safe">
            Greatly modularized. New version will minimally affect the project. 
        </div>
        <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/color/48/000000/code-file.png"/>
    </div>`;
    }
    else if(ifiles >= 11)
    {   
        if(ifiles > 40)
        {
            file_insight = `
            <div class="icon icon__danger" style="margin-left: 10rem;">
            <div class="insight insight__danger">
                Heavy proportion of the project gets affected for every commit. Older versions may not be compatible. 
            </div>
            <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/color/48/000000/code-file.png"/>
        </div>`;
        }
        else 
        {
            file_insight = `
            <div class="icon icon__ok" style="margin-left: 10rem;">
            <div class="insight insight__ok">
                Good modularization. Less than 40% of the project is affected for every commit. 
            </div>
            <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/color/48/000000/code-file.png"/>
        </div>`;
        }
    }
    var loc_insight = ""; 
    var iloc = parseInt(document.getElementById('impacted_loc').innerHTML.split("%")[0]);
    if(iloc < 16)
    {   
        loc_insight = `
        <div class="icon icon__safe" style="margin-left: 10rem;">
        <div class="insight insight__safe">
            Well coded. New version will minimally affect the code inside the files of the project. 
        </div>
        <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/pastel-glyph/64/000000/code--v1.png"/>
    </div>`;
    }
    else if(iloc >= 16)
    {
        if(iloc < 50)
        {
            loc_insight = `   
            <div class="icon icon__ok" style="margin-left: 10rem;">
            <div class="insight insight__ok">
                Good code composition. Less than 50% of code in a file is affected for every commit.
            </div>
            <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/pastel-glyph/64/000000/code--v1.png"/>
        </div>`;
        }
        else 
        {
            loc_insight = `   
            <div class="icon icon__danger" style="margin-left: 10rem;">
            <div class="insight insight__danger">
                Poor code composition. Atleast 50% of the code is affected for every commit.
            </div>
            <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/pastel-glyph/64/000000/code--v1.png"/>
        </div>`;
        }

    }
    var contribution_insight = "" ;
    var active_contr = parseInt(document.getElementById('active').innerHTML.split("%")[0]);
    if(active_contr <= 10)
    {   
        contribution_insight = `   
        <div class="icon icon__danger" style="margin-left: 10rem;">
        <div class="insight insight__danger">
            Fairly inactive community. Less than 10% of the authors remain active at any time.
        </div>
        <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/color/48/000000/myspace.png"/>
    </div>`;
    }
    else if(active_contr >= 11)
    {   
        if(active_contr > 50 )
        {
            contribution_insight = `   
            <div class="icon icon__ok" style="margin-left: 10rem;">
            <div class="insight insight__ok">
                Highly active community. Atleast 50% of the authors remain active at any time.
            </div>
            <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/color/48/000000/myspace.png"/>
        </div>`;
        }
        else 
        {
            contribution_insight = `   
            <div class="icon icon__ok" style="margin-left: 10rem;">
            <div class="insight insight__ok">
                Fairly active community. Atleast 10% of the authors remain active at any time.
            </div>
            <img style="width: 2rem;height: 2rem;" src="https://img.icons8.com/color/48/000000/myspace.png"/>
        </div>`;
        }

    }
    document.getElementById('insight_box').innerHTML = `<div class="icon-box">` + bug_insight + file_insight + loc_insight + contribution_insight +  `</div>`;

    // var xhttp = new XMLHttpRequest();
    // xhttp.onreadystatechange = function() 
    // {
    //   if (this.readyState == 4 && this.status == 200) 
    //   {
    //       if(this.responseText == "True")
    //       {
    //           console.log('Operation Completed!');
    //           reload_server();

    //       }       
    //   }
    // }
    // xhttp.open("POST","https://services.iittp.ac.in/gitq/delete","true");
    // xhttp.setRequestHeader('Content-type', "application/x-www-form-urlencoded");
    // xhttp.send('project_id='+project_id);
}


function new_repository(repo_url)
{
  var badges_final = `
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <style>
      @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
      
      button{
          font-family: 'Maven Pro', sans-serif;
          font-family: 'Muli', sans-serif;
      }
      
      p{
          font-family: 'Maven Pro', sans-serif;
          font-family: 'Muli', sans-serif;
      }
      :root {
  --yellow: #feb60a;
  --red: #ff0062;
  --blue: #00dbf9;
  --violet: #da00f7;
      }
      h2 {
                    letter-spacing: 1px;
                    margin: 10px 0;
                }
  </style>
  <style>
[data-tooltip] {
position: relative;
z-index: 10;
}

/* Positioning and visibility settings of the tooltip */
[data-tooltip]:before,
[data-tooltip]:after {
position: absolute;
visibility: hidden;
opacity: 0;
left: 50%;
bottom: calc(100% + 5px); /* 5px is the size of the arrow */
pointer-events: none;
transition: 0.2s;
will-change: transform;
}

[data-tooltip]:before {
content: attr(data-tooltip);
padding: 10px 18px;
min-width: 50px;
max-width: 300px;
width: max-content;
width: -moz-max-content;
border-radius: 6px;
font-size: 14px;
background-color: rgba(59, 72, 80, 0.9);
/* background-image: linear-gradient(30deg,
rgba(59, 72, 80, 0.44),
rgba(59, 68, 75, 0.44),
rgba(60, 82, 88, 0.44)); */
box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.2);
/*kown*/
background-color: #76daff;
background-color: #feb60a;
background-color: #8A9AF7;
background-color:  #ff0062;
color: #000;
color: #fff;
text-align: center;
white-space: pre-wrap;
transform: translate(-50%, -5px) scale(0.5);
}
[data-tooltip]:after {
content: '';
border-style: solid;
border-width: 5px 5px 0px 5px; /* CSS triangle */
border-color: #ff0062  transparent transparent transparent;
border-color: #ff0062 transparent transparent transparent;
transition-duration: 0s; /* If the mouse leaves the element, 
                        the transition effects for the 
                        tooltip arrow are "turned off" */
transform-origin: top;   /* Orientation setting for the
                        slide-down effect */
transform: translateX(-50%) scaleY(0);
}

[data-tooltip]:hover:before,
[data-tooltip]:hover:after {
visibility: visible;
opacity: 1;
}
[data-tooltip]:hover:before {
transition-delay: 0.3s;
transform: translate(-50%, -5px) scale(1);
}
[data-tooltip]:hover:after {
transition-delay: 0.5s; /* Starting after the grow effect */
transition-duration: 0.2s;
transform: translateX(-50%) scaleY(1);
}

[data-tooltip-location="left"]:before,
[data-tooltip-location="left"]:after {
left: auto;
right: calc(100% + 5px);
bottom: 50%;
}

[data-tooltip-location="left"]:before {
transform: translate(-5px, 50%) scale(0.5);
}
[data-tooltip-location="left"]:hover:before {
transform: translate(-5px, 50%) scale(1);
}

[data-tooltip-location="left"]:after {
border-width: 5px 0px 5px 5px;
border-color: transparent transparent transparent #ff0062 ;
transform-origin: left;
transform: translateY(50%) scaleX(0);
}
[data-tooltip-location="left"]:hover:after {
transform: translateY(50%) scaleX(1);
}



[data-tooltip-location="right"]:before,
[data-tooltip-location="right"]:after {
left: calc(100% + 5px);
bottom: 50%;
}

[data-tooltip-location="right"]:before {
transform: translate(5px, 50%) scale(0.5);
}
[data-tooltip-location="right"]:hover:before {
transform: translate(5px, 50%) scale(1);
}

[data-tooltip-location="right"]:after {
border-width: 5px 5px 5px 0px;
border-color: transparent #ff0062  transparent transparent;
transform-origin: right;
transform: translateY(50%) scaleX(0);
}
[data-tooltip-location="right"]:hover:after {
transform: translateY(50%) scaleX(1);
}


[data-tooltip-location="bottom"]:before,
[data-tooltip-location="bottom"]:after {
top: calc(100% + 5px);
bottom: auto;
}

[data-tooltip-location="bottom"]:before {
transform: translate(-50%, 5px) scale(0.5);
}
[data-tooltip-location="bottom"]:hover:before {
transform: translate(-50%, 5px) scale(1);
}

[data-tooltip-location="bottom"]:after {
border-width: 0px 5px 5px 5px;
border-color: transparent transparent #ff0062  transparent;
transform-origin: bottom;
}








html {
animation: moveFocus 5s ease infinite alternate;
}
@keyframes moveFocus { 
0%   { background-position: 0% 100% }
100% { background-position: 100% 0% }
}
button {
margin: 0;
padding: 0.7rem 1.4rem;
cursor: pointer;
text-align: center;
border: none;
border-radius: 4px;
outline: inherit;
text-decoration: none;
font-family: Roboto, sans-serif;
font-size: 0.7em;
background-color: rgba(174, 184, 192, 0.55);
color: white;

-webkit-appearance: none;
-moz-appearance: none;
transition: background 350ms ease-in-out, 
        transform 150ms ease;
}
button:hover {
background-color: #484f56;
}
button:active {
transform: scale(0.98);
}
button:focus {
box-shadow: 0 0 2px 2px #298bcf;
}
button::-moz-focus-inner {
border: 0;
}

.example-elements {
flex-grow: 1;
display: flex;
flex-direction: column;
align-items: center;
align-content: center;
justify-content: center;
text-align: center;
padding-right: 4%;
}

.example-elements p {
padding: 6px;
display: inline-block;
margin-bottom: 5%;
color: #fff;
}
.example-elements p:hover {
border-left: 1px solid lightgrey;
border-right: 1px solid lightgrey;
padding-left: 5px;
padding-right: 5px;
}

.example-elements a {
margin-left: 6px;
margin-bottom: calc(5% + 10px);
color: #76daff;
text-decoration: none;
}
.example-elements a:hover {
margin-bottom: calc(5% + 9px);
border-bottom: 1px solid #76daff;
}

.example-elements button {
margin-bottom: 20px;
}

.info-wrapper {
flex-grow: 8;
display: flex;
flex-direction: column;
justify-content: center;
text-align: justify;
padding-left: 6%;
border-left: 3px solid #35ea95;
}

.info-wrapper p {
color: rgba(255, 255, 255, 0.69);
}
.info-wrapper p {
max-width: 600px;
text-align: justify;
}

.info-wrapper .title-question {
display: block;
color: #fff;
font-size: 1.36em;
font-weight: 500;
padding-bottom: 24px;
}

@media (max-width: 800px) {
html {
font-size: 0.9em;
}
}

@media (max-width: 750px) {
html {
animation-duration: 0.6s;
font-size: 1em;
}
.info-wrapper p:before,
.info-wrapper p:after {
display: none;
}
.example-elements {
max-width: 150px;
font-size: 22px;
}
.example-elements a, button {
display: none;
}
.example-elements p:before, 
.example-elements p:after {
visibility: visible;
opacity: 1;
}
.example-elements p:before {
content: "Tooltip";
font-size: 20px;
transform: translate(-50%, -5px) scale(1);
}
.example-elements p:after {
transform: translate(-50%, -1px) scaleY(1);
}


[data-tooltip]:after {
bottom: calc(100% + 3px);
}
[data-tooltip]:after {
border-width: 7px 7px 0px 7px;
}
}
  </style>
  <style>
  .icon-box {
    display: flex;
    flex-direction: row;
    width: 200px;
    justify-content: space-around;
    padding: 1em;
  }
  
  .icon {
    height: 24px;
    width: 24px;
    position: relative;
    cursor: pointer;
  }
  .icon svg {
    transition: 0.3s ease;
  }
  .icon:hover .insight {
    display: block;
  }
  .icon__danger:hover svg {
    fill: #D30423;
  }
  .icon__ok:hover svg {
    fill: #0641AD;
  }
  .icon__ok:hover svg {
    fill: #44cc11;
  }
  
  .insight {
    padding: 10px;
    position: absolute;
    width: auto;
    white-space: nowrap;
    word-wrap: no-wrap;
    box-shadow: 1px 1px 20px #aaa;
    border-radius: 5px;
    background-color: #fff;
    top: 40px;
    left: 50%;
    transform: translate(-50%);
    transform-style: preserve-3d;
    z-index: 200;
    font-size: 0.9em;
    display: none;
  }
  .insight:after {
    content: "";
    position: absolute;
    display: block;
    width: 10px;
    height: 10px;
    transform-origin: 50% 50%;
    transform: rotate(45deg) translateX(-50%);
    background-color: #fff;
    left: 50%;
    top: -1px;
    z-index: 400;
  }
  .insight:before {
    content: "";
    display: block;
    position: absolute;
    width: 10px;
    height: 10px;
    transform-origin: 50% 50%;
    transform: rotate(45deg) translateX(-50%) translateZ(-1px);
    background-color: #fff;
    left: 50%;
    top: 0px;
    z-index: -1;
    box-shadow: -1px -1px 20px #aaa;
  }
  .insight__danger {
    color: #D30423;
    box-shadow: 1px 1px 20px rgba(211, 4, 35, 0.3);
  }
  .insight__ok {
    color: #0641AD;
    box-shadow: 1px 1px 20px blue;
  }
  .insight__safe {
    color: #0641AD;
    box-shadow: 1px 1px 20px green;
  }
  </style>
      <div style="border-radius: 10px;box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
      background: #FFFFFF;background: #8A9AF7;transition: 0.3s;margin-left:0.5rem;margin-right:0.5rem;">
          
          <button style="display: block;border-radius: 4px;background-color: #f6f6f6;border: none;color: #456FFF;text-align: center;font-size: 2.1rem;padding: 1rem;transition: all 0.5s;cursor: pointer;margin-top: 1rem;margin-bottom: 2rem;width:fit-content;text-align: center;width: 100%;font-family: \'Lucida Sans\', \'Lucida Sans Regular\', \'Lucida Grande\', \'Lucida Sans Unicode\', Geneva, Verdana, sans-serif;">
              GitQ Assessment Report
              <span style="color:#D9644D;color: #1a1940;" id="busy_tag">  </span>
          </button>
          
        
          <div style="display: flex;margin: 2rem;">
              <div style="flex: 1;background: #262E61;padding: 2rem;box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);">
                  <p style="font-size: 0.5rem;color: #f6f6f6;font-weight: bold;">SOURCE CODE METRICS</p>
                  <h2 style="font-size: 1rem;color: #fff;font-weight: bold;">Meta Info and Dependencies</h2>
              </div>
              <div style="flex: 4;background: #ffffff;padding: 2rem;box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);">
                  <button style="border: 0px;padding: 0px;border-radius: 0.2rem;margin-left:3rem;" 
                  data-tooltip="Total Number of User Defined Packages"
                  data-tooltip-location="top">
                      <p style="color: white;border-radius: 0.2rem 0rem 0rem 0.2rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 0.5rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 0.5rem;border: 0px;margin-right: 0px;">
                          Packages
                      </p>
                      <p id="f1" style="border-radius: 0rem 0.2rem 0.2rem 0rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 1rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 1rem;border: 0px;margin-left: 0px;color: white;">
                          15568
                      </p>
                  </button>
                  <button style="border: 0px;padding: 0px;border-radius: 0.2rem;margin-left:3rem;"
                  data-tooltip="Total number of packages imported into java files"
                  data-tooltip-location="top"
                  >
                      <p style="color: white;border-radius: 0.2rem 0rem 0rem 0.2rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 0.5rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 0.5rem;border: 0px;margin-right: 0px;">
                          File Dependencies
                      </p>
                      <p id="f2" style="border-radius: 0rem 0.2rem 0.2rem 0rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 1rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 1rem;border: 0px;margin-left: 0px;color: white;">
                          8115
                      </p>
                  </button>
                  <br><br>
                  <button style="border: 0px;padding: 0px;border-radius: 0.2rem;margin-left:3rem;"
                  data-tooltip="Total number of functions across all java files"
                  data-tooltip-location="left"
                  >
                      <p style="color: white;border-radius: 0.2rem 0rem 0rem 0.2rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 0.5rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 0.5rem;border: 0px;margin-right: 0px;">
                          Methods
                      </p>
                      <p id="f3" style="border-radius: 0rem 0.2rem 0.2rem 0rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 1rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 1rem;border: 0px;margin-left: 0px;color: white;">
                          17367100
                      </p>
                  </button>        
                  
                  <button style="border: 0px;padding: 0px;border-radius: 0.2rem;margin-left:3rem;"
                  data-tooltip="Total number of functions being overriden across all the java files"
                  data-tooltip-location="right">
                      <p style="color: white;border-radius: 0.2rem 0rem 0rem 0.2rem;background: #5a5a5a;;display: inline;font-size: 0.8rem;padding-left: 0.5rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 0.5rem;border: 0px;margin-right: 0px;">
                          Overriden Methods
                      </p>
                      <p id="f4" style="border-radius: 0rem 0.2rem 0.2rem 0rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 1rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 1rem;border: 0px;margin-left: 0px;color: white;">
                          16127
                      </p>
                  </button>
                  <br><br>
                  <button style="border: 0px;padding: 0px;border-radius: 0.2rem;margin-left:3rem;"
                  data-tooltip="Total number of inherited and non-inherited classes all the java files"
                  data-tooltip-location="bottom">
                      <p style="color: white;border-radius: 0.2rem 0rem 0rem 0.2rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 0.5rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 0.5rem;border: 0px;margin-right: 0px;">
                          Classes
                      </p>
                      <p id="f5" style="border-radius: 0rem 0.2rem 0.2rem 0rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 1rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 1rem;border: 0px;margin-left: 0px;color: white;">
                         2442253
                      </p>
                  </button>
                  <button style="border: 0px;padding: 0px;border-radius: 0.2rem;margin-left:3rem;"
                  data-tooltip="Total number of inherited classes all the files in the project"
                  data-tooltip-location="bottom">
                      <p style="color: white;border-radius: 0.2rem 0rem 0rem 0.2rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 0.5rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 0.5rem;border: 0px;margin-right: 0px;">
                          Inherited Classes
                      </p>
                      <p id="f6" style="border-radius: 0rem 0.2rem 0.2rem 0rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 1rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 1rem;border: 0px;margin-left: 0px;color: white;">
                          2943
                      </p>
                  </button>        
              
                  </div>
          </div>
        
          <div style="display: flex;margin: 2rem;">
              <div style="flex: 1;background: #262E61;padding: 2rem;box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);">
                  <p style="font-size: 0.5rem;color: #f6f6f6;font-weight: bold;">MAINTENANCE METRICS</p>
                  <h2 style="font-size: 1rem;color: #fff;font-weight: bold;">Project Maintenance</h2>
              </div>
              <div style="flex: 4;background: #ffffff;padding: 2rem;padding-left: 0; padding-right: 0;box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);">
                  <button style="border: 0px;padding: 0px;border-radius: 0.2rem;margin-left:2rem;"
                  data-tooltip="Percentage of files affected per commit"
                  data-tooltip-location="top">
                      <p style="color: white;border-radius: 0.2rem 0rem 0rem 0.2rem;background: #5a5a5a;;display: inline;font-size: 0.8rem;padding-left: 0.5rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 0.5rem;border: 0px;margin-right: 0px;">
                          Portion Impacted (Files) 
                      </p>
                      <p id="impacted_files" style="border-radius: 0rem 0.2rem 0.2rem 0rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 1rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 1rem;border: 0px;margin-left: 0px;color: white;">
                        0.39%
                      
                          </p>
                  </button>
                  <button style="border: 0px;padding: 0px;border-radius: 0.2rem;margin-left:2rem;"
                  data-tooltip="Percentage of Lines Of Code(LOC) affected per commit"
                  data-tooltip-location="right">
                      <p style="color: white;border-radius: 0.2rem 0rem 0rem 0.2rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 0.5rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 0.5rem;border: 0px;margin-right: 0px;">
                      Portion Impacted (LOC)
                      </p>
                      <p id="impacted_loc" style="border-radius: 0rem 0.2rem 0.2rem 0rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 1rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 1rem;border: 0px;margin-left: 0px;color: white;">
                      0.20%
                      
                          </p>
                  </button>
                  <br><br>
                  <button style="border: 0px;padding: 0px;border-radius: 0.2rem;margin-left:2rem;"
                  data-tooltip="Ratio of open to closed issues that relate to bugs"
                  data-tooltip-location="bottom">
                   <p style="color: white;border-radius: 0.2rem 0rem 0rem 0.2rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 0.5rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 0.5rem;border: 0px;margin-right: 0px;">
                       Bug Issues (open:closed)
                   </p>
                   <p id="bugs" style="border-radius: 0rem 0.2rem 0.2rem 0rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 1rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 1rem;border: 0px;margin-left: 0px;color: white;">
                      0 : 262

                       </p>
                  
                   <button style="border: 0px;padding: 0px;border-radius: 0.2rem;margin-left:2rem;"
                  data-tooltip="Percentage of authors active today"
                  data-tooltip-location="bottom">
                   <p style="color: white;border-radius: 0.2rem 0rem 0rem 0.2rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 0.5rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 0.5rem;border: 0px;margin-right: 0px;">
                       Active Authors Rate
                   </p>
                   <p id="active" style="border-radius: 0rem 0.2rem 0.2rem 0rem;background: #5a5a5a;display: inline;font-size: 0.8rem;padding-left: 1rem;padding-top: 0.2rem;padding-bottom: 0.2rem;padding-right: 1rem;border: 0px;margin-left: 0px;color: white;">
                   1.59%
                   
                       </p>
               </button>                     
                  </div>
          </div>
        
      
          
          
          
          <p style="padding-left: 3rem;margin-top: 3rem;margin-bottom: 5rem;border-bottom-color: #5a5a5a;border-bottom-width: 0.5rem;font-family:\'Lucida Sans\', \'Lucida Sans Regular\', \'Lucida Grande\', \'Lucida Sans Unicode\', Geneva, Verdana, sans-serif;color: #fff;font-size: 18px;margin-bottom: 3rem;">
              Visual Q\'s for repositories on Github
          </p>

          <div id="insight_box" style="margin-bottom:2rem;background: #fff;"></div>
         
      </div>

 
  
                     `;
         document.getElementsByClassName("flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0")[0].innerHTML = badges_final + entire_code ;
         setTimeout(() => {
          css_change();
          insight();
         }, 5000);
}

function request_generator(repo_url) 
{
    new_repository(repo_url);
}

  function starter(){
    loading_buffer = `
    <style>
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
    h2 {
        font-family: 'Muli', sans-serif;
        letter-spacing: 1px;
        margin: 10px 0;
        animation: animate  
        1.5s linear infinite; 
        }
        p{
            font-family: 'Muli', sans-serif;
        }
            
    @keyframes animate { 
    0% { 
        opacity: 0; 
    } 

    50% { 
        opacity: 0.7; 
    } 

    100% { 
        opacity: 0; 
    } 
    } 
    </style>
    <div style="background: #B8F9D3;">
    <iframe style="width:100%;height:15rem;border:none;" src="https://kowndinya2000.github.io/buffer-2.github.io/">
    </iframe>
    <div style="margin-bottom: 2rem;height: 6rem;">
        <p style="text-align: center;">Contacted the remote server</p>
        <h2 style="text-align: center;">
            Downloading the repository ....
        </h2>
    </div>

    
    </div>
    `;
   url_string = window.location.href;
   document.body.style.background = "#ffffff";    
   setTimeout(() => {
            request_generator(window.location.href)   
         }, 3000);
         document.getElementsByClassName("flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0")[0].innerHTML = '<iframe style="margin-bottom:2rem;width:100%;height:18rem;border:none;" src="https://kowndinya2000.github.io/loader.github.io/"></iframe>' + entire_code ; 
 }

 var entire_code = document.getElementsByClassName("flex-shrink-0 col-12 col-md-9 mb-4 mb-md-0")[0].innerHTML;
starter();

