export interface Bank {
  name: string
  nameLong: string
  nameEN: string
  symbol: string
  icon: string
}

export interface BankList {
  [key: string]: Bank
}
