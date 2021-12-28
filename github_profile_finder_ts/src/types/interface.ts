export enum Status {
  IDLE,
  PENDING,
  RESOLVED,
  REJECTED,
}
export interface UserDataResponse {
  avatar_url: string;
  followers: number;
  following: number;
  name: string;
  login: string;
  bio: string;
  html_url: string;
  public_repos: number;
}
export interface UserData {
  data: UserDataResponse | null;
  status: Status;
}
