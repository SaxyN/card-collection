# Pack Opening Simulator/Collector

## Usage

Clone the repo to your machine. Once cloned, using the command line, use `yarn` or `npm i` to get all necessary packages installed. Once those are installed, you can launch the app on localhost using 
`yarn start` or `npm start`.

Once launched in your browser you can navigate to <strong>http://localhost:3000/packs</strong>

You can then begin to test out the basic functionality. Enjoy!


## Redux

Redux is used as the central state manager. Some data is preloaded for ease of testing and user preview. When packs are generated they are stored within the store and pushed up to the pack viewing component. 

When the user opens a pack from the pack page, an array of card objects is generated and passed into the store.

![redux-log](https://github.com/SaxyN/card-collection/blob/master/src/assets/redux_log.PNG?raw=true)

## Cards

The cards a built using css effects and a hover script that moves the background and transforms the image to track the mouse. Using this, we can cast gradients over the card or a just a portion of the card. 

The card is passed an image which is handled using the `<ImageHandler/>` component. 

Cards themselves are handled using the `<CardHandler/>` which only needs the image you wish to view and the type of card. (Normal, Holo, Shatter, Legendary)

> The showcase tab shows demos of the 3 main card types without an image over them

![card-showcase](https://github.com/SaxyN/card-collection/blob/master/src/assets/card_demo.PNG?raw=true)

## Generating Packs

Packs are generated on randomly selecting cards from the set the pack is to pull from, in this case is just `1A`. Depending on the pack, the user will either get 6 cards of weighted rarity or a guarenteed card of specified rarity with 5 more weighted random cards.

If the generation method fails to generate the specified number of cards, it will throw an error and restart making another pack. 

Once a pack is generated, it will be passed to the store. From there it is accessed by the packopener component and the user can begin flipping over the cards to see what they got!