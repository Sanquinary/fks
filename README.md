# fks - finn kontostreng

## Find account strings at IBV with this tool.

This is a tool designed for the University of Oslo. The purpose of the tool is to make it easier for the user to find 'account strings' for internal use of UiO. A text file with a list of account strings is published and updated to the UiO website regularly, I then retrieve this and make it easier with a single GUI with an attempt of focusing on good UX to find these.

### Norsk
## Finn kontostrenger på IBV med dette verktøyet.

Dette er et verktøy laget for Universitetet i Oslo. Hensikten med verktøyet er å gjøre det lettere for brukeren å finne 'kontostrenger' for internt bruk på UiO.
En tekstfil med en liste over kontostrenger blir publisert og oppdatert på UiO's nettside regelmessig da henter jeg denne og gjør det lettere med et enkelt GUI med et fokus på god brukervennlighet på å finne disse.


# Information & FAQ

## How it works

The task of this tool is pretty simple.
- A jQuery script running AJAX parses a text document and creates a HTML table. It creates a colon on each delimiter ('::') and a row on each linebreak.
- The rest is CSS and other scripts that is making the user experience a lot better.

## Guide

If you're either an employee on UiO or just a kind stranger who thinks this tool could be of use, then here's a small little guide on how to use and implement it.

For UiO employees, use [this](https://github.com/Sanquinary/fks/blob/master/UiOVortex_implementation.md) code to implement in Vortex.

- Make sure you got a file `.csv`, `.txt` etc. which is delimited, which you get the content from.
- Make changes to the `main.js` file and other file paths accordingly.
