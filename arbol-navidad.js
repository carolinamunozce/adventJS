// Christmas Tree

function createXmasTree(height) {
    // ¡Y no olvides también poner los turrones!
  
    let result = '';
    const width = height * 2 - 1;
  
    for (let i = 1; i <= width; i += 2) {
      const asterisks = '*'.repeat(i);
      const remaining = width - asterisks.length;
      const fill = '_'.repeat(remaining / 2);
      const line = `${fill}${asterisks}${fill}`;
  
      result += `${line}\n`;
    }
  
    const remainingBase = width - 1;
    const baseFill = '_'.repeat(remainingBase / 2);
    const base = `${baseFill}#${baseFill}`;
  
    result += `${base}\n${base}`;
  
    console.log(result);
  
    return result;
  }
  createXmasTree (25);