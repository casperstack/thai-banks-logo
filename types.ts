export interface Bank {
  name: string
  fullname: string
  nameEN: string
  symbol: string
  icon: string
  color: string
}

export interface BankList {
  [key: string]: Bank
}
