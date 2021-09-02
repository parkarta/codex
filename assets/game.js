let list = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, 11, -1, -1, -1, 0, -1, -1, -1, -1, 1, -1, -1, 0, -1, -1, -1, -1, -1, 0, -1, 10, -1, -1, -1, -1, -1, -1, -1, -1, -1, 2, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, 3, 0, -1, -1, 0, -1, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, -1, -1,
    4, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, -1, -1, 0, 0, 0, -1, -1, -1, 5, 0, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, 0, -1, -1, -1, 0, -1, 6, 0, -1, -1, -1, -1, -1, -1, 12, -1, -1, -1, -1, -1, 0, -1, 0, -1, -1, 0, -1, -1, -1, 7, -1, -1, -1, -1, -1, -1, 0, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, 8, -1, -1,
    0, -1, -1, -1, -1, -1, -1, 0, -1, 0, -1, -1, -1, -1, 0, -1, -1, -1, -1, 9
];
let checked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
list = list.sort(() => Math.random() - 0.5);
var clicks_left = 50;
var sensors_found = 0;

function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
}
btn.onclick = function() {
    clicks_left = 50;
    sensors_found = 0;
    checked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    list = list.sort(() => Math.random() - 0.5);
    cl.innerHTML = pad(clicks_left);
    sf.innerHTML = pad(sensors_found);
    modal.style.display = "none";
    modal.style.display = "block";
    for (var i = 0; i < 200; i++) {
        document.getElementById(i).style.backgroundImage = "none";
        document.getElementById(i).style.backgroundPosition = "center";
        document.getElementById(i).style.backgroundSize = "100%  100%";
        document.getElementById(i).style.backgroundImage = "url('assets/hexa.svg')";

    }

    modal.style.display = "block";

}
cross.onclick = function() {
    pop.style.display = "none";
    popup_is_shown = 0;
}


start.onclick = function() {
    clicks_left = 50;
    sensors_found = 0;
    checked = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    list = list.sort(() => Math.random() - 0.5);
    cl.innerHTML = pad(clicks_left);
    sf.innerHTML = pad(sensors_found);
    modal.style.display = "none";
    modal.style.display = "block";
    for (var i = 0; i < 200; i++) {
        document.getElementById(i).style.backgroundImage = "none";
        document.getElementById(i).style.backgroundPosition = "center";
        document.getElementById(i).style.backgroundSize = "100%  100%";
        document.getElementById(i).style.backgroundImage = "url('assets/hexa.svg')";

    }

}

function hex(id) {

    if (list[id] == -1 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        cl.innerHTML = pad(clicks_left);

        checked[id] = 1;
        document.getElementById(id).style.backgroundImage = "url('assets/hexafill.svg')";
        // pop.style.display = "none";
    } else if (list[id] == 0 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        cl.innerHTML = pad(clicks_left);

        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        document.getElementById(id).style.backgroundImage = "url('assets/hexafillred.svg')";
        // pop.style.display = "none";
    } else if (list[id] == 1 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;


        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }
        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);
        document.getElementById(id).style.backgroundImage = "url('assets/1.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";

        icon.style.backgroundImage = "url('assets/1.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  ";
        sensor_name.innerHTML = "Liquid Sensor";


    } else if (list[id] == 2 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }

        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);

        document.getElementById(id).style.backgroundImage = "url('assets/2.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";
        icon.style.backgroundImage = "url('assets/2.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  ";
        sensor_name.innerHTML = "Light Sensor";

    } else if (list[id] == 3 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }

        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);

        document.getElementById(id).style.backgroundImage = "url('assets/3.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";
        icon.style.backgroundImage = "url('assets/3.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  ";
        sensor_name.innerHTML = "Motion Sensor";

    } else if (list[id] == 4 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }

        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);

        document.getElementById(id).style.backgroundImage = "url('assets/4.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";
        icon.style.backgroundImage = "url('assets/4.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  ";
        sensor_name.innerHTML = "Push Button Sensor";

    } else if (list[id] == 5 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }

        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);

        document.getElementById(id).style.backgroundImage = "url('assets/5.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";
        icon.style.backgroundImage = "url('assets/5.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  ";
        sensor_name.innerHTML = "Poti Sensor";

    } else if (list[id] == 6 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }

        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);

        document.getElementById(id).style.backgroundImage = "url('assets/6.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";
        icon.style.backgroundImage = "url('assets/6.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  ";
        sensor_name.innerHTML = "Tilt Sensor";

    } else if (list[id] == 7 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }

        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);

        document.getElementById(id).style.backgroundImage = "url('assets/7.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";
        icon.style.backgroundImage = "url('assets/7.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  ";
        sensor_name.innerHTML = "Vibration Sensor";

    } else if (list[id] == 8 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }

        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);

        document.getElementById(id).style.backgroundImage = "url('assets/8.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";
        icon.style.backgroundImage = "url('assets/8.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  ";
        sensor_name.innerHTML = "Impact Sensor";

    } else if (list[id] == 9 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }

        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);

        document.getElementById(id).style.backgroundImage = "url('assets/9.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";
        icon.style.backgroundImage = "url('assets/9.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  ";
        sensor_name.innerHTML = "Magnet Sensor";

    } else if (list[id] == 10 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }

        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);

        document.getElementById(id).style.backgroundImage = "url('assets/10.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";
        icon.style.backgroundImage = "url('assets/10.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  ";
        sensor_name.innerHTML = "Photo Interrupter Sensor";

    } else if (list[id] == 11 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }

        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);

        document.getElementById(id).style.backgroundImage = "url('assets/11.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";
        icon.style.backgroundImage = "url('assets/11.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  ";
        sensor_name.innerHTML = "IR Sensor";

    } else if (list[id] == 12 && checked[id] == 0 && clicks_left > 0 && popup_is_shown == 0) {
        checked[id] = 1;
        clicks_left--;
        if (clicks_left == 0) {
            gameover.style.display = "block";
        }
        sensors_found++;
        if (sensors_found == 12) {
            won.style.display = "block";
        }

        cl.innerHTML = pad(clicks_left);
        sf.innerHTML = pad(sensors_found);

        document.getElementById(id).style.backgroundImage = "url('assets/12.svg'),   url('assets/hexafill.svg')";
        pop.style.display = "block";
        popup_is_shown = 1;
        document.getElementById(id).style.backgroundPosition = "center, center";
        document.getElementById(id).style.backgroundSize = "50% 50%, 100%  100%";
        icon.style.backgroundImage = "url('assets/12.svg'),   url('assets/hexa1.svg')";
        sensor_details.innerHTML = "This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor     This is Sensor  This is Sensor  This is Sensor  This is Sensor  This is Sensor   ";
        sensor_name.innerHTML = " Temperature Sensor";

    }

}