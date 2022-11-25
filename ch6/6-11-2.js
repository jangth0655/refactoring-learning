import fs from 'fs';

/**
 * 스크립팅 관련일
사용자에게 입력을 받아옴 -> 유효성 검사
필요한 로직을 처리
노드에서 제공하는 process의 직접적으로 접근하면 테스트하기 어렵다.
 */

//1. run 함수를 만들어서 노드의 process 디펜던시를 제거
run(process.argv);

function run(args) {
  const command = parseCommand(args);
  countOrders(command);
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }
  const fileName = `./${process.argv[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const countReadyOnly = argv.includes('-r');

  return {
    fileName,
    countReadyOnly,
  };
}

function parseCommand({ fileName, countReadyOnly }) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  const filtered = countReadyOnly
    ? orders.filter((order) => order.status === 'ready')
    : orders;
  console.log(filtered.length);
}
