


const Facts = () => {

    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }


    shuffle(poetryTerms1);
    console.log(arr);

    shuffle(poetryTerms2);
    console.log(arr);


    // HTML
    <section className="poetryDivSection">
        <div className="poetryTermsDiv poetryTerms1div">
            <p className="titlePara">{poetryTerms1.title}</p>
            <p className="titleDef">{poetryTerms1.definiton}</p>
        </div>

        <div className="poetryTerms2div">
            <p className="titleP">{poetryTerms2.title}</p>
            <p className="titleDef">{poetryTerms2.definiton}</p>
        </div>
    </section>



// CSS

.poetryDivSection {
    display: flex;
    justify - content: center;
    align - items: center;
    flex - direction: column;
    width: 100 %;
    padding: 40px 0px;
}

.poetryTermsDiv {
    display: flex;
    justify - content: center;
    align - items: center;
    flex - direction: column;
    width: 50 %;
    padding: 20px;
    background - color: #FFFEB9;

}

.poetryTerms1div {
    border - right: 2px solid #1A4543
}

.poetryTerms2div {
    border - left: 2px solid#1A4543
}

.titlePara {
    font - family: 'Kanit', sans - serif;
    color: #1A4543
}

.titleDef {
    font - family: 'Kanit', sans - serif;
    color: #85FB83;
}

const poetryTerms1 = [

    {
        title: "Assonance",
        definition: "Close repetition of vowel sounds."
    },
    {
        title: "Alliteration",
        "definition": "Close repetition of consonant sounds, especially initial consonant sounds."
    },
    {
        title: "Caesura",
        definition: "A deliberate rhetorical, grammatical, or rhythmic pause, break, cut, turn, division, or pivot in poetry."
    },
    {
        title: "Chapbook",
        definition: "A small book of about 24-50 pages."
    },
    {
        title: "Epigraph",
        definition: "A short verse, note, or quotation that appears at the beginning of a poem or section; usually presents an idea or theme on which the poem elaborates, or contributes background information not reflected in the poem itself."
    },
    {
        title: "Enjambment",
        definition: "Continuation of sense and rhythmic movement from one line to the next; also called a run on line."
    }
]

// from
// https://quizlet.com


const poetryTerms2 = [

    {
        title: "Meter",
        definition: "The rhythmic measure of a line."
    },
    {
        title: "Refrain",
        definition: "A repeated line within a poem, similar to the chorus of a song."
    },
    {
        title: "Stanza",
        definition: "Group of lines making up a single unit; like a paragraph in prose."
    },
    {
        title: "Tercet",
        definition: "Stanza or poem of 3 lines."
    },
    {
        title: "Trochee",
        definition: "Foot consisting of a stress followed by an unstressed syllable."
    },
    {
        title: "Line",
        definition: "Basic unit of a poem; measured in feet if metrical."
    }
]

        // from
        // https://www.writersdigest.com
    

}


const Facts = () => {x
    return (

const poetryTerms1 = [

            {
                title: "Assonance",
                definition: "Close repetition of vowel sounds."
            },
            {
                title: "Alliteration",
                "definition": "Close repetition of consonant sounds, especially initial consonant sounds."
            },
            {
                title: "Caesura",
                definition: "A deliberate rhetorical, grammatical, or rhythmic pause, break, cut, turn, division, or pivot in poetry."
            },
            {
                title: "Chapbook",
                definition: "A small book of about 24-50 pages."
            },
            {
                title: "Epigraph",
                definition: "A short verse, note, or quotation that appears at the beginning of a poem or section; usually presents an idea or theme on which the poem elaborates, or contributes background information not reflected in the poem itself."
            },
            {
                title: "Enjambment",
                definition: "Continuation of sense and rhythmic movement from one line to the next; also called a run on line."
            }
        ]

// from
// https://quizlet.com


const poetryTerms2 = [

            {
                title: "Meter",
                definition: "The rhythmic measure of a line."
            },
            {
                title: "Refrain",
                definition: "A repeated line within a poem, similar to the chorus of a song."
            },
            {
                title: "Stanza",
                definition: "Group of lines making up a single unit; like a paragraph in prose."
            },
            {
                title: "Tercet",
                definition: "Stanza or poem of 3 lines."
            },
            {
                title: "Trochee",
                definition: "Foot consisting of a stress followed by an unstressed syllable."
            },
            {
                title: "Line",
                definition: "Basic unit of a poem; measured in feet if metrical."
            }
        ]

        // from
        // https://www.writersdigest.com
    )

}