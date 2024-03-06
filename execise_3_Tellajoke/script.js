let myjokes = [
  {
    "error": false,
    "amount": 10,
    "jokes": [
      {
        "category": "Pun",
        "type": "single",
        "joke": "Today, my son asked \"Can I have a book mark?\" and I burst into tears.\n11 years old and he still doesn't know my name is Brian.",
        "flags": {
          "nsfw": false,
          "religious": false,
          "political": false,
          "racist": false,
          "sexist": false,
          "explicit": false
        },
        "id": 200,
        "safe": true,
        "lang": "en"
      },
      {
        "category": "Pun",
        "type": "single",
        "joke": "How do you make holy water? You boil the hell out of it.",
        "flags": {
          "nsfw": false,
          "religious": true,
          "political": false,
          "racist": false,
          "sexist": false,
          "explicit": false
        },
        "id": 202,
        "safe": false,
        "lang": "en"
      },
      {
        "category": "Programming",
        "type": "single",
        "joke": "Algorithm: A word used by programmers when they don't want to explain how their code works.",
        "flags": {
          "nsfw": false,
          "religious": false,
          "political": false,
          "racist": false,
          "sexist": false,
          "explicit": false
        },
        "id": 51,
        "safe": true,
        "lang": "en"
      },
      {
        "category": "Programming",
        "type": "single",
        "joke": "I have a joke about Stack Overflow, but you would say it's a duplicate.",
        "flags": {
          "nsfw": false,
          "religious": false,
          "political": false,
          "racist": false,
          "sexist": false,
          "explicit": false
        },
        "safe": true,
        "id": 301,
        "lang": "en"
      },
      {
        "category": "Programming",
        "type": "single",
        "joke": "Being a self-taught developer is almost the same as being a cut neck chicken because you have no sense of direction in the beginning.",
        "flags": {
          "nsfw": false,
          "religious": false,
          "political": false,
          "racist": false,
          "sexist": false,
          "explicit": false
        },
        "id": 184,
        "safe": false,
        "lang": "en"
      },
      {
        "category": "Pun",
        "type": "single",
        "joke": "A horse walks into a bar.\n\"Hey\", the Bartender says.\n\"Sure\", the horse replies.",
        "flags": {
          "nsfw": false,
          "religious": false,
          "political": false,
          "racist": false,
          "sexist": false,
          "explicit": false
        },
        "id": 74,
        "safe": true,
        "lang": "en"
      },
      {
        "category": "Misc",
        "type": "single",
        "joke": "Relationship Status: just tried to reach for my dog's paw and he pulled it away so I pretended I was reaching for the remote.",
        "flags": {
          "nsfw": false,
          "religious": false,
          "racist": false,
          "sexist": false,
          "political": false,
          "explicit": false
        },
        "id": 195,
        "safe": true,
        "lang": "en"
      },
      {
        "category": "Dark",
        "type": "single",
        "joke": "My ex had an accident. I told the paramedics the wrong blood type for her. She'll finally experience what rejection is really like.",
        "flags": {
          "nsfw": false,
          "religious": false,
          "political": false,
          "racist": false,
          "sexist": false,
          "explicit": false
        },
        "id": 152,
        "safe": false,
        "lang": "en"
      },
      {
        "category": "Programming",
        "type": "single",
        "joke": "The six stages of debugging:\n1. That can't happen.\n2. That doesn't happen on my machine.\n3. That shouldn't happen.\n4. Why does that happen?\n5. Oh, I see.\n6. How did that ever work?",
        "flags": {
          "nsfw": false,
          "religious": false,
          "political": false,
          "racist": false,
          "sexist": false,
          "explicit": false
        },
        "id": 123,
        "safe": true,
        "lang": "en"
      },
      {
        "category": "Programming",
        "type": "single",
        "joke": "Two SQL tables sit at the bar. A query approaches and asks \"Can I join you?\"",
        "flags": {
          "nsfw": false,
          "religious": false,
          "political": false,
          "racist": false,
          "sexist": false,
          "explicit": false
        },
        "id": 221,
        "safe": true,
        "lang": "en"
      }
    ]
  }

]

let index = Math.floor(Math.random() * myjokes[0].jokes.length);
console.log(index);
joke.innerHTML = myjokes[0].jokes[index].joke;
