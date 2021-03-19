


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


const Facts = () => {

    const random_index = Math.floor(Math.random() * 6)

    const poemProfile1 = poetryTerms1[random_index];

    const poemProfile2 = poetryTerms2[random_index];

    console.log(poemProfile2)
    console.log(poemProfile1)


    return (
        <>
            <div className="factWrapper" >
                <section className="poetryDivSection" >
                    <div className="poetryTermsDiv poetryTerms1div">
                        <p className="titlePara">{poemProfile1.title}</p>
                        <p className="titleDef">{poemProfile1.definition}</p>
                    </div>
                </section >
            </div>
        </>

    )

}

export default Facts


