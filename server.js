var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function () {
    console.log('Server running on 8080...');
});
//# sourceMappingURL=server.js.map

// Example 2: adds user input and detects intents.
//
// var prompt = require('prompt-sync')();
// var ConversationV1 = require('watson-developer-cloud/conversation/v1');
//
// // Set up Conversation service wrapper.
// var conversation = new ConversationV1({
//   username: '2533be81-69d0-4bd8-8cd8-f47913eb8810', // replace with service username
//   password: 'qNZcHksmxsqh', // replace with service password
//   version_date: '2017-05-26'
// });
//
// var workspace_id = 'd4ca2afe-3388-4262-9696-5723b8c84018'; // replace with workspace ID
//
// // Start conversation with empty message.
// conversation.message({
//   workspace_id: workspace_id
//   }, processResponse);
//
// // Process the conversation response.
// function processResponse(err, response) {
//   if (err) {
//     console.error(err); // something went wrong
//     return;
//   }
//
//   // If an intent was detected, log it out to the console.
//   if (response.intents.length > 0) {
//     console.log('Detected intent: #' + response.intents[0].intent);
//   }
//
//   if (response.entities.length > 0) {
//     console.log('Detected entity: @' + response.entities[0].entity);
//   }
//
//   var endConversation = false;
//
//   // Display the output from dialog, if any.
//   if (response.output.action === 'end_conversation') {
//     // User said goodbye, so we're done.
//     console.log(response.output.text[0]);
//     endConversation = true;
//     console.log("end");
//   } else if (response.output.text.length != 0) {
//       console.log(response.output.text[0]);
//   }
//
//   if (!endConversation) {
//     var newMessageFromUser = prompt('>> ');
//     conversation.message({
//       workspace_id: workspace_id,
//       input: { text: newMessageFromUser },
//       // Send back the context to maintain state.
//       context : response.context,
//     }, processResponse)
//   }
// }
