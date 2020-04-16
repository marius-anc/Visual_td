var tables = document.getElementsByTagName("table"); // get all the tables from DOM

for (var i = 0; i < tables.length; i++) {

    var td_s = tables[i].getElementsByTagName("td"); // get all the td tags

    var columns = {}; // creates  an array of all right-distances of the columns

    //populate the array with unique values
    for (var i2 = 0; i2 < td_s.length; i2++) {
        var distance = td_s[i2].getBoundingClientRect().right;
        if (typeof columns[distance] == "undefined") {

            columns[distance] = [td_s[i2]];

        } else {
            columns[distance].push(td_s[i2]);

        }


    }


    // itterate over columns distances
    for (var key in columns) {

        // collect the text and deletes the content of td with no solid borders
        var content_colector = "";
        for (var i3 = 0; i3 < columns[key].length; i3++) {

            content_colector += " " + columns[key][i3].textContent;

            columns[key][i3].innerText = "";


            // paste the collected content in the first td with solid margin at the same right distance, also add a class following pattern 'class + distance' for easy reference
            if (window.getComputedStyle(columns[key][i3]).borderBottomStyle == "solid") {
                columns[key][i3].innerText = "";
                columns[key][i3].innerText = content_colector;
                columns[key][i3].className = "class"+key;
                content_colector = "";
            }


        }
    }
}
