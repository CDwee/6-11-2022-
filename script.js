// Started at 8:06 6-11-2022

:root {
    --blue: #1FA2F1;
    --blueLight: #9BD1F9;
    --blueBackground: rgba(212, 237, 255, 0.6);
    --buttonHoverBg: #d4edff;
    --lightGrey: rgb(230, 236, 240);
    --spacing: 15px;
    --greyText: rgb(101, 119, 134);
    --greyButtonText: rgba(0,0,0,0.34);
    --red: rgb(226,34,94);
    --redBackground: rgba(226,34,94,0.1);
    --green: rgb(23,191,99);
    --greenBackground: rgba(23,191,99,0.1);
}

html, body {
    height: 100%;
    min-height: 100%;
    background-color: #fff;
    font-weight: 300;
}

* {
    outline: none !important;
}

a {
    color: inherit;
}

a:hover {
    color: inherit;
    text-decoration: none;
}

h1 {
    font-size: 19px;
    font-weight: 800;
    margin: 0;
}

nav {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 100%;
}

nav a {
    padding: 10px;
    font-size: 30px;
    width: 55px;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #212529;
}

nav a.blue {
    color: var(--blue);
}

nav a:hover {
    background-color: var(--buttonHoverBg);
    color: var(--blue);
    border-radius: 50%;
}

.wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.wrapper > .row {
    margin: 0;
    height: 100%;
}

button {
    background-color: transparent;
    border: none;
    color: var(--greyButtonText);
}

button i,
button span {
    pointer-events: none;
}

.mainSectionContainer {
    padding:  0;
    border-left: 1px solid var(--lightGrey);
    border-right: 1px solid var(--lightGrey);
    display: flex;
    flex-direction: column;
}

.titleContainer {
    height: 53px;
    padding: 0 var(--spacing);
    display: flex;
    align-items: center;
    border-bottom: 1px solid var(--lightGrey);
    flex-shrink: 0;
}

.titleContainer h1 {
    flex: 1;
}

.postFormContainer {
    display: flex;
    padding: var(--spacing);
    border-bottom: 10px solid rgb(230, 236, 240);
    flex-shrink: 0;
}

.modal .postFormContainer {
    border: none;
    padding: 0;
    padding-top: var(--spacing);
}

.modal .post {
    padding: 0 0 var(--spacing) 0;
}

.userImageContainer {
    width: 50px;
    height: 50px;
}

.userImageContainer img {
    width: 100%;
    border-radius: 50%;
    background-color: white;
}

.textareaContainer {
    flex: 1;
    padding-left: var(--spacing);
}

.textareaContainer textarea {
    width: 100%;
    border: none;
    resize: none;
    font-size: 19px;
}

#submitPostButton {
    background-color: var(--blue);
    color: white;
    border: none;
    border-radius: 40px;
    padding: 7px 15px;
}

#submitPostButton:disabled {
    background-color: var(--blueLight);
}

.post {
    display: flex;
    flex-direction: column;
    padding: var(--spacing);
    cursor: pointer;
    border-bottom: 1px solid var(--lightGrey);
    flex-shrink: 0;
}

.mainContentContainer {
    flex: 1;
    display: flex;
}

.postContentContainer {
    padding-left: var(--spacing);
    display: flex;
    flex-direction: column;
    flex: 1;
}

.username,
.date {
    color: var(--greyText)
}

.displayName {
    font-weight: bold;
}

.postFooter {
    display: flex;
    align-items: center;
}

.postFooter .postButtonContainer {
    flex: 1;
    display: flex;
}

.postFooter .postButtonContainer button {
    padding: 2px 5px;
}

.header a:hover {
    text-decoration: underline;
}

.header a,
.header span {
    padding-right: 5px;
}

.postButtonContainer button:hover {
    background-color: #d4edff;
    color: var(--blue);
    border-radius: 50%;
}

.postButtonContainer.red button.active {
    color: var(--red);
}

.postButtonContainer.red button:hover {
    color: var(--red);
    background-color: var(--redBackground)
}

