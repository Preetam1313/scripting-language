//task 1

var cars = ["audi", "bmw", "toyota", "hundia", "range rover", "honda", "ford"]
var cellphones = ["apple" , "sumsung" , "nokia" , "oppo" , "vivo" , "blackberry" , "sony"]
cars.shift();
cellphones.push("micromax");
cars.shift();
document.write(cellphones  + "<br>");
document.write(cars);


//task 2

var messi = {
	profession : "footballer",
	height : "1.7 meter",
	weight : "72 kg",
	team : "barcelona",
	country : "argentina"
}

document.write(messi.team + "<br>");
document.write(messi.country + "<br>");
document.write(messi.profession + "<br>");

var car = {
	brand = "mercedes-benz",
	price = 100000
	industry = "automotive",
	milege = "9.6 kmpl",
	seat = "two seater",

}