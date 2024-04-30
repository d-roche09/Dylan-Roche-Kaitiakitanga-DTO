const quiz = {
    "What is 'Kaitiakitanga'?": "The protection of nature",
    "Why is protecting nature important?": "Because it helps keep animals and plants safe",
    "What is Kauri Dieback?": "A sickness that hurts Kauri trees",
    "How does Kauri Dieback spread?": "Through dirty shoes and gear in the forest",
    "What is special about Tane Mahuta (the tree)": "It is the oldest Kauri tree in the world",
    "How can you help stop Kauri Dieback from spreading?": "By cleaning your shoes after walking in the forest",
    "Who is helping to protect Kauri trees?": "MPI & DOC",
    "Is it bad to have a Kauri tree in you backyard?": "No, just make sure you look after it.",
    "How do special checkpoints in the forest help stop Kauri Dieback?": "They give people a place to clean their shoes.",
    "Why is it important for us to take care of nature?": "Because we need nature to live happy and healthy lives"
};
const slide_show_container = document.querySelector('.slideshow-container');

for (const key in quiz) {
    // creation of divs to display card
    const card = document.createElement('div');
    const card_inner = document.createElement('div');
    const card_front = document.createElement('div');
    const card_back = document.createElement('div');
    const slide = document.createElement('div')
    
    // give divs classes
    card.classList.add('card');
    card_inner.classList.add('card-inner');
    card_front.classList.add('card-front');
    card_back.classList.add('card-back');
    slide.classList.add('mySlides')

    // creation of question
    const card_question = document.createElement('h2');
    card_question.textContent = key;
    
    
    // creation of answer
    const card_answer = document.createElement('h2');
    card_answer.textContent = quiz[key];
    

    // adding everything together
    card_front.appendChild(card_question);
    card_back.appendChild(card_answer);
    card_inner.appendChild(card_front);
    card_inner.appendChild(card_back);
    card.appendChild(card_inner);
    slide.appendChild(card);
    slide_show_container.appendChild(slide);

    

    // flip the cards on click
    card_inner.addEventListener('click', function() {
        card_inner.classList.toggle('flip-card');
    });
}
