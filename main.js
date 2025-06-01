document.getElementById("insertTOP").innerHTML = `
<div id="disclaimer"></div>
<div id="header"></div>
<div id="navbar"></div>
<div id="pride"></div>
`
document.getElementById("navbar").innerHTML = `
<div id="header-links">
    <a href="index.html"><div style="padding-left:10px; padding-right:10px">Home</div></a>
    <a href="about.html"><div style="padding-left:10px; padding-right:10px">About</div></a>
    <a href="hiring.html"><div style="padding-left:10px; padding-right:10px">Jobs</div></a>
</div>
`;
/*
To be added into the navbar
<div style="padding-left:10px; padding-right:10px">News & Legislation</div>
<div style="padding-left:10px; padding-right:10px">Parliament</div>
<div style="padding-left:10px; padding-right:10px">Committees & Divisions</div>

*/
document.getElementById("header").innerHTML = `
<!--<img src="parliament-full.svg" id="logo">-->
<img src="HCNAO.png" id="logo">
`
document.getElementById("logo").onclick = function() {
    window.location.href="index.html";
}
document.getElementById("disclaimer").innerHTML = `
    <h3>The Hack Club National Attorney's Office and other associated entities are not associated with the Hack Club non-profit organization
`;
document.getElementById("pride").innerHTML = `
    <h3><span>CELEBRATING PRIDE</span></h3>
`
                
