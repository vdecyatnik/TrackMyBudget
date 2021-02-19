let db;

// create a new db request for "budget" database.
const request = indexedDB.open("budget",1);


request.onupgradeneeded = function (event) {

    // create object store 
    const db = event.target.result;
    db.createObjectStore("pending", { autoIncrement: true } );
};



request.onsuccess = function (event) {
    db = event.target.result;

    if (navigator.onLine) {
        checkDatabse();
    }
};
 
request.onerror = function (event) {
    console.log("error");

};

function saveRecord (record) {

// create transaction on pending db
const transaction = db.transaction (["pending"], "readwrite");

// access object store

const budgetStore = transaction.objectStore("pending"); 

// add record to store with add method

budgetStore.add(record);

}


