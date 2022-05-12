console.log("This was a real fun course!!");
const game =()=>{
    let hScore = 0;
    let vScore =0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('match');

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };
    const playMatch = () => {
        const options = document.querySelectAll('.options button');
        const heroChoice = document.querySelector('.hero-choice');
        const villainChoice = document.querySelector('.villain-choice'); 
        const choices = document.querySelectorAll('.choices img');
        choices.forEach(choice => {
            choice.addEventListener ('animationend', function(){
                this.style.animation = "";
            });
        });
        const heroOptions =[{label: 'marceline', img: './assests/AT_marceline.jpg'},{label: 'finn', img: './assests/AT_finn.webp'},{label: 'jake', img: './assests/AT_jake.png'},{label: 'princess', img: './assests/AT_princess.webp'},{label: 'amethyst', img: './assests/Universe_amethyst.webp'},{label: 'connie', img: './assests/Universe_connie.png'},{label: 'garnet', img: './assests/Universe_garnet.png'},{label: 'pearl', img: './assests/Universe_pearl.webp'},{label: 'steven', img: './assests/niverse_steven.png'}];

        const villainOptions =[{label: 'golb', img: './assets/AT_golb.jpg'},{label: 'gumbald', img: './assests/AT_gumbald.jpg'}, {label: 'ice', img: './assests/AT_ice.png'},{label: 'lich', img: './assests/ATlich.webp'},{label: 'bluebird', img: './assests/Universe_bluebird.webp'},{label: 'holly', img: './assests/Universe_holly'},{label: 'jasper', img: './assests/Universe_jasper.png'},{label: 'spinel', img: './assests/Universe_spinel.png'},{label: 'gunther', img: './assests/AT_gunther.png'}];
        options.forEach (option => {
            option.addEventListener('click', function(){
                const villainNumber = Math.floor(Math.random) * 9;
                const villainChoice = villainOptions[villainNumber];
                
               setTimeout(() => { 
                   compareChoices(this.textContent, villainChoice);

                heroChoice.src =`./assets/${this.textContent}.png`;
                villainChoice.src = `./assets/${villainChoice}.png`;
               }, 2000);
            });
        });
    };
    const updateScore = ()=>{
        const heroScore = document.querySelector('.hero-score p');
        const villainScore = document.querySelector('.villan-score p');
        heroScore.textContent = hScore;
        villanScore.textContent = vScore;
    }
    const compareChoices = (heroChoice, villainChoice) =>{
        const winner = document.querySelector('.winner');
        if(heroChoice === villainChoice){
            winner.textContent = 'It is a tie!';
        }
        if(heroChoice ==='finn'){
            if(villainChoice === 'gumbald', 'ice', 'gunther'){
                winner.textContent = 'Heroes Win';
                hScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Villains Win';
                vScore++;
                updateScore();
                return;
            }
        }
        if(heroChoice ==='jake'){
            if(villainChoice === 'gumbald', 'ice', 'gunther'){
                winner.textContent = 'Heroes Win';
                hScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Villains Win';
                vScore++;
                updateScore();
                return;
            }
        }
        if(heroChoice ==='marceline'){
            if(villainChoice === 'gumbald', 'gunther', 'ice', 'bluebird', 'holly'){
                winner.textContent = 'Heroes Win';
                hScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Villains Win';
                vScore++;
                updateScore();
                return;
            }
        }
        if(heroChoice ==='princess'){
            if(villainChoice === 'gumbald', 'ice', 'gunther', 'holly'){
                winner.textContent = 'Heroes Win';
                hScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Villains Win';
                vScore++;
                updateScore();
                return;
            }
        }
        if(heroChoice ==='amethyst'){
            if(villainChoice === 'gumbald', 'ice', 'gunther', 'holly'){
                winner.textContent = 'Heroes Win';
                hScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Villains Win';
                vScore++;
                updateScore();
                return;
            }
        }
        if(heroChoice ==='pearl'){
            if(villainChoice === 'gumbald', 'ice', 'gunther','holly'){
                winner.textContent = 'Heroes Win';
                hScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Villains Win';
                vScore++;
                updateScore();
                return;
            }
        }
        if(heroChoice ==='garnet'){
            if(villainChoice === 'gumbald', 'ice', 'gunther', 'bluebird', 'holly'){
                winner.textContent = 'Heroes Win';
                hScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Villains Win';
                vScore++;
                updateScore();
                return;
            }
        }
        if(heroChoice ==='steven'){
            if(villainChoice === 'gumbald', 'ice', 'gunther', 'spinel', 'holly', 'bluebird'){
                winner.textContent = 'Heroes Win';
                hScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Villains Win';
                vScore++;
                updateScore();
                return;
            }
        }
        if(heroChoice ==='connie'){
            if(villainChoice === 'gumbald', 'ice', 'gunther', 'holly', 'spinel', 'bluebird'){
                winner.textContent = 'Heroes Win';
                hScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'Villains Win';
                vScore++;
                updateScore();
                return;
            }
        }
    }
    
    
};