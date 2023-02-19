(function () {
    var start = document.querySelector('.start')
    var start_btn = document.querySelector('.start-btn');
    var game_que = document.querySelector('.game-question')

    start_btn.addEventListener('click', function () {
        game_que.style.display = "flex";
        start.style.display = "none";
    })

    var play = document.querySelector('.yes');
    var exit = document.querySelector('.exit');
    var game_display = document.querySelector('.game-display')

    exit.addEventListener('click', function () {
        game_que.style.display = "none";
        start.style.display = "flex";
    })

    play.addEventListener('click', function () {
        start.style.display = "none";
        game_que.style.display = "none";
        game_display.style.display = "flex";
    })

    var grid = document.querySelectorAll('.grid');
    var result = document.querySelector('.result');
    var count = 0;
    grid.forEach(function (button) {
        button.addEventListener('click', function () {
            count = count + 1;

            if (count % 2 == 0 && count <= 9) {
                button.textContent = "O";
                button.style.pointerEvents = "none";
            }

            else if (count <= 9) {
                button.textContent = "X";
                button.style.pointerEvents = "none"
            }
            else {
                validate.style.pointerEvents = "all";
                count = 0;
            }
            myfunction();
        })
    })

    function myfunction() {
        var a = document.getElementById('1').textContent;
        var b = document.getElementById('2').textContent;
        var c = document.getElementById('3').textContent;
        var d = document.getElementById('4').textContent;
        var e = document.getElementById('5').textContent;
        var f = document.getElementById('6').textContent;
        var g = document.getElementById('7').textContent;
        var h = document.getElementById('8').textContent;
        var i = document.getElementById('9').textContent;
        if (a == b && b == c && a != "" && b != "" && c != "") {
            alert("player  " + a + "  won");
            result.style.display = "flex";
            game_display.style.display = "none";
            count = 0;
        }
        else if (d == e && e == f && d != "" && e != "" && f != "") {
            alert("player  " + d + "  won");
            result.style.display = "flex";
            game_display.style.display = "none";
            count = 0;
        }
        else if (g == h && h == i && g != "" && h != "" && i != "") {
            alert("player  " + g + "  won");
            result.style.display = "flex";
            game_display.style.display = "none";
            count = 0;
        }
        else if (a == e && e == i && a != "" && e != "" && i != "") {
            alert("player  " + a + "  won");
            result.style.display = "flex";
            game_display.style.display = "none";
            count = 0;
        }
        else if (c == e && e == g && c != "" && e != "" && g != "") {
            alert("player  " + c + "  won");
            result.style.display = "flex";
            game_display.style.display = "none";
            count = 0;
        }
        else if (a == d && d == g && a != "" && d != "" && g != "") {
            alert("player  " + a + "  won");
            result.style.display = "flex";
            game_display.style.display = "none";
            count = 0;
        }
        else if (b == e && e == h && b != "" && e != "" && h != "") {
            alert("player  " + b + "  won");
            result.style.display = "flex";
            game_display.style.display = "none";
            count = 0;
        }
        else if (c == f && f == i && c != "" && f != "" && i != "") {
            alert("player  " + c + "  won");
            result.style.display = "flex";
            game_display.style.display = "none";
            count = 0;
        }

        else if (a != "" && b != "" && c != "" && d != "" && e != "" && f != "" && g != "" && h != "" && i != "") {
            alert("Match has been drawn");
            result.style.display = "flex";
            game_display.style.display = "none";
            count = 0;
        }
        else {

        }
    }

    var reset = document.querySelector('.reset-btn');
    reset.addEventListener('click', function () {
        grid.forEach(function (button) {
            button.textContent = "";
            button.style.pointerEvents = "all"
        })
        game_display.style.display = "flex";
        result.style.display = "none";
    })

    var finish = document.querySelector('.finish');
    finish.addEventListener('click', function () {
        grid.forEach(function (button) {
            button.style.pointerEvents = "all"
            button.textContent = "";
        })
        game_que.style.display = "none";
        game_display.style.display = "none";
        result.style.display = "none";
        start.style.display = "flex";
    })
})();
