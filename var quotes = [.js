var quotes = [
    'If you want to know the truth about something, there is a very good chance that Aries will give it to you straight.',
    'You can definitely count on an Aries when the chips are down.',
    'If you want to spark an Aries passion take their face in your hands, look them in the eye and passionately kiss them.',
    'Aries is not about hanging in until the finish, or about being nice, they are born to initiate and inspire, and then to initiate and inspire again, and again.',
    'Aries is born to make their mark on the world and take the road less traveled.',
    'Aries are their own heroes and are true to themselves.',
    'Aries is fully committed to what they believed in.',
    'Aries is resilient, guileless and optimistic.',
    'Failure is not an option for an Aries, it is a prerequisite for success.'
    ];
    var quotes1 = [
        'Is this working?',
        'please'
        ];
    
    function newQuote() {
        var randomNumber = Math.floor(Math.random() * (quotes.length));
        document.getElementById('quoteDisplay').innerHTML = quotes [randomNumber];
        var randomNumber2 = Math.floor(Math.random() * (quotes1.length));
        document.getElementById('quoteDisplay1').innerHTML = quotes1 [randomNumber2];
    }