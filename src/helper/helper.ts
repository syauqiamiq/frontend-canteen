export const loginCheck = () => {
  const token = localStorage.getItem('access_token')
  if (token == null) {
    window.location.assign('/auth/login')
  }
}
