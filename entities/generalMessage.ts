export enum messageTypes {
  INFO,
  ERROR
}
export const generalMessage = (
  type: messageTypes,
  title: string,
  description: string
) => ({
  type, title, description
})