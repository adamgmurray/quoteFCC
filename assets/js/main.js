//1.)set trigger to action click
//2.)create array variable of quote strings
//3.)create random number variable limited in range by array length
//4.)use .text() function on quote selector to
$("#getQuote").on("click", function(){
var quoteArray = [
  "Strive each day to make your life purer, richer, and more luminous. You will subtly and imperceptibly lead all of creation heavenward.",
  //0
  "Our Higher Self is perfect, Omniscient and Almighty. A fragment of God himself. A pure, transparent, luminous, Quintessence",
  //1
  "Not only must the most privileged feel they are brothers and sisters of the most destitute, but the most destitute must feel as well that something within them makes them equal to the greatest sages and geniuses.",
  //2
  "Peace is the result of an inner state of harmony. It is not obtained by eliminating anything external, it is inside ourselves that we must find and suppress the causes of war.",
  //3
  "Whatever your trials, remind yourself that you are a spirit and are capable of changing your destiny.",
  //4
  "Instead of looking for love, give it; constantly renew it in yourself and you will always feel its presence within you. It will always be there smiling at you, gazing on you kindly.",
  //5
  "Gratitude is what opens the spiritual doors to all the blessings. Everything becomes clear, you see, you feel, you live.",
  //6
  "The day I acquired the habit of consciously pronouncing the words thank you, I felt I had gained possession of a magic wand capable of transforming everything.",
  //7
  "If you see to it each day that your conduct is impeccable, the following day will be completely clear, and you will be free to carry out your plans, always vigilant that you leave no loose ends. In this way, each new day will find you free and well disposed.",
  //8 Last Omraam Quote

  "Do not look for happiness outside yourself. The awakened seek happiness inside.",
  "What sort of love is permeated by jealousy? You are jealous because you are unaware that everything you need is inside you.",
  "If you pursue happiness, you are an ordinary person. If happiness pursues you, you are an extraordinary person. Do not chase happiness; let it chase you.",
  "Death can be understood as the passage from one form to another, from a limited degree of life to another higher, freer one. It is wrong to assume that everything ends with death; what ends is only the temporary conditions in which people have lived on earth...",
  "If you do not fling old ideas out of your mind, you cannot give birth to new ones.",
  "What does jealousy indicate? Jealousy is love manifested in the physical world. If you are jealous you have a debt to pay; if someone is jealous of you, he has a debt to pay to you.",
  "Love resolves all contradictions. Without love, man cannot make sense of his existence.",
  "Being happy is a great science. If you are not happy, do not be confused. Happiness is hard to achieve.",
  "Stop in somebody's shadow to rest and cool down, and you are lost. No one can make anyone else happy.",
  "A person who asks love of others, but does not himself give it, cannot be loved. Always be the first to give love and it shall be given to you. As long as you do not give your heart first, you will be far from love."
                ];  //end quotesObject

  random = Math.floor(Math.random() *quoteArray.length);

 $(".quote").text(quoteArray[random]);

  if(random<=8){
      $(".author-text").text("Omraam Mikhael Aivanhov");
  }else{
       $(".author-text").text("Peter Deunov");
  }

    }); //end getQuote

//Tweet Button
//1.)set action on click
//2.)assign dynamic quote to str variable set as text with .text()
//3.)select link element and replace the href value
//4.)assign href value to tweet link + str variable
$(".tweet").on("click", function(){
  var str2 =  $(".quote").text()
$("a").attr("href", "https://twitter.com/intent/tweet?status="+str2);
});
