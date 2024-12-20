const movieQuotes = [{
    "quote": "Frankly, my dear, I don't give a damn.",
    "title": "Gone with the Wind",
    "year": 1939
  },
  {
    "quote": "I'm gonna make him an offer he can't refuse.",
    "title": "The Godfather",
    "year": 1972
  },
  {
    "quote": "You don't understand! I coulda had class. I coulda been a contender. I could've been somebody, instead of a bum, which is what I am.",
    "title": "On the Waterfront",
    "year": 1954
  },
  {
    "quote": "Toto, I've a feeling we're not in Kansas anymore.",
    "title": "The Wizard of Oz",
    "year": 1939
  },
  {
    "quote": "Here's looking at you, kid.",
    "title": "Casablanca",
    "year": 1942
  },
  {
    "quote": "Go ahead, make my day.",
    "title": "Sudden Impact[d]",
    "year": 1983
  },
  {
    "quote": "All right, Mr. DeMille, I'm ready for my close-up.",
    "title": "Sunset Boulevard",
    "year": 1950
  },
  {
    "quote": "May the Force be with you.",
    "title": "Star Wars",
    "year": 1977
  },
  {
    "quote": "Fasten your seatbelts. It's going to be a bumpy night.",
    "title": "All About Eve",
    "year": 1950
  },
  {
    "quote": "You talkin' to me?",
    "title": "Taxi Driver",
    "year": 1976
  },
  {
    "quote": "What we've got here is failure to communicate.",
    "title": "Cool Hand Luke",
    "year": 1967
  },
  {
    "quote": "I love the smell of napalm in the morning.",
    "title": "Apocalypse Now",
    "year": 1979
  },
  {
    "quote": "Love means never having to say you're sorry.",
    "title": "Love Story",
    "year": 1970
  },
  {
    "quote": "The stuff that dreams are made of.",
    "title": "The Maltese Falcon",
    "year": 1941
  },
  {
    "quote": "E.T. phone home.",
    "title": "E.T. the Extra-Terrestrial",
    "year": 1982
  },
  {
    "quote": "They call me Mister Tibbs!",
    "title": "In the Heat of the Night",
    "year": 1967
  },
  {
    "quote": "Rosebud.",
    "title": "Citizen Kane",
    "year": 1941
  },
  {
    "quote": "Made it, Ma! Top of the world!",
    "title": "White Heat",
    "year": 1949
  },
  {
    "quote": "I'm as mad as hell, and I'm not going to take this anymore!",
    "title": "Network",
    "year": 1976
  },
  {
    "quote": "Louis, I think this is the beginning of a beautiful friendship.",
    "title": "Casablanca",
    "year": 1942
  },
  {
    "quote": "A census taker once tried to test me. I ate his liver with some fava beans and a nice Chianti.",
    "title": "The Silence of the Lambs",
    "year": 1991
  },
  {
    "quote": "Bond. James Bond.",
    "title": "Dr. No[h]",
    "year": 1962
  },
  {
    "quote": "There's no place like home.",
    "title": "The Wizard of Oz",
    "year": 1939
  },
  {
    "quote": "I am big! It's the pictures that got small.",
    "title": "Sunset Boulevard",
    "year": 1950
  },
  {
    "quote": "Show me the money!",
    "title": "Jerry Maguire",
    "year": 1996
  },
  {
    "quote": "Why don't you come up sometime and see me?",
    "title": "She Done Him Wrong",
    "year": 1933
  },
  {
    "quote": "I'm walkin' here! I'm walkin' here!",
    "title": "Midnight Cowboy",
    "year": 1969
  },
  {
    "quote": "Play it, Sam. Play 'As Time Goes By.'",
    "title": "Casablanca",
    "year": 1942
  },
  {
    "quote": "You can't handle the truth!",
    "title": "A Few Good Men",
    "year": 1992
  },
  {
    "quote": "I want to be alone.",
    "title": "Grand Hotel",
    "year": 1932
  },
  {
    "quote": "After all, tomorrow is another day!",
    "title": "Gone with the Wind",
    "year": 1939
  },
  {
    "quote": "Round up the usual suspects.",
    "title": "Casablanca",
    "year": 1942
  },
  {
    "quote": "I'll have what she's having.",
    "title": "When Harry Met Sally...",
    "year": 1989
  },
  {
    "quote": "You know how to whistle, don't you, Steve? You just put your lips together and blow.",
    "title": "To Have and Have Not",
    "year": 1944
  },
  {
    "quote": "You're gonna need a bigger boat.",
    "title": "Jaws",
    "year": 1975
  },
  {
    "quote": "Badges? We ain't got no badges! We don't need no badges! I don't have to show you any stinking badges!",
    "title": "The Treasure of the Sierra Madre",
    "year": 1948
  },
  {
    "quote": "I'll be back.",
    "title": "The Terminator",
    "year": 1984
  },
  {
    "quote": "Today, I consider myself the luckiest man on the face of the Earth.",
    "title": "The Pride of the Yankees",
    "year": 1942
  },
  {
    "quote": "If you build it, he will come.",
    "title": "Field of Dreams",
    "year": 1989
  },
  {
    "quote": "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
    "title": "Forrest Gump",
    "year": 1994
  },
  {
    "quote": "We rob banks.",
    "title": "Bonnie and Clyde",
    "year": 1967
  },
  {
    "quote": "Plastics.",
    "title": "The Graduate",
    "year": 1967
  },
  {
    "quote": "We'll always have Paris.",
    "title": "Casablanca",
    "year": 1942
  },
  {
    "quote": "I see dead people.",
    "title": "The Sixth Sense",
    "year": 1999
  },
  {
    "quote": "Stella! Hey, Stella!",
    "title": "A Streetcar Named Desire",
    "year": 1951
  },
  {
    "quote": "Oh, Jerry, don't let's ask for the moon. We have the stars.",
    "title": "Now, Voyager",
    "year": 1942
  },
  {
    "quote": "Shane. Shane. Come back!",
    "title": "Shane",
    "year": 1953
  },
  {
    "quote": "Well, nobody's perfect.",
    "title": "Some Like It Hot",
    "year": 1959
  },
  {
    "quote": "It's alive! It's alive!",
    "title": "Frankenstein",
    "year": 1931
  },
  {
    "quote": "Houston, we have a problem.",
    "title": "Apollo 13",
    "year": 1995
  },
  {
    "quote": "You've got to ask yourself one question: 'Do I feel lucky?' Well, do ya, punk?",
    "title": "Dirty Harry",
    "year": 1971
  },
  {
    "quote": "You had me at 'hello.'",
    "title": "Jerry Maguire",
    "year": 1996
  },
  {
    "quote": "One morning I shot an elephant in my pajamas. How he got in my pajamas, I don't know.",
    "title": "Animal Crackers",
    "year": 1930
  },
  {
    "quote": "There's no crying in baseball!",
    "title": "A League of Their Own",
    "year": 1992
  },
  {
    "quote": "La-dee-da, la-dee-da.",
    "title": "Annie Hall",
    "year": 1977
  },
  {
    "quote": "A boy's best friend is his mother.",
    "title": "Psycho",
    "year": 1960
  },
  {
    "quote": "Greed, for lack of a better word, is good.",
    "title": "Wall Street",
    "year": 1987
  },
  {
    "quote": "Keep your friends close, but your enemies closer.",
    "title": "The Godfather Part II",
    "year": 1974
  },
  {
    "quote": "As God is my witness, I'll never be hungry again.",
    "title": "Gone with the Wind",
    "year": 1939
  },
  {
    "quote": "Well, here's another nice mess you've gotten me into!",
    "title": "Sons of the Desert",
    "year": 1933
  },
  {
    "quote": "Say 'hello' to my little friend!",
    "title": "Scarface",
    "year": 1983
  },
  {
    "quote": "What a dump.",
    "title": "Beyond the Forest",
    "year": 1949
  },
  {
    "quote": "Mrs. Robinson, you're trying to seduce me. Aren't you?",
    "title": "The Graduate",
    "year": 1967
  },
  {
    "quote": "Gentlemen, you can't fight in here! This is the War Room!",
    "title": "Dr. Strangelove",
    "year": 1964
  },
  {
    "quote": "Elementary, my dear Watson.",
    "title": "The Adventures of Sherlock Holmes",
    "year": 1939
  },
  {
    "quote": "Take your stinking paws off me, you damned dirty ape.",
    "title": "Planet of the Apes",
    "year": 1968
  },
  {
    "quote": "Of all the gin joints in all the towns in all the world, she walks into mine.",
    "title": "Casablanca",
    "year": 1942
  },
  {
    "quote": "Here's Johnny!",
    "title": "The Shining",
    "year": 1980
  },
  {
    "quote": "They're here!",
    "title": "Poltergeist",
    "year": 1982
  },
  {
    "quote": "Is it safe?",
    "title": "Marathon Man",
    "year": 1976
  },
  {
    "quote": "Wait a minute, wait a minute. You ain't heard nothin' yet!",
    "title": "The Jazz Singer",
    "year": 1927
  },
  {
    "quote": "No wire hangers, ever!",
    "title": "Mommie Dearest",
    "year": 1981
  },
  {
    "quote": "Mother of mercy, is this the end of Rico?",
    "title": "Little Caesar",
    "year": 1931
  },
  {
    "quote": "Forget it, Jake, it's Chinatown.",
    "title": "Chinatown",
    "year": 1974
  },
  {
    "quote": "I have always depended on the kindness of strangers.",
    "title": "A Streetcar Named Desire",
    "year": 1951
  },
  {
    "quote": "Hasta la vista, baby.",
    "title": "Terminator 2: Judgment Day",
    "year": 1991
  },
  {
    "quote": "Soylent Green is people!",
    "title": "Soylent Green",
    "year": 1973
  },
  {
    "quote": "Open the pod bay doors, HAL.",
    "title": "2001: A Space Odyssey",
    "year": 1968
  },
  {
    "quote": "Surely you can't be serious.",
    "title": "Airplane!",
    "year": 1980
  },
  {
    "quote": "Yo, Adrian!",
    "title": "Rocky",
    "year": 1976
  },
  {
    "quote": "Hello, gorgeous.",
    "title": "Funny Girl",
    "year": 1968
  },
  {
    "quote": "Toga! Toga!",
    "title": "National Lampoon's Animal House",
    "year": 1978
  },
  {
    "quote": "Listen to them. Children of the night. What music they make.",
    "title": "Dracula",
    "year": 1931
  },
  {
    "quote": "Oh, no, it wasn't the airplanes. It was Beauty killed the Beast.",
    "title": "King Kong",
    "year": 1933
  },
  {
    "quote": "My precious.",
    "title": "The Lord of the Rings: The Two Towers",
    "year": 2002
  },
  {
    "quote": "Attica! Attica!",
    "title": "Dog Day Afternoon",
    "year": 1975
  },
  {
    "quote": "Sawyer, you're going out a youngster, but you've got to come back a star!",
    "title": "42nd Street",
    "year": 1933
  },
  {
    "quote": "Listen to me, mister. You're my knight in shining armor. Don't you forget it. You're going to get back on that horse, and I'm going to be right behind you, holding on tight, and away we're gonna go, go, go!",
    "title": "On Golden Pond",
    "year": 1981
  },
  {
    "quote": "Tell 'em to go out there with all they got and win just one for the Gipper.",
    "title": "Knute Rockne, All American",
    "year": 1940
  },
  {
    "quote": "A martini. Shaken, not stirred.",
    "title": "Goldfinger[aa]",
    "year": 1964
  },
  {
    "quote": "Who's on first.",
    "title": "The Naughty Nineties",
    "year": 1945
  },
  {
    "quote": "Cinderella story. Outta nowhere. A former greenskeeper, now, about to become the Masters champion. It looks like a mirac...It's in the hole! It's in the hole! It's in the hole!",
    "title": "Caddyshack",
    "year": 1980
  },
  {
    "quote": "Life is a banquet, and most poor suckers are starving to death!",
    "title": "Auntie Mame",
    "year": 1958
  },
  {
    "quote": "I feel the need—the need for speed!",
    "title": "Top Gun",
    "year": 1986
  },
  {
    "quote": "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
    "title": "Dead Poets Society",
    "year": 1989
  },
  {
    "quote": "Snap out of it!",
    "title": "Moonstruck",
    "year": 1987
  },
  {
    "quote": "My mother thanks you. My father thanks you. My sister thanks you. And I thank you.",
    "title": "Yankee Doodle Dandy",
    "year": 1942
  },
  {
    "quote": "Nobody puts Baby in a corner.",
    "title": "Dirty Dancing",
    "year": 1987
  },
  {
    "quote": "I'll get you, my pretty, and your little dog too!",
    "title": "The Wizard of Oz",
    "year": 1939
  },
  {
    "quote": "I'm the king of the world!",
    "title": "Titanic",
    "year": 1997
  }]

  export default movieQuotes;