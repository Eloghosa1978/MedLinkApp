import { Schema, InferSchemaType, HydratedDocument, model } from "mongoose";

const availabilitySchema = new Schema(
  {
    doctorId: {
      type: Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
      index: true,
    },
    date: {
      type: Date,
      required: true,
      index: true,
    },
    startTime: {
      type: String,
      required: true,
      trim: true,
    },
    endTime: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      enum: ["available", "booked", "unavailable"],
      default: "available",
    },
  },
  {
    timestamps: true,
    strict: true,
  },
);

export type Availability = InferSchemaType<typeof availabilitySchema>;

export type AvailabilityDocument = HydratedDocument<Availability>;

export const AvailabilityModel = model<Availability>(
  "Availability",
  availabilitySchema,
);
