//set data array of engine info
var engineData = [
  {
    name: "BL20-GH",
    commonname: "Brookville",
    yearbuilt: "2008",
    enginenumber: "110-115(MNR), 125-130(NH)",
    photoURL: "https://www.mta.info/sites/default/files/archive/imgs/Locomotive_shop_008.jpg",
},
  {
    name: "BL14-CG",
    commonname: "Yellowbird",
    yearbuilt: "2008",
    enginenumber: "401-402",
    photoURL: "https://live.staticflickr.com/3572/3474231002_d644e7ecc6.jpg",
},
  {
    name: "P32AC-DM",
    commonname: "Genesis",
    yearbuilt: "1995, 1998, 2000",
    enginenumber: "201-227(MNR), 228-231(CDOT)",
    photoURL: "https://www.wamc.org/sites/wamc/files/201508/metronorthtrain.jpg"
},
  {
    name: "P40BH",
    commonname: "Amtrak Genesis",
    yearbuilt: "1994",
    enginenumber: "833, 834, 836, 838, 840-843",
    photoURL: "https://preview.redd.it/v5wvbjr9ujh21.jpg?width=960&crop=smart&auto=webp&s=4afeb19d862947c39c80d8e38c590c47e65e60a8",
},
  {
    name: "GP40-2H",
    commonname: "GP40",
    yearbuilt: "1971",
    enginenumber: "6694-6699",
    photoURL: "https://live.staticflickr.com/587/32584724122_aa7271e373_b.jpg",
},
  {
    name: "GP35",
    commonname: "GP35",
    yearbuilt: "1964, rebuild: 1993",
    enginenumber: "101-106",
    photoURL: "https://trn.trains.com/~/media/images/railroad-news/news-wire/2016-and-prior/2015/10/metra_north_strsch_1758s.jpg",
},
]
// when engine photo is clicked, run code
$('.gridDiv').click(function() {
  //pull background image URL
	var photoURL = $(this).css('background-image')
  // log the album cover url to the console
  console.log(photoURL)
  // change background image of rightframe
  $('#rightcell2').css('background-image', `${photoURL}`)
  // change top frame to engine commonname

  

})
