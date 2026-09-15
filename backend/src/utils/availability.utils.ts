export const timeToMinutes = (time: string): number => {
  const [hours, minutes] = time.split(":").map(Number);
  return hours * 60 + minutes;
};

export const overlappingAvailability = async (
  start: string,
  end: string,
  model: any,
  date?: Date,
  availabilityId?: any,
  doctorId?: any,
): Promise<boolean> => {
  const query: any = await model.findOne({
    _id: { $ne: availabilityId },
    doctorId: doctorId,
    date: date,
    status: { $ne: "unavailable" },
    startTime: { $lt: end },
    endTime: { $gt: start },
  });
  return !!query;
};