.postButtonContainer.green button.active {
    color: var(--green);
}

.postButtonContainer.green button:hover {
    color: var(--green);
    background-color: var(--greenBackground)
}

.postActionContainer {
    padding-left: 35px;
    font-size: 13px;
    color: var(--greyText);
    margin-bottom: 5px;
}

.replyFlag {
    margin-bottom: 5px;
}

.replyFlag a {
    color: var(--blue);
}

.post.largeFont .postBody,
.post.largeFont .postFooter {
    font-size: 23px;
}

.postContentContainer .header {
    display: flex;
}

.postContentContainer .header .date {
    flex: 1;
}

.errorMessage {
    padding: var(--spacing);
}

.coverPhotoSection {
    height: 180px;
    background-color: var(--blue);
    position: relative;
}

.profileHeaderContainer .userImageContainer {
    width: 132px;
    height: 132px;
    margin-left: var(--spacing);
    position: absolute;
    bottom: -66px;

    display: flex;
    align-items: center;
    justify-content: center;
}

.profileHeaderContainer .userImageContainer img {
    border: 4px solid #fff;
}

.profileHeaderContainer .profileButtonsContainer {
    text-align: right;
    padding: var(--spacing);
    min-height: 66px;
}

.profileButton,
.followButton {
    border: 1px solid var(--blue);
    color: var(--blue);
    font-weight: bold;
    padding: 5px 15px;
    border-radius: 60px;
    display: inline-block;
    margin-left: var(--spacing);
}

.profileButton:hover,
.followButton:hover {
    background-color: var(--blueBackground);
}

.followButton.following {
    background-color: var(--blue);
    color: #fff;
}

.profileHeaderContainer .userDetailsContainer {
    display: flex;
    flex-direction: column;
    padding: 0 var(--spacing);
}

.followersContainer .value {
    font-weight: bold;
    margin-right: 5px;
}

.followersContainer span:not(.value) {
    color: var(--greyText);
}

.followersContainer a {
    margin-right: 15px;
}

.followersContainer a:hover {
    border-bottom: 1px solid #000;
}

.tabsContainer {
    display: flex;
    border-bottom: 1px solid var(--lightGrey);
    flex-shrink: 0;
}

.tab {
    flex: 1;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--greyText);
    font-weight: bold;
}

.tab.active {
    color: var(--blue);
    border-bottom: 2px solid var(--blue);
}

.tab:hover {
    color: var(--blue);
    background-color: var(--blueBackground);
}

.noResults {
    padding: var(--spacing);
}

.resultsContainer {
    display: flex;
    flex-direction: column;
}

.resultsContainer .user {
    padding: var(--spacing);
    display: flex;
    border-bottom: 1px solid var(--lightGrey);
}

.user .userDetailsContainer {
    flex: 1;
    padding: 0 var(--spacing)
}

.profilePictureButton,
.coverPhotoButton {
    position: absolute;
    font-size: 50px;
    color: rgba(0,0,0,0.6);
    display: none;
}

.userImageContainer:hover .profilePictureButton,
.coverPhotoSection:hover .coverPhotoButton {
    display: block;
}

.coverPhotoContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.coverPhotoContainer img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

#imagePreview,
#coverPreview {
    width: 100%;
    display: block;
 
    /* This rule is very important, please don't ignore this */
    max-width: 100%;
}

.pinButton.active {
    color: var(--blue);
}

.pinnedPostText {
    font-size: 12px;
    color: var(--greyText);
}

.pinnedPostContainer {
    border-bottom: 10px solid rgb(230,236,240);
}

.searchBarContainer {
    position: relative;
    color: var(--greyText);
    padding: 10px var(--spacing);
}

.searchBarContainer i {
    position: absolute;
    top: 20px;
    left: 28px;
}

.searchBarContainer #searchBox {
    height: 36px;
    width: 100%;
    padding: 5px 15px 5px 40px;
    border-radius: 50px;
    background-color: var(--lightGrey);
    border: none;
    color: var(--greyText);
}

