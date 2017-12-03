/**
 *   @author Borowiak, Matthew
 *   @version 0.0.1
 *   @summary Project 5 code || Created 11.28.17
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let numPassengers, numZones, totalPrice;

function main() {
    process.stdout.write('\x1Bc'); //Clears the screen
    setContinueResponse();
    while (continueResponse === 1) {
        setNumPassengers()
        setNumZones();
        setTotalPrice();
    }
}

main();

function setContinueResponse() {
    if (continueResponse != null) {
        continueResponse = -1;
        while (continueResponse !== 0 && continueResponse !== 1) {
            continueResponse = Number(PROMPT.question(`\nDo you want to continue? [0=no, 1=yes]: `));
        }
    } else {
        continueResponse = 1;
    }
}

int[] priceIndex = new int[4][4];
priceIndex = {{7.5,14,20,25},{10,18.5,21,27.5},{12,22,32,36},{12.75,23,33,37}};


function setNumPassengers() {
    NumPassengers = PROMPT.question(`\nPlease enter Number of Passengers: `);
}

function setNumZones() {
    NumZones = PROMPT.question(`\nPlease enter Number of Zones to be traveled through: `);
}

function setTotalPrice() {
    TotalPrice = PriceIndex[NumPassengers - 1][NumZones];
}

function printTotalPrice() {
    process.stdout.write('\x1Bc'); //Clears the screen
    console.log(`\nThe total cost for the ticket(s) is:  $"TotalPrice"`);