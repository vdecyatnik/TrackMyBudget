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
    console.log("erro");

};