.chatPageContainer {
    display: flex;
    flex-direction: column;
    min-height: 0;
    flex: 1;
}

.chatTitleBar {
    border-bottom: 1px solid var(--lightGrey);
    display: flex;
    align-items: center;
    min-height: 60px;
    padding: 10px;
}

.chatTitleBar label {
    margin: 0 10px 0 0;
}

#userSearchTextbox {
    border: none;
    flex: 1;
    font-weight: 200;
    min-width: 350px;
}

#createChatButton {
    border: none;
    background-color: var(--blue);
    color: #fff;
    padding: 7px 20px;
    margin: 10px auto;
    border-radius: 40px;
}

#createChatButton:disabled {
    background-color: var(--lightGrey);
    color: var(--greyText);
}

.selectedUser {
    font-weight: 300;
    background-color: #CBE5FE;
    color: #0084ff;
    padding: 5px;
    border-radius: 3px;
    margin: 5px 5px 0 0;
    display: inline-block;
}

.resultListItem {
    padding: 7px;
    display: flex;
    align-items: center;
    flex-shrink: 0;
    border-bottom: 1px solid var(--lightGrey);
}

.resultListItem:hover {
    background-color: #F2F2F2;
}

.resultsDetailsContainer {
    display: flex;
    flex-direction: column;
    flex: 1;
}

.resultsDetailsContainer .heading {
    font-weight: 500;
}

.resultsDetailsContainer .subText {
    color: var(--greyText);
    font-size: 14px;
}

.resultListItem img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
}

.resultsImageContainer {
    height: 40px;
    width: 40px;
    position: relative;
    margin-right: 10px;
    display: flex;
    align-items: center;
    padding: 5px;
}

.groupChatImage img {
    height: 65%;
    width: 65%;
    position: absolute;
    bottom: 0;
    margin: 0;
    border: 2px solid #fff;
}

.groupChatImage img:first-of-type {
    top: 0;
    right: 0;
}

.ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.chatTitleBarContainer {
    border-bottom: 1px solid var(--lightGrey);
    display: flex;
    align-items: center;
    padding: var(--spacing);
}

#chatName {
    width: 100%;
    border: 1px solid transparent;
    padding: 0 5px;
}

#chatName:hover {
    border: 1px solid var(--lightGrey);
    cursor: text;
}

.chatContainer {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: hidden;
}

.chatContainer .footer {
    display: flex;
    padding: var(--spacing);
    flex-shrink: 0px;
}

.chatContainer .footer textarea {
    flex: 1;
    resize: none;
    background-color: rgba(0,0,0,0.05);
    border-radius: 18px;
    border: none;
    padding: 8px 12px;
    height: 38px;
}

.chatContainer .footer button {
    background-color: transparent;
    color: var(--blue);
    font-size: 24px;
}

.chatMessages {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    padding: var(--spacing);
}

.chatImagesContainer {
    display: flex;
    flex-direction: row-reverse;
    height: 100%;
    margin-right: 10px;
}

.chatImagesContainer img {
    width: 40px;
    height: 40px;
    border: 2px solid #fff;
    border-radius: 50%;
}

.chatImagesContainer .userCount {
    height: 40px;
    width: 40px;
    background-color: #f1f1f1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    border: 2px solid #fff;
}

.chatImagesContainer img:not(:last-child),
.chatImagesContainer .userCount {
    margin-left: -10px;
}

#chatNameTextbox {
    width: 100%;
}

.chatMessages .message {
    padding-bottom: 2px;
    list-style: none;
    display: flex;
    align-items: flex-end;
    flex-shrink: 0;
    -webkit-flex: 0;
}

.chatMessages .message .messageBody {
    background-color: #f1f0f0;
    padding: 6px 12px;
    border-radius: 18px;
    font-size: 14px;
}

.chatMessages .message .messageContainer {
    display: flex;
    flex-direction: column;
    max-width: 55%;
}

.chatMessages .message.mine {
    flex-direction: row-reverse;
}

.chatMessages .message.mine .messageBody {
    background-color: var(--blue);
    color: #fff;
}

