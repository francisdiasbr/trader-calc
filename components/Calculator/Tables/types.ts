export interface BackToLayComponentProps {
  amountBack: string
  amountLay: string
  handleBetInBackChange: (event) => void
  handleOddBackChange: (event) => void
  handleOddLayChange: (event) => void
  oddBack: string
  oddLay: string
  profitBack: string
  profitLay: string
}