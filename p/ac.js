    // print button
    var divgroup = document.createElement("div");
    var cbtn = document.createElement("button");
    var cbtnstyle = document.createElement("style");
    cbtnstyle.type = "text/css";
    cbtn.setAttribute("id", "the_accelerator");
    cbtn.setAttribute("class", "accelator_design");
    cbtn.innerText = "\u{212d}";

    /* style of button */
    var styleEdit = ".accelator_design {";
    styleEdit += "display: block;";
    styleEdit += "position: absolute;";
    styleEdit += "top: 50%;";
    styleEdit += "left: 0px;";
    styleEdit += "z-index: 20001;";
    styleEdit += "font-size: 36px;";
    styleEdit += "text-align: center;"
    styleEdit += "width: 50px;";
    styleEdit += "transform: translate(-30%, -50%);";
    styleEdit += "height: 50px;";
    styleEdit += "background: #ffffff55;";
    styleEdit += "border-radius: 100%;";
    styleEdit += "color: #282a2b3c;";
    styleEdit += "border: none;";
    styleEdit += "box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);";
    styleEdit += "} ";
    styleEdit += ".accelator_design:hover { background: #ffffff; }"
    styleEdit += ".accelator_design:focus { outline-width: 0; }"
    styleEdit += "button:focus { outline-width: 0; }";
    var cbtntext = document.createTextNode(styleEdit);
    cbtnstyle.appendChild(cbtntext);
    cbtn.appendChild(cbtnstyle);

    dragElement(cbtn);

    /* function to make element draggable */
    function dragElement(elmnt) {
        var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
        elmnt.onmousedown = dragMouseDown;

        function dragMouseDown(e) {
            e = e || window.event;
            e.preventDefault();
            // get the mouse cursor position at startup:
            pos3 = e.clientX;
            pos4 = e.clientY;
            document.onmouseup = closeDragElement;
            // call a function whenever the cursor moves:
            document.onmousemove = elementDrag;
        }

        function elementDrag(e) {
            e = e || window.event;
            e.preventDefault();
            // calculate the new cursor position:
            pos1 = pos3 - e.clientX;
            pos2 = pos4 - e.clientY;
            pos3 = e.clientX;
            pos4 = e.clientY;
            // set the element's new position:
            elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
            elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
        }

        function closeDragElement() {
            // stop moving when mouse button is released:
            document.onmouseup = null;
            document.onmousemove = null;
        }
    }

    /* make it touchable */
    cbtn.addEventListener('touchmove', function(e) {
        var touchLocation = e.targetTouches[0];
        cbtn.style.left = touchLocation.pageX + cbtn.style.width / 2 + 'px';
        cbtn.style.top = touchLocation.pageY + cbtn.style.height / 2 + 'px';
    })
    cbtn.addEventListener('touchend', function(e) {
        var x = parseInt(cbtn.style.left);
        var y = parseInt(cbtn.style.top);
    })

    /* now make a popup controller */
    var bottom_layer = document.createElement("div");
    bottom_layer.setAttribute("id", "popup_");
    bottom_layer.setAttribute("class", "popup_window");
    var popsty;
    popsty += "display: none;";
    popsty += "position: fixed;";
    popsty += "top: 0;";
    popsty += "left: 0;";
    popsty += "z-index: 20002;";
    //popsty += "font-size: 36px;";
    //popsty += "text-align: center;"
    popsty += "width: 100%;";
    popsty += "height: 100%;";
    popsty += "background: #11111189;";
    //popsty += "border-radius: 25%;";
    //popsty += "color: #282a2b3c;";
    popsty += "border: none;";
    bottom_layer.style = popsty;

    /* group */
    var border_layer = document.createElement("div");
    border_layer.setAttribute("id", "bo_w");
    border_layer.setAttribute("class", "popup_border");
    var bosty;
    bosty += "display: inline;";
    bosty += "position: fixed;";
    bosty += "top: 45%;";
    bosty += "left: 45%;";
    bosty += "z-index: 20003;";
    bosty += "padding: 5px;";
    bosty += "background: rgb(123 192 255 / 78%);";
    bosty += "border-radius: 25px;";
    bosty += "border: none;";
    border_layer.style = bosty;

    var border_layer01 = document.createElement("div");
    border_layer01.setAttribute("id", "bo_01");
    border_layer01.setAttribute("class", "popup_01");
    var border_layer02 = document.createElement("div");
    border_layer02.setAttribute("id", "bo_02");
    border_layer02.setAttribute("class", "popup_02");
    var updownsty;
    updownsty += "display: inline;";
    updownsty += "text-align: center;";
    //updownsty += "positiupdownsty += on: fixed;";
    border_layer01.style = updownsty;
    border_layer02.style = updownsty;

    /* times */
    var times_text = document.createElement("label");
    times_text.innerText = "快捷倍速: ";
    times_text.setAttribute("id", "times_text");
    times_text.setAttribute("class", "ctext");
    var times_sty;
    times_sty += "display: inline-block;";
    times_sty += "position: relative;";
    times_sty += "z-index: 20004;";
    times_sty += "font-size: 18px;";
    times_sty += "text-align: center;"
    times_sty += "color: #ffffefef;";
    times_sty += "border: none;";
    times_text.style = times_sty;
    /* 0.5 */
    var btn_05 = document.createElement("button");
    btn_05.innerText = "0.5";
    btn_05.setAttribute("id", "x05");
    btn_05.setAttribute("class", "times_btn");
    btn_05.addEventListener("click", times05);
    /* 1 */
    var btn_1 = document.createElement("button");
    btn_1.innerText = "1";
    btn_1.setAttribute("id", "x1");
    btn_1.setAttribute("class", "times_btn");
    btn_1.addEventListener("click", times1);
    /* 5 */
    var btn_5 = document.createElement("button");
    btn_5.innerText = "5";
    btn_5.setAttribute("id", "x5");
    btn_5.setAttribute("class", "times_btn");
    btn_5.addEventListener("click", times5);
    /* 10 */
    var btn_10 = document.createElement("button");
    btn_10.innerText = "10";
    btn_10.setAttribute("id", "x10");
    btn_10.setAttribute("class", "times_btn");
    btn_10.addEventListener("click", times10);
    /* 18 */
    var btn_18 = document.createElement("button");
    btn_18.innerText = "18";
    btn_18.setAttribute("id", "x18");
    btn_18.setAttribute("class", "times_btn");
    btn_18.addEventListener("click", times18);

    /* button style */
    var xxsty;
    xxsty += "display: inline-block;";
    xxsty += "position: relative;";
    xxsty += "z-index: 20004;";
    xxsty += "width: 35px;";
    xxsty += "height: 22px;";
    xxsty += "font-size: 18px;";
    xxsty += "text-align: center;"
    xxsty += "background: white;";
    xxsty += "border-radius: 10px;";
    xxsty += "color: #282a2b3c;";
    xxsty += "border: none;";
    btn_05.style = xxsty;
    btn_1.style = xxsty;
    btn_5.style = xxsty;
    btn_10.style = xxsty;
    btn_18.style = xxsty;

    /* - */
    var lbtn = document.createElement("button");
    lbtn.innerText = "–";
    lbtn.setAttribute("id", "reduce");
    lbtn.setAttribute("class", "ctrl_btn");
    var lsty;
    lsty += "display: inline-block;";
    lsty += "position: relative;";
    lsty += "z-index: 20004;";
    lsty += "width: 30px;";
    lsty += "height: 30px;";
    lsty += "font-size: 25px;";
    lsty += "text-align: center;"
    lsty += "background: white;";
    lsty += "border-radius: 50%;";
    lsty += "color: #282a2b3c;";
    lsty += "border: none;";
    lbtn.style = lsty;

    /* label */
    var lab = document.createElement("label");
    lab.innerText = "10";
    lab.setAttribute("id", "speed_value");
    lab.setAttribute("class", "speed_v");
    var lasty;
    lasty += "display: inline-block;";
    lasty += "position: relative;";
    lasty += "z-index: 20004;";
    lasty += "font-size: 25px;";
    lasty += "text-align: center;";
    lasty += "width: 50px;";
    lasty += "color: #ffffefef;";
    lasty += "border: none;";
    lab.style = lasty;

    /* + */
    var rbtn = document.createElement("button");
    rbtn.innerText = "+";
    rbtn.setAttribute("id", "add");
    rbtn.setAttribute("class", "ctrl_btn");
    rbtn.style = lsty;

    var tbtnstyle = document.createElement("style");
    tbtnstyle.type = "text/css";
    var tbtntext = document.createTextNode(".ctrl_btn:focus { outline-width: 0; }");
    tbtnstyle.appendChild(tbtntext);
    lbtn.appendChild(tbtnstyle);
    rbtn.appendChild(tbtnstyle);

    /* switch button */
    var t_sw_1 = document.createElement("div");
    var t_sw_2 = document.createElement("label");
    var t_sw_3 = document.createElement("input");
    var t_sw_4 = document.createElement("span");
    t_sw_1.setAttribute("id", "s_01");
    t_sw_1.setAttribute("class", "s__01");
    t_sw_2.setAttribute("id", "s_02");
    t_sw_2.setAttribute("class", "s__02");
    t_sw_3.setAttribute("id", "s_03");
    t_sw_3.setAttribute("class", "s__03");
    t_sw_3.setAttribute("type", "checkbox");
    t_sw_4.setAttribute("id", "s_04");
    t_sw_4.setAttribute("class", "slider round");

    t_sw_1.style.display = "inline";
    t_sw_1.style.position = "relative";
    t_sw_1.style.bottom = "10px";
    t_sw_1.style["padding-left"] = "5px";

    var sw_sty = ".s__02 { position: relative; display: inline-block; width: 38px; height: 10px; } .s__02 input { opacity: 0; width: 0; height: 0; } ";
    var swtext = document.createTextNode(sw_sty);
    var swstyle = document.createElement("style");
    swstyle.type = "text/css";
    swstyle.appendChild(swtext);
    t_sw_2.appendChild(swstyle);

    var sl_sty = ".slider { position: absolute; cursor: pointer; margin-bottom: 0px; margin-top: 0px; top: 0; left: 0; right: 0; bottom: 0; background-color: #ccc; -webkit-transition: .2s; transition: .2s; }";
    sl_sty += ".slider:before { position: absolute; height: 16px; width: 16px; left: 0px; bottom: -3px; background-color: white; -webkit-transition: .2s; transition: .2s; } ";
    sl_sty += "input:checked + .slider {background-color: #2196F3;} input:focus + .slider {box-shadow: 0 0 1px #2196F3;} input:checked + .slider:before {-webkit-transform: translateX(26px);-ms-transform: translateX(26px);transform: translateX(26px);} .slider.round {border-radius: 20px;} .slider.round:before {border-radius: 50%; }";
    var sltext = document.createTextNode(sl_sty);
    var slstyle = document.createElement("style");
    slstyle.type = "text/css";
    slstyle.appendChild(sltext);
    t_sw_4.appendChild(slstyle);

    t_sw_2.appendChild(t_sw_3);
    t_sw_2.appendChild(t_sw_4);
    t_sw_1.appendChild(t_sw_2);

    // apply
    border_layer01.appendChild(times_text);
    border_layer01.appendChild(btn_05);
    border_layer01.appendChild(btn_1);
    border_layer01.appendChild(btn_5);
    border_layer01.appendChild(btn_10);
    border_layer01.appendChild(btn_18);

    border_layer02.appendChild(lbtn);
    border_layer02.appendChild(lab);
    border_layer02.appendChild(rbtn);
    border_layer02.appendChild(t_sw_1);


    border_layer.appendChild(border_layer01);
    border_layer.appendChild(border_layer02);

    bottom_layer.appendChild(border_layer);


    divgroup.appendChild(cbtn);
    divgroup.appendChild(bottom_layer);
    document.body.appendChild(divgroup);

    var popupw = document.getElementById("popup_");

    closePop();

    function displayPop() {
        popupw.style.display = "block";
    }

    function closePop() {
        popupw.style.display = "none";
    }

    var thebtn = document.getElementById("the_accelerator");
    thebtn.addEventListener("click", displayPop);

    window.onclick = function(event) {
        if (event.target == popupw) {
            closePop();
        }
    }

    var down_btn = document.getElementById("reduce");
    var up_btn = document.getElementById("add");
    var value_text = document.getElementById("speed_value");
    var switch_btn = document.getElementById("s_03");
    var switch_all = document.getElementById("s_01");

    down_btn.addEventListener("click", downVal);
    up_btn.addEventListener("click", upVal);
    switch_all.addEventListener("click", changeSpeedFunc);

    function downVal() {
        var val = +value_text.innerText;
        if (val <= 1) {
            val -= 0.1;
            val = val.toFixed(1);
        }
        else {
            val--;
        }
        if (val < 0.1) {
            val = 0.1;
        }
        value_text.innerText = val;
        changeSpeedFunc();
    }
    function upVal() {
        var val = +value_text.innerText;
        if (val < 1) {
            val += 0.1;
            val = val.toFixed(1);
        }
        else {
            val++;
        }
        if (val > 18) {
            val = 18;
        }
        value_text.innerText = val;
        changeSpeedFunc();
    }

    function changeSpeedFunc() {
    	var colorchange = document.getElementById("the_accelerator");
        var status = switch_btn.checked;
        var current_val = 1;
        if (status == false) {
            current_val = 1;
            colorchange.style.background = "#ffffff55";
            applySpeed(1);
        }
        else {
            current_val = +value_text.innerText;
            colorchange.style.background = "#e3272755";
            applySpeed(current_val);
        }
    }

    function applySpeed(v_speed) {
        Laya.timer.scale = v_speed;
    }

    function times05() {
    	var speedIDV = document.getElementById("speed_value");
    	speedIDV.innerText = 0.5;
    	changeSpeedFunc();
    }

    function times1() {
    	var speedIDV = document.getElementById("speed_value");
    	speedIDV.innerText = 1;
    	changeSpeedFunc();
    }

    function times5() {
    	var speedIDV = document.getElementById("speed_value");
    	speedIDV.innerText = 5;
    	changeSpeedFunc();
    }

    function times10() {
    	var speedIDV = document.getElementById("speed_value");
    	speedIDV.innerText = 10;
    	changeSpeedFunc();
    }

    function times18() {
    	var speedIDV = document.getElementById("speed_value");
    	speedIDV.innerText = 18;
    	changeSpeedFunc();
    }