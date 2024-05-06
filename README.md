# Lab 5 - Starter
Trey Shneour
1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

Yes, I would use a unit test to test a message feature. This is because the "message" feature is one of many possible components of a messaging application. The act of sending a message is an individual component we can test such that we can see if the input we've given is stored by the receiving user or not. However, we could not easily test how the message feature affects the end user's full display for example (the full display is made up of many components such as the chat, list of recipients, text history, etcetera). Additionally, it's unlikely anything else will affect how the message is sent or how quickly it is done.

1) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes, I would use a unit test to test the "max message length" feature. This is because this is a feature small in scope which makes up only a component of the whole application. We can test whether the text box appropriately stops adding new characters given a string of 80 characters. Since this is a small component not dependent on any other feature and time-efficient, it is a good thing to test with a unit test.