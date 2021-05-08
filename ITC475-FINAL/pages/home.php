<section class="center intro">
    <h1>Podracing</h1>
    <div class="select">
        <select name="racer1" id="racer1" onchange="selectRacer(1)"></select>
        <div class="select_arrow"></div>
    </div>
    <div class="select">
        <select name="racer2" id="racer2" onchange="selectRacer(2)"></select>
        <div class="select_arrow"></div>
    </div>
    <div class="button">
        <input type="button" class="btn" id="race" name="race" value="RACE!" onclick="startRace()">
        <input type="button" class="btn" id="random-race" name="random-race" value="Random Race!" onclick="startRace(1)">
    </div>
</section>

<section>
    <canvas id="raceCanvas" width="2000" height="400" class="canvas"></canvas>
</section>

<div class="modal center" id="modal1">
    <div class="modal-content">
        <div>
            <h2 id="winner"></h2>
            <img src="" class="won-img" id="wonimg" style="cursor: pointer;" onclick="raceAgain()">
        </div>
        <div>
            <input type="button" class="btn btn-dark" value="Race Again" onclick="raceAgain()">
            <a class="btn btn-dark" href="stats">View Stats</a>
        </div>
    </div>
</div>