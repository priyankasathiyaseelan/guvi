var run = 0;
var count = 0;

class team {
    constructor(wicket, ball, score, tn) {
        this.wicket = wicket;
        this.score = score;
        this.ball = ball;
        this.tn = tn;
    }

    bat() {
        if (this.wicket > 0 && this.ball > 0) {
            //console.log(this.ball, this.wicket);
            var currun = Math.floor(Math.random() * 7);
            this.ball--;
            count++;
            if (currun == 0) {
                this.wicket--;
                count = 0;
            } else {
                this.score += currun;
                if (count == 7) {
                    this.wicket--;
                    this.count = 0;
                }
            }
        }
        var runs = "run" + this.tn;
        var wiks = "wicket" + this.tn;
        var bals = "ball" + this.tn;
        document.getElementById(runs).innerHTML = this.score;
        document.getElementById(wiks).innerHTML = 6 - this.wicket;
        document.getElementById(bals).innerHTML = this.ball;
    }


}
var team1 = new team(6, 36, 0, 1);
var team2 = new team(6, 36, 0, 2);

function bat1() {
    if (team1.ball > 0 && team1.wicket > 0) {
        team1.bat();
    } else {
        document.getElementById("bat1").innerHTML = "Ball";
        document.getElementById("bat2").innerHTML = "Bat";
        document.getElementById("bat1").disabled = true;
        document.getElementById("bat2").disabled = false;

    }
}

function bat2() {
    if (team1.score >= team2.score && team2.wicket > 0 && team2.ball > 0) {
        team2.bat();
    } else {
        submit = document.createElement("button");
        submit.setAttribute("onclick", "location.href = 'result.html'");
        submit.setAttribute("class", "submit");
        document.body.appendChild(submit);
        submit.innerHTML = "submit";
        document.getElementById("bat2").disabled = true;
        localStorage.setItem("team1", JSON.stringify(team1));
        localStorage.setItem("team2", JSON.stringify(team2));

    }
}
