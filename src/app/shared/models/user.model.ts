export interface User {
  id : number
  nickname : string
  email : string
  isAdmin : boolean
}

export interface ConnectedUser {
  id : number
  nickname : string
  role : string
}
