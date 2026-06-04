import API from "./api"

export const createTrainerAPI = async (
  reqBody,
  reqHeader
) => {
  return await API.post(
    "/api/trainers/create-trainer",
    reqBody,
    reqHeader
  )
}

export const TrainerLoginAPI = async (reqBody) => {
  return await API.post(
    "/api/trainers/login",
    reqBody
  )
}
export const getTrainerAPI = async () => {
  return await API.get(
    "/api/trainers/get-trainer"
  )
}

export const updateTrainerAPI = async (
  id,
  reqBody,
  reqHeader
) => {
  return await API.put(
    `/api/trainers/update/${id}`,
    reqBody,
    reqHeader
  )
}

export const deleteTrainerAPI = async (
  id,
  reqHeader
) => {
  return await API.delete(
    `/api/trainers/delete/${id}`,
    reqHeader
  )
}

export const getTrainerBookingsAPI = async (token) => {
  return await API.get(
    "/api/trainers/get-booking",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};