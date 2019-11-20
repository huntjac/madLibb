function dotheStuff(){

   let Noun1 = document.getElementById("Noun").value;
   let Noun2 = document.getElementById("secondNoun").value;
   let Noun3 = document.getElementById("thirdNoun").value;
   let Job1 = document.getElementById("yourJob").value;
   let Verb1 = document.getElementById("Verb").value;
   let Place1 = document.getElementById("yourPlace").value;
   let Verb2 = document.getElementById("secondVerb").value;
   let Noun4 = document.getElementById("fourthNoun").value;
   let Verb3 = document.getElementById("thirdVerb").value;
   let Noun5 = document.getElementById("fifthNoun").value;
   let Noun6 = document.getElementById("sixthNoun").value;
   let Feel1 = document.getElementById("yourFeel").value;                                                                      
    document.getElementById("myForm").innerHTML = "<h3>It was during the Battle of <span class='word'>" + Noun1 + "</span>""when I was running through a <span class='word'> "+ Noun2 + "</span>""when a <span class='word'> "+ Noun3 + "</span>.""went off right next to our Platoon. Our <span class='word'> "+ Job1 +"</span>.""yelled for us to <span class='word'>" + Verb1 + "</span>.""to the nearest <span class='word'" + Place1 +"</span>.""we could find. When we got to the <span class='word'" + Verb2 +"</span>""we span class='word'> " + Noun4 +"</span>.""to start a fire. As we were starting the fire, the enemy saw the <span class='word'" + Verb3 +"</span>""from the fire and started <span class='word'>" + Noun5 + "</span>""at us. We all ducked behind the <span class='word'>" + Noun6 +"</span>.""and destroyed the enemy. We were all <span class='word'>" + Feel1 +"</span>.""that the war was over.</h3>";
}