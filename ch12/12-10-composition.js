// 컴포지션(위임)
// 항상 외부러 부터 주입받아 사용하는 것이 좋다.
class Printer {
  #printerHeader;
  constructor(printerHeader) {
    this.#printerHeader = printerHeader;
  }

  print() {
    this.#printerHeader
      ? this.#printerHeader.print()
      : console.log('기본 출력');
  }
}

class RedPrinter {
  print() {
    console.log('red');
  }
}

class BlackPrinter {
  print() {
    console.log('Black');
  }
}

const printers = [new Printer(), new Printer(new RedPrinter())];
printers.forEach((printer) => printer.print());
