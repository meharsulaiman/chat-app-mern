import { Conversation } from '../models/conversationModel.js';
import { Message } from '../models/messageModel.js';
import { getReceiverSocketId, io } from '../socket/socket.js';
import { catchAsync } from '../utils/catchAsync.js';

export const sendMessage = catchAsync(async (req, res) => {
  const { id: receiverId } = req.params;
  const { message } = req.body;
  const senderId = req.user._id;

  // FIND CONVERSATION
  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  // CREATE CONVERSATION IF NOT EXIST
  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  // ADD MESSAGE TO CONVERSATION
  const newMessage = new Message({
    senderId,
    receiverId,
    message,
  });

  if (newMessage) {
    conversation.messages.push(newMessage);
  }

  // await newMessage.save();
  // await conversation.save();
  await Promise.all([newMessage.save(), conversation.save()]);

  // SEND MESSAGE TO RECEIVER SOCKET IO
  const receiverSocketId = getReceiverSocketId(receiverId);
  if (receiverSocketId) {
    io.to(receiverSocketId).emit('newMessage', newMessage);
  }

  res.status(201).json({ message: 'Message sent!', message: newMessage });
});

export const getMessage = catchAsync(async (req, res) => {
  const { id: userToChatId } = req.params;
  const senderId = req.user._id;

  // FIND CONVERSATION
  const conversation = await Conversation.findOne({
    participants: {
      $all: [senderId, userToChatId],
    },
  }).populate('messages');

  if (!conversation) {
    return res.status(200).json([]);
  }

  const messages = conversation.messages;

  res.status(200).json(messages);
});
