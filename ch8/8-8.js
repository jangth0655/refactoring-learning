export function acquireData(input) {
  return input
    .split('\n') //
    .splice(1)
    .filter((line) => line.trim() !== '')
    .map((line) => line.split(','))
    .filter((line) => line[1].trim() === 'india')
    .map((line) => ({
      city: line[0].trim(),
      phone: line[2].trim(),
    }));

  const lines = input.split('\n');
  let firstLine = true;
  const result = [];
  for (const line of lines) {
    if (line.trim() === '') continue;
    // 배열을 가지고 결과를 도출 => map
    const record = line.split(',');
    if (record[1].trim() === 'India') {
      result.push({ city: record[0].trim(), phone: record[2].trim() });
    }
  }
  return result;
}

const input = `office, country, telephone\n
Chicago, USA, +1 312 373 1000\n
Beijing, China, +86 4008 900 505\n
Bangalore, India, +91 80 4064 9570\n
Porto Alegre, Brazil, +55 51 3079 3550\n
Chennai, India, +91 44 660 44766`;
const result = acquireData(input);
console.log(result);
