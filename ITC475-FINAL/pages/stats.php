<section class="center intro" id="loading1">
	<h2>Loading stats...</h2>
</section>
<section class="center intro">
	<h1>Race Stats</h1>
	<br>
	<h3>Previous 5 Races</h3>

	<table id="table1">
	</table>

	<br><br>
	<h2>Search Races</h2>
	
	<div class="select">
        <select name="racer1" id="racer1"></select>
        <div class="select_arrow"></div>
    </div>
    <div class="select">
        <select name="racer2" id="racer2"></select>
        <div class="select_arrow"></div>
    </div>
    <div class="button">
        <input type="button" class="btn" id="search" name="search" value="Search" onclick="searchStats()">
    </div>

    <section class="center intro" id="loading2" style="display:none;">
		<h2>Searching...</h2>
	</section>

    <table id="table2">
	</table>

</section>