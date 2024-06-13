<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->

<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://dracula27.github.io/blackjack/">
    <img src="./img/favicon.ico" alt="Logo" width="80" />
  </a>

  <h3 align="center">Blackjack</h3>

  <p align="center">
    Play blackjack - you versus the dealer!
    <br />
    <a href="https://dracula27.github.io/blackjack/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#optimizations">Optimizations</a></li>
    <li><a href="#lessons-learned">Lessons Learned</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

<p align="center">
    <a href="https://dracula27.github.io/blackjack/">
      <img src='./img/screenshot.PNG' alt='Blackjack Screen Shot' />
    </a>
</p>

The objective of Blackjack, also known as Twenty-One, is to beat the dealer by getting a hand value closer to 21 than the dealer's hand, without going over 21.

At the start of a blackjack game, the players and the dealer receive two cards each. The best possible blackjack hand is an opening deal of an ace with any ten-point card. This is called a "blackjack", or a natural 21, and the player holding this automatically wins unless the dealer also has a blackjack. If a player and the dealer each have a blackjack, the result is a tie (push).

If the dealer has a blackjack and the player does not, the player loses.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![HTML5](https://camo.githubusercontent.com/47e36c9392fe351ab98a0324ca2cb710782731d5a56f71ffe7c68130a1ddc34f/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d253743266d6573736167653d48544d4c3526636f6c6f723d323335353566267374796c653d706c6173746963266c6f676f3d68746d6c35)](https://html.spec.whatwg.org/)
- [![CSS3](https://camo.githubusercontent.com/de7f9b7e6e26494153157774db679bba3320e333f8279e98986893d490293732/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d253743266d6573736167653d4353533326636f6c6f723d323835663635267374796c653d706c6173746963266c6f676f3d63737333)](https://www.w3.org/Style/CSS/#specs)
- [![JavaScript](https://camo.githubusercontent.com/201c697f87bb2a25af48ccc954f0a3c27409421b3e887b7b8e486222e6c1c6b8/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f6c6162656c3d253743266d6573736167653d4a41564153435249505426636f6c6f723d336337663564267374796c653d706c6173746963266c6f676f3d6a617661736372697074)](https://tc39.es/ecma262/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE -->

## Usage

The basic rules of the game are:

1. **Player Turn.** After the cards have been dealt, the game goes on with the player taking action. The player can keep their hand as it is (stand) or take more cards from the deck (hit), one at a time, until either the player judges that the hand is strong enough to go up against the dealer's hand and stands, or until it goes over 21, in which case the player immediately loses (busts).
1. **Dealer Turn.** When the player has finished their actions, either decided to stand or busted, it is the dealer's turn. If the dealer has a natural 21 (blackjack) with their two cards, they won't take any more cards. The player loses, unless they also have a blackjack, in which case it is a tie (push). If the dealer doesn't have a natural blackjack, the dealer hits (takes more cards) or stands depending on the value of the hand. Contrary to the player, though, the dealer's action is completely dictated by the rules. The dealer must hit if the value of the hand is lower than 17, otherwise the dealer must stand.
1. **Winning.**
  - _Blackjack_: If your first two cards are an Ace and a 10-value card (10, Jack, Queen, King), this is an automatic win (Blackjack).
  - _Higher Value than Dealer_: If your hand total is closer to 21 than the dealer's hand total without going bust, you win.
  - _Dealer Busts_: If the dealer's hand total goes over 21 (busts), you win regardless of your hand value.
  - _Push_: If your hand total equals the dealer's hand total, it's a tie (push).
  - _Lower Value than Dealer_: If the dealer's hand total is closer to 21 than yours without busting, you lose.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- OPTIMIZATIONS -->

## Optimizations

This project can be improved by:

- [ ] Adding multiple players
- [ ] Allowing multiple players to continue playing if the dealer busts
- [ ] Adding variations
  - [ ] Insurance
  - [ ] Surrender
  - [ ] Splitting
  - [ ] Doubling Down
- [ ] Adding betting
- [ ] Keeping score for multiple rounds

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LESSONS LEARNED -->

## Lessons Learned

- **API Integration.** I got more practice reading API docs and using them to get good data back.
- **Data Manipulation.** I practiced manipulating the data by assigning numerical values to face cards.
- **Keeping Functions Small and Reusable.** I kept my functions simple so they could be reused throughout my code.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Danielle Andrews - [@DrAcula_codes](https://twitter.com/DrAcula_codes 'Twitter/X') - [daniellerandrews](https://www.linkedin.com/in/daniellerandrews 'LinkedIn') - danielle.andrews.dev@icloud.com

Project Link: [https://github.com/DrAcula27/readTrakr](https://github.com/DrAcula27/readTrakr)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

A special thanks to these resources used in the project!

- [GitHub Pages](https://pages.github.com)
- [Font Awesome](https://fontawesome.com)
- [Deck of Cards API](https://www.deckofcardsapi.com/)
- [officialgamerules.org](https://www.officialgamerules.org/card-games/blackjack)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
