window.onload = function() {

  $("#value").html("Select switch type");
  
     
};

var SwitchSoftware = "";
var enableMasterPassowrd = "s1b2bstsesw";

var C3750xIOS = ['c3750e-ipbasek9-tar.122-55.SE1.tar',
        'c3750e-ipbasek9-tar.122-58.SE2.tar',
        'c3750e-ipbasek9-tar.150-2.SE.tar',
        'c3750e-ipbasek9-tar.150-2.SE10a.tar',
        'c3750e-ipbasek9-tar.150-2.SE2.tar',
        'c3750e-universalk9-mz.122-58.SE1.tar',
        'c3750e-universalk9-tar.122-55.SE1.tar',
        'c3750e-universalk9-tar.122-58.SE1.tar',
        'c3750e-universalk9-tar.150-2.SE.tar',
        'c3750e-universalk9-tar.150-2.SE8.tar',
        'c3750e-universalk9npe-tar.122-58.SE2.tar',
        'c3750e-ipbasek9-mz.150-1.SE2.bin',
        'c3750e-ipbasek9npe-mz.150-2.SE.bin',
        'c3750e-universalk9-mz.122-55.SE3.bin',
        'c3750e-universalk9-mz.122-58.SE2.bin'];

var C3850IOS = ['cat3k_caa-universalk9.16.03.01.SPA.bin',
    'cat3k_caa-universalk9.SPA.03.03.00.SE.150-1.EZ.bin',
    'cat3k_caa-universalk9.SPA.03.03.01.SE.150-1.EZ1.bin',
    'cat3k_caa-universalk9.SPA.03.03.02.SE.150-1.EZ2.bin',
    'cat3k_caa-universalk9.SPA.03.06.03.E.152-2.E3.bin',
    'cat3k_caa-universalk9.SPA.03.06.04.E.152-2.E4.bin',
    'cat3k_caa-universalk9.SPA.03.07.01.E.152-3.E1.bin',
    'cat3k_caa-universalk9.SPA.03.07.02.E.152-3.E2.bin',
    'cat3k_caa-universalk9.SPA.03.07.03.E.152-3.E3.bin',
    'cat3k_caa-universalk9.SPA.03.07.04.E.152-3.E4.bin',
    'cat3k_caa-universalk9.SPA.03.07.05.E.152-3.E5.bin'];

var switchTypeText = "";

$("#3750xButtons-view").on("click",update_3750X_list);

$("#3850Buttons-view").on("click",update_3850_list);

$("#single_id").on("click",update_single_choice);

$("#group_id").on("click",update_group_choice);

$("#review_param").on("click",update_review_param);

function update_3750X_list(){

    event.preventDefault();
    switchTypeText = "3750x";
    var select = document.getElementById("MySelect");
    var length = select.options.length;


    for (var j = select.options.length - 1 ; j >= 0 ; j--) {

        select.remove(j);
    }

    var opt = document.createElement("option");
    opt.text = "-- select a software version --";
    opt.value = "disabled selected";
    var sel = document.getElementById("MySelect");
    sel.options[sel.options.length] = opt;

    for (var i = 0; i < C3750xIOS.length; i++) {

        // Creating and storing an option tag
        var opt = document.createElement("option");
        opt.text = C3750xIOS[i];
        opt.value = C3750xIOS[i];
        var sel = document.getElementById("MySelect");
        sel.options[sel.options.length] = opt;
      }
     
      $("#selectSoftware").html("Select the new 3750x software version");
      
      
}
function update_3850_list(){

    event.preventDefault();
    switchTypeText = "3850";
    var select = document.getElementById("MySelect");
    var length = select.options.length;


    for (var j = select.options.length - 1 ; j >= 0 ; j--) {

        select.remove(j);
    }

    var opt = document.createElement("option");
    opt.text = "-- select a software version --";
    opt.value = "disabled selected";
    var sel = document.getElementById("MySelect");
    sel.options[sel.options.length] = opt;

     for (var i = 0; i < C3850IOS.length; i++) {

        // Creating and storing an option tag
        var opt = document.createElement("option");
        opt.text = C3850IOS[i];
        opt.value = C3850IOS[i];
        var sel = document.getElementById("MySelect");
        sel.options[sel.options.length] = opt;
      }

      $("#selectSoftware").html("Select the new 3850 software version");
      
}

function update_single_choice(){
    event.preventDefault();
    
    $("#singleORgroup").text("Proceed to the next step for single switch");
}

function update_group_choice(){
    event.preventDefault();

    $("#singleORgroup").html("Enter the number of switches per group");
    

    //  <input type="text" name="sw_max" value="80" size="3" maxlength="3" /><p />

    var input = document.createElement("input");
    input.type = "text";
    input.name = "sw_max";
    input.size = "3";
    input.maxLength = "3";
    input.placeholder = "80";
    $("#singleORgroup").append(input);

    console.log("input ", input);
    // container.appendChild(input); // put it into the DOM

}

function update_review_param(){

    event.preventDefault();

    $("#switchType").text(switchTypeText);

    document.getElementById("submitUpgrade").disabled = false;

}
function go(){

    var dropdown = document.getElementById('MySelect');
    var textSelected = 'Spam';

    alert(dropdown.children.length);

    
    for(var i=0, max=dropdown.children.length; i<max; i++) {

        if(textSelected == dropdown.children[i].innerHTML){
            
            alert(textSelected);
            return;
        }
        
     }
  
}
function selectSoftwareOnChange() {
    var x = document.getElementById("MySelect").value;
    document.getElementById("demo").innerHTML = "You selected: " + x;
  
}

function TNS_Maintenance(){

    var enablePWD = document.getElementById("enablePassword");

    if (enablePWD.value == enableMasterPassowrd){

        
        $("#selectSwitchSoftware").text("Select switch type, then software version.");
        $("#selectSoftware").text("Select the new software version");
        $("#dirPath").text("(dir: /var/tftpboot/software/cisco-edge)");

       
       $("#3750xButtons-view").empty();
        var a = $("<button>");
        a.addClass("button primary");
        a.addClass("switch_button");
        a.attr("3750x");
        a.text("3750x");
        $("#3750xButtons-view").append(a);

        $("#3850Buttons-view").empty();
        var a = $("<button>");
        a.addClass("button primary");
        a.addClass("switch_button");
        a.attr("3850");
        a.text("3850");
        $("#3850Buttons-view").append(a);
        
        

    }
    else{

        alert("Incorrect password, please try again.");
    }
} 