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
    case "tarifa_branca":
     return "Tarifa Branca"
    case "tarifa_vermelha":
      return "Tarifa Vermelha"
    case "tarifa_amarela":
      return "Tarifa Amarela"
    case "tarifa_verde":
      return "Tarifa Verde"
    default:
      return text
  }  
}