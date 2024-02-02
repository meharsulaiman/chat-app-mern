import { Conversation } from '../models/conversationModel.js';
import { Message } from '../models/messageModel.js';
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

  res.status(201).json({ message: 'Message sent!', message: newMessage });
});
