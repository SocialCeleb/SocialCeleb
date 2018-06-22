function getCelebs() {
  $.get("/api/celebs", function(data) {
    var names = [];
    for (var i = 0; i < data.length; i++) {
      names.push(data[i].name);
    }
    for (var i = 0; i < names.length; i++) {
   
    }
    //bieber
    console.log(names[0])
//katy
    console.log(names[1])
  
  
  });
  $.get("/api/popularity", function(data) {
    var account_type = [];
    var count=[];
    for (var i = 0; i < data.length; i++) {
   
      account_type.push(data[i].account_type)
      count.push(data[i].count)
      console.log(data[i])
      console.log(data[i].account_type)
      console.log(data[i].count)
     
     
    }
  
   //bieber
  console.log("beiliver",account_type[0])
   console.log(count[0])
   $("#type4").text(count[5] + " " + "Twitter followers")
      $("#count3").text(count[0] + " " + "Instagram followers")
   //bieber
  console.log("beiliver",account_type[5])
   console.log(count[5])
 
   //katy
  console.log("roar",account_type[1])
   console.log(count[1])
   $("#count1").text(count[4] + " " + "Twitter followers")
      $("#count2").text(count[0] + " " + "Instagram followers")
   console.log("roar",account_type[4])
   console.log(count[4])
  //   renderCelebList(rowsToAdd);
  //SELENA
  console.log("come get it",account_type[2])
   console.log(count[2])
   $("#type5").prepend(count[2] + " " + "Twitter followers")
      $("#count6").prepend(count[3] + " " + "Instagram followers")
   //SELENA
  console.log("come get it",account_type[3])
   console.log(count[3])
 
 
  });
}
getCelebs();

new Chart(document.getElementById("bar-chart"), {
  type: 'bar',
  data: {
    labels: ["Katy-twitter", "Katy-Instagram", "Justin-twitter", "Justin-Instagram", "Selena-twitter", "Selena-Instagram"],
    datasets: [
      {
        label: "Instagram-Twitter Popularity",
        backgroundColor: ["#FFD700", "#FFD700", " #8B7500", " #8B7500","#996515","#996515"],
        data: [110,71,107,101,57,138]
      }
    ]
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text: 'Celebs Popularity Representation'
    }
  }
});