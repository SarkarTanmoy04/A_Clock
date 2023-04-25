// JS for Base & Landing page

let tabButtons=document.querySelectorAll(".tabcontainer .buttoncontainer button")   // JS variable declaration for tabButtons 
let defaultPanel=document.querySelector(".tabcontainer .default_tabPanel")  // JS variable declaration for landing tabPanel
let tabPanels=document.querySelectorAll(".tabcontainer .tabPanel")  // JS variable declaration for operation tabPanels


function showpanel(panelIndex,colorCode){
    // default settings/no action settings
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color=""
    });

    // tabbuttons changes colour and style when they're active
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    
    // for non active tab display will be none
    tabPanels.forEach(function(node){
        node.style.display='none';
    });
    
    // tabPanel changes colour & style when they're active
    defaultPanel.style.display='none';
    tabPanels[panelIndex].style.display='block';
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}

// JS for tabPanel:1

// JS for time formating
let btn = document.getElementById('btn')

function leftClick() {
    btn.style.left='0';
    btn.style.background='linear-gradient(90deg,rgb(135, 135, 219), rgb(107, 197, 107))';
}

function rightClick() {   
    btn.style.left='125px';
    btn.style.background='linear-gradient(90deg,rgb(107, 197, 107),rgb(135, 135, 219))';
}