.chatMessages .message.mine.first .messageBody {
    border-bottom-right-radius: 2px;
}

.chatMessages .message.mine:not(.first):not(.last) .messageBody {
    border-bottom-right-radius: 2px;
    border-top-right-radius: 2px;
}

.chatMessages .message.mine.last .messageBody {
    border-bottom-right-radius: 18px;
}

.chatMessages .message.mine.last:not(.first) .messageBody {
    border-top-right-radius: 2px;
}

$(document).ready(() => {
    $.get(`/api/chats/${chatId}`, (data) => $("#chatName").text(getChatName(data)))

    $.get(`/api/chats/${chatId}/messages`, (data) => {
        
        var messages = [];
        var lastSenderId = "";

        data.forEach((message, index) => {
            var html = createMessageHtml(message, data[index + 1], lastSenderId);
            messages.push(html);

            lastSenderId = message.sender._id;
        })

        var messagesHtml = messages.join("");
        addMessagedHtmlToPage(messagesHtml);
    })
})

$("#chatNameButton").click(() => {
    var name = $("#chatNameTextbox").val().trim();
    
    $.ajax({
        url: "/api/chats/" + chatId,
        type: "PUT",
        data: { chatName: name },
        success: (data, status, xhr) => {
            if(xhr.status != 204) {
                alert("could not update");
            }
            else {
                location.reload();
            }
        }
    })
})

$(".sendMessageButton").click(() => {
    messageSubmitted();
})

$(".inputTextbox").keydown((event) => {

    if(event.which === 13) {
        messageSubmitted();
        return false;
    }
})

function addMessagedHtmlToPage(html) {
    $(".chatMessages").append(html);

    // TODO: SCROLL TO BOTTOM
}

function messageSubmitted() {
    var content = $(".inputTextbox").val().trim();

    if(content != "") {
        sendMessage(content);
        $(".inputTextbox").val("");
    }
}

function sendMessage(content) {
    $.post("/api/messages", { content: content, chatId: chatId }, (data, status, xhr) => {

        if(xhr.status != 201) {
            alert("Could not send message");
            $(".inputTextbox").val(content);
            return;
        }
        
        addChatMessageHtml(data);

    })
}

function addChatMessageHtml(message) {
    if(!message || !message._id) {
        alert("Message is not valid");
        return;
    }

    var messageDiv = createMessageHtml(message, null, "");

    addMessagedHtmlToPage(messageDiv);
}

