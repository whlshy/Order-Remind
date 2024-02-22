import api from '../lib/api'

export const getAccount = async () => {
  const response = await api({
    method: "GET",
    cmd: "api/Member"
  })
  return response
}

export const logoutAccount = async () => {
  const response = await api({
    method: "GET",
    cmd: "api/Auth/logout"
  })
  return response
}

export const setGoogleSheet = async ({id, list = "[]"}) => {
  const response = await api({
    method: "GET",
    cmd_url: `https://script.google.com/macros/s/${id}/exec`,
    data:{ list: JSON.stringify(list) }
  })
  return response
}