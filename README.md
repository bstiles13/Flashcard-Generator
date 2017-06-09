Backend for a basic Star Wars themed flashcard application. There are two types of flashcards built with constructors:

1. Basic flashcards, which have a front ("Who was the first president of the United States?"), and a back ("George Washington").

2. Cloze-Deleted flashcards, which present partial text ("... was the first president of the United States."), and the full text when the user requests it ("George Washington was the first president of the United States.")

Users guess the flashcard answers in Node using the Inquirer module. Once the user completes his/her guesses, a final result will appear indicating the number of correct and wrong guesses. The user may restart the game. The flashcards are shuffled each time the app is opened or restarted.