function createMessageHtml(message, nextMessage, lastSenderId) {

    var sender = message.sender;
    var senderName = sender.firstName + " " + sender.lastName;

    var currentSenderId = sender._id;
    var nextSenderId = nextMessage != null ? nextMessage.sender._id : "";

    var isFirst = lastSenderId != currentSenderId;
    var isLast = nextSenderId != currentSenderId;

    var isMine = message.sender._id == userLoggedIn._id;
    var liClassName = isMine ? "mine" : "theirs";

    if(isFirst) {
        liClassName += " first";
    }

    if(isLast) {
        liClassName += " last";
    }

    return `<li class='message ${liClassName}'>
                <div class='messageContainer'>
                    <span class='messageBody'>
                        ${message.content}
                    </span>
                </div>
            </li>`;
}

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
    sender: { type: Schema.Types.ObjectId, ref: 'User' },
    content: { type: String, trim: true },
    chat: { type: Schema.Types.ObjectId, ref: 'Chat' },
    readBy: [{ type: Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const User = require('../../schemas/UserSchema');
const Post = require('../../schemas/PostSchema');
const Chat = require('../../schemas/ChatSchema');
const Message = require('../../schemas/MessageSchema');

app.use(bodyParser.urlencoded({ extended: false }));

router.post("/", async (req, res, next) => {
    if(!req.body.users) {
        console.log("Users param not sent with request");
        return res.sendStatus(400);
    }

    var users = JSON.parse(req.body.users);

    if(users.length == 0) {
        console.log("Users array is empty");
        return res.sendStatus(400);
    }

    users.push(req.session.user);

    var chatData = {
        users: users,
        isGroupChat: true
    };

    Chat.create(chatData)
    .then(results => res.status(200).send(results))
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
})

router.get("/", async (req, res, next) => {
    Chat.find({ users: { $elemMatch: { $eq: req.session.user._id } }})
    .populate("users")
    .populate("latestMessage")
    .sort({ updatedAt: -1 })
    .then(async results => {
        results = await User.populate(results, { path: "latestMessage.sender" });
        res.status(200).send(results)
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
})

router.get("/:chatId", async (req, res, next) => {
    Chat.findOne({ _id: req.params.chatId, users: { $elemMatch: { $eq: req.session.user._id } }})
    .populate("users")
    .then(results => res.status(200).send(results))
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
})



router.put("/:chatId", async (req, res, next) => {
    Chat.findByIdAndUpdate(req.params.chatId, req.body)
    .then(results => res.sendStatus(204))
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
})

router.get("/:chatId/messages", async (req, res, next) => {
    
    Message.find({ chat: req.params.chatId })
    .populate("sender")
    .then(results => res.status(200).send(results))
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
})

module.exports = router;

$(document).ready(() => {
    $.get("/api/chats", (data, status, xhr) => {
        if(xhr.status == 400) {
            alert("Could not get chat list.");
        }
        else {
            outputChatList(data, $(".resultsContainer"));
        }
    })
})

function outputChatList(chatList, container) {
    chatList.forEach(chat => {
        var html = createChatHtml(chat);
        container.append(html);
    })

    if(chatList.length == 0) {
        container.append("<span class='noResults'>Nothing to show.</span>");
    }
}

function createChatHtml(chatData) {
    var chatName = getChatName(chatData);
    var image = getChatImageElements(chatData);
    var latestMessage = getLatestMessage(chatData.latestMessage);
    
    return `<a href='/messages/${chatData._id}' class='resultListItem'>
                ${image}
                <div class='resultsDetailsContainer ellipsis'>
                    <span class='heading ellipsis'>${chatName}</span>
                    <span class='subText ellipsis'>${latestMessage}</span>
                </div>
            </a>`;
}

function getLatestMessage(latestMessage) {
    if(latestMessage != null) {
        var sender = latestMessage.sender;
        return `${sender.firstName} ${sender.lastName}: ${latestMessage.content}`;
    }

    return "New chat";
}

function getChatImageElements(chatData) {
    var otherChatUsers = getOtherChatUsers(chatData.users);

    var groupChatClass = "";
    var chatImage = getUserChatImageElement(otherChatUsers[0]);

    if(otherChatUsers.length > 1) {
        groupChatClass = "groupChatImage";
        chatImage += getUserChatImageElement(otherChatUsers[1]);
    }

    return `<div class='resultsImageContainer ${groupChatClass}'>${chatImage}</div>`;
}

function getUserChatImageElement(user) {
    if(!user || !user.profilePic) {
        return alert("User passed into function is invalid");
    }

    return `<img src='${user.profilePic}' alt='User's profile pic'>`;
}

const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require("body-parser")
const User = require('../../schemas/UserSchema');
const Post = require('../../schemas/PostSchema');
const Chat = require('../../schemas/ChatSchema');
const Message = require('../../schemas/MessageSchema');

app.use(bodyParser.urlencoded({ extended: false }));

router.post("/", async (req, res, next) => {
    if(!req.body.content || !req.body.chatId) {
        console.log("Invalid data passed into request");
        return res.sendStatus(400);
    }

    var newMessage = {
        sender: req.session.user._id,
        content: req.body.content,
        chat: req.body.chatId
    };

    Message.create(newMessage)
    .then(async message => {
        message = await message.populate("sender");
        message = await message.populate("chat");

        Chat.findByIdAndUpdate(req.body.chatId, { latestMessage: message })
        .catch(error => console.log(error))

        res.status(201).send(message);
    })
    .catch(error => {
        console.log(error);
        res.sendStatus(400);
    })
})

module.exports = router;

// Ended at 11:13 6-11-2022
