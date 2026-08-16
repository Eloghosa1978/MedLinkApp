import { UserDocument, UserModel } from "../../models/authModel";
import { Patient, PatientModel } from "../../models/patientModel";
import { Doctor, DoctorModel } from "../../models/doctorModel";
import { pickAllowedFields } from "../../utils/pickAllowedFields";
import { updateDocument } from "../../utils/updateDocument";
import { EDITABLE_FIELDS } from "../../constants/editableFields";
import { Model } from "mongoose";

export const updateProfileService = async (
  user: UserDocument,
  body: Record<string, unknown>,
) => {
  const { userField, patient, doctor } = EDITABLE_FIELDS;
  const userData = pickAllowedFields(body, userField);
  const updatedUser = await updateDocument(
    UserModel,
    { _id: user._id },
    userData,
    {
      new: true,
      runValidators: true,
    },
  );

  const profileConfig = {
    patient: {
      model: PatientModel,
      fields: patient,
    },
    doctor: {
      model: DoctorModel,
      fields: doctor,
    },
  };
  // ensure correct key type for indexing profileConfig
  const role = user.role as keyof typeof profileConfig;
  const config = profileConfig[role];

  const profileData = pickAllowedFields(body, config.fields);
  const profile = await updateDocument<Patient | Doctor>(
    config.model as Model<Patient | Doctor>,
    {
      userId: user._id,
    },
    profileData,
    {
      new: true,
      runValidators: true,
    },
  );

  return {
    user: updatedUser,
    profile,
  };
};
