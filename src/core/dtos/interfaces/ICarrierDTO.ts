export default interface ICarrierDTO {
  readonly no: number
  readonly id: string
  readonly name: string
  readonly isCrawlable: boolean
  readonly isPopupEnabled: boolean
  readonly popupURL: string
}
