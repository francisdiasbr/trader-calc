export interface BackToLayComponentProps {
  amountBack: string
  amountLayToInvest: string
  comission: string
  handleBetInBackChange: (event) => void
  handleOddBackChange: (event) => void
  handleOddLayChange: (event) => void
  handleComissionChange: (event) => void
  oddBack: string
  oddLay: string
  profitBack: string
  profitLay: string
  profitBackHedge: string
  profitLayHedge: string
}