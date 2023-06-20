function SumIfsMatch(sumColumn, ...conditionals) {
  let sum = 0;
  for (let i = 0; i < sumColumn.length; i++) {
    let match = true;
    for (let j = 0; j < conditionals.length; j += 2) {
      const columnValue = conditionals[j][i][0];
      const columnConditional = conditionals[j + 1];

      if (!conditionCheck(columnValue, columnConditional, i)) {
        match = false;
        break;
      }
    }
    if (match && parseFloat(sumColumn[i][0])) {
      sum += parseFloat(sumColumn[i][0]);
    }
  }
  return sum;
}

function conditionCheck(value, condition, i) {
  if (typeof condition === "string" && condition.match(/\*=/)?.length) {
    const regexPattern = condition.match(/\*=(.*)/)[1];
    const regex = new RegExp(regexPattern);
    return regex.test(value);
  } else {
    if (value instanceof Date && condition instanceof Date) {
      return value.getTime() == condition.getTime();
    } else if (
      typeof condition === "string" &&
      condition.match(/[<|>|=]/)?.length
    ) {
      if (value instanceof Date) {
        const comparadorRaw = condition.match(/([<|>|=]+)(.*)/);
        switch (comparadorRaw[1]) {
          case "<=":
            return value.getTime() <= converterNumeroParaData(comparadorRaw[2]);
          case ">=":
            return value.getTime() >= converterNumeroParaData(comparadorRaw[2]);
          case "<":
            return value.getTime() < converterNumeroParaData(comparadorRaw[2]);
          case ">":
            return value.getTime() > converterNumeroParaData(comparadorRaw[2]);
          case "=":
            return value.getTime() == converterNumeroParaData(comparadorRaw[2]);
          default:
            throw new Error("Operador não suportado: " + comparadorRaw[1]);
        }
      } else {
        return eval(value + condition);
      }
    } else {
      return value == condition;
    }
  }
}

function converterNumeroParaData(diasDesde1900) {
  var diasDesde1970 = diasDesde1900 - 25569 + 1;
  var data = new Date(diasDesde1970 * 24 * 60 * 60 * 1000);
  data.setUTCHours(0);
  return data;
}
