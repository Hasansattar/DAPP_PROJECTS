import GamesCard from "./utilities/GamesCard"
import Metaverse from "./utilities/Metaverse"
// import MetaverseImage from './../images/3DVRGames.png';
// import M2DGames from './../images/2DGames.png';

import beam_hit_game from './../images/beam_hit_game.png'
import table_tennis from './../images/table_tennis.png'
import archery from './../images/archery.png'
import job_simulator from './../images/job_simulator.png'
import horror_survival from './../images/horror_survival.png'

import flying_monster from './../images/flying_monster.png'
import twod_quest_game from './../images/2d_quest_game.png'
import multiplayer_shooting_game from './../images/multiplayer_shooting_game.png'
import brain_game from './../images/brain_game.png'
import match3_game from './../images/match3_game.png'

const Utilities = () => {
    return ( <section className = "section mask-c-blend-dark tc-light ov-h"
        id = "utilities" >
        <div className = "container" >
        <div className = "section-head text-center wide-auto-sm tc-light" >
        <h2 className = "title title-s4 animated text-yellow-500"
        data-animate = "fadeInUp"
        data-delay = ".1"
        title = "Token Utilities" > Token Utilities </h2> <p className = "animated"
        data-animate = "fadeInUp"
        data-delay = ".2" > We will be developing the following to utilize the ROG TOKEN.1 Metaverse Game, 5 3 D Virtual Reality Game App, 5 Browser based 2 D games. </p> </div>

        <div className = "row flex-lg-nowrap align-items-center justify-content-center" >
        <div className = "col-sm-12 mb-5 animated"
        data-animate = "fadeInUp"
        data-delay = ".1" >
        <Metaverse />
        </div> </div>

        <div className = "row flex-lg-nowrap align-items-center justify-content-center" >
        <div className = "col-sm-12 mb-5 animated"
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <div className = "card bg-transparent " >
        <div className = "card-body" >
        <h5 className = "card-title text-yellow-500" > 3 D VIRTUAL REALITY GAMES </h5>

        <div className = "row flex-lg-nowrap align-items-center justify-content-center mt-5" >
        <div className = "col-md-4 mb-5 animated "
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <GamesCard title = "Beam Hit Game"
        text = "In this game the player will have a beam sword and beam objects will come towards the player. Player has to hit the maximum objects to score in a limited amount of time. "
        image = {
            beam_hit_game
        }
        /> </div> <div className = "col-md-4 mb-5 animated "
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <GamesCard title = "Table Tennis"
        text = "In this game players can compete with other players through matchmaking. We will provide different rackets and table options to buy from. Moreover the progress will be determined through XPs and player levels."
        image = {
            table_tennis
        }
        /> </div> <div className = "col-md-4 mb-5 animated "
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <GamesCard title = "Archery Game"
        text = "In this game players can compete with other players to get more points in archery competitions. In this game we can provide multiple skins for arrows and Bows."
        image = {
            archery
        }
        /> </div> </div>

        <div className = "row flex-lg-nowrap align-items-center justify-content-center mt-5" >
        <div className = "col-md-4 mb-5 animated "
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <GamesCard title = "Job Simulator Game"
        text = "In this game we can provide story based experience to users to do multiple tasks at home or office or anywhere else. It will include a daily life routine and tasks."
        image = {
            job_simulator
        }
        /> </div>

        <div className = "col-md-4 mb-5 animated "
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <GamesCard title = "Horror Survival Game"
        text = "In this game the player has to survive in some random building. It will be a quest based story game in which the player has to do some tasks successfully to survive in a haunted place. It can be multiplayer or single player. "
        image = {
            horror_survival
        }
        /> </div> </div> </div> </div> </div> </div>

        <div className = "row flex-lg-nowrap align-items-center justify-content-center" >
        <div className = "col-sm-12 mb-5 animated"
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <div className = "card bg-transparent rounded-lg " >
        <div className = "card-body" >
        <h5 className = "card-title text-yellow-500" > 2 D BROWSER BASED GAMES </h5>

        <div className = "row flex-lg-nowrap align-items-center justify-content-center mt-5" >
        <div className = "col-md-4 mb-5 animated "
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <GamesCard title = "Flying Monster"
        text = "In this game we can provide different monsters and the user can select one of them and the user can control the monster by tapping on the screen and avoid different hurdles in the gameplay."
        image = {
            flying_monster
        }
        /> </div> <div className = "col-md-4 mb-5 animated "
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <GamesCard title = "2D Quest Game"
        text = "In which Players have different quests to solve to improve their skills and level in the game."
        image = {
            twod_quest_game
        }
        /> </div> <div className = "col-md-4 mb-5 animated "
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <GamesCard title = "Multiplayer Shooting Game"
        text = "2D multiplayer shooting game in a fun environment and fun abilities. In this game users will join a room to play against each other and win with maximum points in a limited amount of time."
        image = {
            multiplayer_shooting_game
        }
        /> </div> </div>

        <div className = "row flex-lg-nowrap align-items-center justify-content-center mt-5" >
        <div className = "col-md-4 mb-5 animated "
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <GamesCard title = "Brain Game"
        text = "Puzzle games with different difficulty levels. Making pictures, finding clues, answering questions etc"
        image = {
            brain_game
        }
        /> </div> <div className = "col-md-4 mb-5 animated "
        data-animate = "fadeInUp"
        data-delay = ".2" >
        <GamesCard title = "Match 3 Game"
        text = "In which we can provide a Jungle forest theme and users can match different objects and blast them and earn more points. It’s just like an addictive and fun game for all age categories."
        image = {
            match3_game
        }
        /> </div> </div> </div> </div> </div> </div>

        <div className = "row flex-lg-nowrap align-items-center justify-content-center" >
        <div className = "col-sm-12 mb-5 animated"
        data-animate = "fadeInUp"
        data-delay = ".1" >
        <div className = "card games-bg shadow " >
        <div className = "card-body" >
        <h5 className = "card-title text-yellow-500" > ANTI - RUG SYSTEM </h5> <p className = "text-white" > All tokens especially allocations
        for developmental team has vesting time, locked in pinksale.finance.So there are no unlocked tokens
        for rugpull.All ROG holders are safe. </p> <br/>
        <h5 className = "card-title text-yellow-500" > TAXES & LIMITS </h5> <ul className = "list-unstyled" >
        <li > LIMIT PER TRANSACTION: 0.5 % of Total Supply </li> <li > TRANSACTION TAX 12 %
        <ul className = "nestedlist" >
        <li > 4 % Burn </li> <li > 2 % All token holders in BNB </li> <li > 3 % Liquidity to Pancakeswap </li> <li> 3 % Marketing </li> </ul> </li>

        </ul>

        </div> </div> </div>

        </div>

        </div> </section>
    )
}

export default Utilities