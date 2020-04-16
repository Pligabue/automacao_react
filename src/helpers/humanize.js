export default function humanize(text) {
  switch (text) {
    case "iluminacao":
      return "Iluminação"
    case "servidor":
      return "Servidor"
    case "rede":
      return "Rede"
    case "ar_cond":
      return "Ar condicionado"
    case "bancadas":
      return "Bancadas"
    default:
      return text
  }  
}