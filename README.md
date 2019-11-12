This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

To run the project:
- ``npm install``
- ``npm start``

# Known bugs

- [CRITICAL] having conversation with more than one person simultanously causes sent messages to appear in both windows, and replies don't go to the proper channel
- exiting the prompt opens conversation with null
- there's no character length restriction on the remote ID prompt
- you can open a conversation with yourself if you put your own nick in the prompt
- redux store has too much depth
- pressing enter in input fields either bugs the app or does nothing
- overflow doesn't work properly on the chat
- chat doesn't scroll down with new messages
