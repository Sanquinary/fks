# Vortex Implementation for UiO

Host site: https://www.uio.no/for-ansatte/enhetssider/mn/kontostrenger/


# Norsk
```html
<!-- utviklet av Matias Kristiansen, med litt hjelp fra Merlijn "Zemanzo" van der Kamp. -->
<link href="../assets/css/style.css" rel="stylesheet" />
<h3 id="overskrift">Institutt: </h3>
<div class="information">
    <div class="alert alert-danger" id="nettleser" style="display:none;"><strong>Vi har oppdaget at du bruker en nettleser som ikke er anbefalt! Nettsiden fungerer kanskje ikke som den skal. Vennligst bruk en anbefalt nettleser som Google Chrome eller Firefox.</strong></div>
    <div class="alert alert-warning" id="driftsmelding"><strong>Driftsmelding: </strong>FKS er oppdatert til <b>v2.1.0</b>! Kontakt <a href="mailto:drift@ibv.uio.no">drift@ibv.uio.no</a> ved feil eller tilbakemelding.</div>
    <div class="alert alert-info">
        <p><b>Oppdatering: </b>Klikk på en rad i tabellen for å kopiere radens kontostreng. Superkjapt og superenkelt!</p>
        <hr />
        <div class="alert alert-success" id="kontostreng_kopiert" style="display:none;">Du har kopiert kontostreng: <b id="row_copy">...</b></div>
        <div id="oppforinger_totalt">Totalt antall oppføringer: </div>
        <div id="oppforinger_dynamisk">Totalt antall oppføringer etter søk: <b id="row_count">...</b></div>
    </div>
    <div id="kontostreng_sok"><input class="form-control" id="kontostreng_input" name="kontostreng_input" placeholder="Søk i tabellen her..." type="input" /></div>
    <div class="tabell" id="tabell" style="width:100%;">
    <table class="table table-bordered table-striped" style="margin-top:20px; margin-bottom:0px !important;">
        <thead>
            <tr>
                <th style="width: 15%;" title="Navn">Navn</th>
                <th style="width: 8%;" title="Sted">Sted</th>
                <th style="width: 8%;" title="Prosjekt">Prosjekt</th>
                <th style="width: 8%;" title="Tiltak">Tiltak</th>
                <th style="width: 30%;" title="Kontonavn">Kontonavn</th>
                <th style="width: 11%;" title="Kommentar">Kommentar</th>
            </tr>
        </thead>
    </table>
    <div class="alert alert-danger" id="no_result" style="display:none; margin:0;">
        <center>Ingen resultat! Har du skrevet feil?</center>
    </div>
    <div class="table-responsive">
        <div id="kontostreng_table"></div>
    </div>
</div>
<script src="../assets/js/main.js"></script>
<script src="../assets/js/copytoclip.js"></script>
<!-- utviklet av Matias Kristiansen, med litt hjelp fra Merlijn "Zemanzo" van der Kamp. -->
```

# English

```
<!-- developed by Matias Kristiansen, with a little help from Merlijn "Zemanzo" van der Kamp. -->
<link href="../assets/css/style.css" rel="stylesheet" />
<h3 id="overskrift">Department: </h3>
<div class="information">
    <div class="alert alert-danger" id="nettleser" style="display:none;"><strong>We've detected you are using an unsupported browser! The website may not work properly. Please use one of the recommended browsers e.g Google Chrome or Firefox.</strong></div>
    <div class="alert alert-warning" id="driftsmelding"><strong>Operating message: </strong>FKS is updated to <b>v2.1.0</b>! Contact <a href="mailto:drift@ibv.uio.no">drift@ibv.uio.no</a> for errors or feedback.</div>
    <div class="alert alert-info">
        <p><b>Update: </b>Click on a table row to copy its account string. Super quick and super easy!</p>
        <hr>
        <div class="alert alert-success" id="kontostreng_kopiert" style="display:none;">You've copied account string: <b id="row_copy">...</b></div>
        <div id="oppforinger_totalt">Total number of entries: </div>
        <div id="oppforinger_dynamisk">Total number of entries after input: <b id="row_count">...</b></div>
    </div>
    <div id="kontostreng_sok"><input class="form-control" id="kontostreng_input" name="kontostreng_input" placeholder="Search in the table here..." type="input" /></div>
    <div class="tabell" id="tabell" style="width:100%;">
    <table class="table table-bordered table-striped" style="margin-top:20px; margin-bottom:0px !important;">
        <thead>
            <tr>
                <th style="width: 15%;" title="Name">Name</th>
                <th style="width: 8%;" title="Location">Location</th>
                <th style="width: 8%;" title="Project">Project</th>
                <th style="width: 8%;" title="Measures">Measures</th>
                <th style="width: 30%;" title="Account name">Account name</th>
                <th style="width: 11%;" title="Comment">Comment</th>
            </tr>
        </thead>
    </table>
    <div class="alert alert-danger" id="no_result" style="display:none; margin:0;">
        <center>No result! Have you misspelled something?</center>
    </div>
    <div class="table-responsive">
        <div id="kontostreng_table"></div>
    </div>
</div>
<script src="../assets/js/main.js"></script>
<script src="../assets/js/copytoclip.js"></script>
<!-- developed by Matias Kristiansen, with a little help from Merlijn "Zemanzo" van der Kamp. -->
```