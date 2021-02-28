import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  // Comment에 관련된 video id를 기록하는 방법
  //   video: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Video",
  //   },
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
