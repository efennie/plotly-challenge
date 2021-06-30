//When importing json, try using metadata


//build the data pull in 1st then figure out event listener
practice = d3.json("samples.json");
console.log(practice);

 //d3.json("samples.json").then((data) => {
    //var metadata = data.metadata;
    //var resultArray = metadata.filter(subjectID => subjectID.id == sample);
    //var result = resultArray[0];

    //console.log(result);

 //});
//console.log(result);


//HINT 2

 //Event Listener is different in this html, review id="selDataset" in index.html
 //<select id="selDataset" onchange="optionChanged(this.value)"></select>

//*/s
//event listener
