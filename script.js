document.addEventListener('DOMContentLoaded', buzzfeedQuiz, false);

function buzzfeedQuiz() {

    let button = document.querySelector(".submit");
    let displayResult = document.getElementById("displayResult");

    button.onclick = function() {

        let q1 = document.querySelector('input[name="question1"]:checked').value;
        let q2 = document.querySelector('input[name="question2"]:checked').value;
        let q3 = document.querySelector('input[name="question3"]:checked').value;
        let q4 = document.querySelector('input[name="question4"]:checked').value;
        
        let score = Number(q1) + Number(q2) + Number(q3) + Number(q4)
        //console.log(score)

        // if (q1 == null|| q2 == null|| q3 == null|| q4 == null) {
        //     alert("Answer all questions");
        // }
        
        if (score < 5) {
            
            display_poke_type("Bulbasaur", "https://www.pngmart.com/files/11/Bulbasaur-Transparent-PNG.png", " You are considered the most peaceful of the starting 4. You enjoy basking in the sunlight and relaxing. While you can be kind of lazy, you still have a lot of energy and prove to be loyal. You prefer to move in herds and typically frequent populated areas. Despite your calm demeanor, you aren't a person to be messed with. You're kind of like a ninja waiting in the shadows. People won't initially see your strengths, but if they cross you... look out! ")
            
        } else if (score < 9) {
            display_poke_type("Squirtle", "https://www.pngmart.com/files/22/Squirtle-Pokemon-PNG-Transparent-Picture.png", "When you're intimidated, you appear to run and hide — but that's right before you emerge once again armed with your most powerful weapon and ready to fight. You carry a little bit of home close to you wherever you go, and you know it's because there's no other place you'd ever feel safer.")
        } else if (score < 13) {
            display_poke_type("Charmander", "https://www.pngmart.com/files/22/Charmander-Pokemon-Transparent-Background.png", "You are more of a team player, favoring a pack mentality; for example, when you get food, you'll call to others to share your meal. It's easy to tell when you're not feeling too hot. The wrong encounter at the wrong time, and you get cranky. However, you are reliable and a true friend, just watch your temper.")
        } else {
            display_poke_type("Pikachu", "https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png", "You must be a little troublemaker. You like to stir up trouble and cause some excitement; but you can't fool us: We know that on the inside, there's a lifelong companion just waiting to come out. You'll come around — we can feel it. Even if you have to do a little extra work to get there.")
        }

        window.scrollTo(0, document.body.scrollHeight);
    };
}

let display_poke_type = (type, url, description) => {
    let poke_img = document.createElement('img');
    poke_img.src = url;
    document.getElementById("displayResult").appendChild(poke_img);
    
    let poke = document.createElement('h1');
    poke.innerHTML = `Your A ${type}!`;
    document.getElementById("displayResult").appendChild(poke);

    let poke_description = document.createElement('h2');
    poke_description.innerHTML = description;
    document.getElementById("displayResult").appendChild(poke_description);
}



