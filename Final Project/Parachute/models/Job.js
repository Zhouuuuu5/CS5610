import mongoose from "mongoose";
mongoose.set("strictQuery", true);

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company"],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position"],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "applied", "offer"],
      default: "applied",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "internship",
    },
    jobLocation: {
      type: String,
      default: "Portland",
      required: true,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
