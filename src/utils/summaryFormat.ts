export function formatSummary(text: string){
  let text2 = text.replace("<b>", "")
  text2 = text2.replace("</b>", "")
  return text2.slice(3, text2.length - 4);
}
