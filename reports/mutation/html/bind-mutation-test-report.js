document.querySelector('mutation-test-report-app').report = {"files":{"/home/aloysio/Documentos/scoringBowling/src/game.spec.ts":{"language":"typescript","mutants":[{"id":"1","location":{"end":{"column":24,"line":9},"start":{"column":10,"line":9}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"0","location":{"end":{"column":2,"line":7},"start":{"column":18,"line":5}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed"},{"id":"2","location":{"end":{"column":2,"line":53},"start":{"column":32,"line":9}},"mutatorName":"BlockStatement","replacement":"{}","status":"RuntimeError"},{"id":"17","location":{"end":{"column":24,"line":49},"start":{"column":23,"line":49}},"mutatorName":"EqualityOperator","replacement":"<=","status":"Survived"},{"id":"16","location":{"end":{"column":26,"line":49},"start":{"column":21,"line":49}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed"},{"id":"3","location":{"end":{"column":40,"line":10},"start":{"column":8,"line":10}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"20","location":{"end":{"column":6,"line":51},"start":{"column":33,"line":49}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed"},{"id":"18","location":{"end":{"column":24,"line":49},"start":{"column":23,"line":49}},"mutatorName":"EqualityOperator","replacement":">=","status":"Killed"},{"id":"4","location":{"end":{"column":4,"line":13},"start":{"column":48,"line":10}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"5","location":{"end":{"column":43,"line":15},"start":{"column":8,"line":15}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"7","location":{"end":{"column":58,"line":20},"start":{"column":8,"line":20}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"9","location":{"end":{"column":67,"line":26},"start":{"column":8,"line":26}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"10","location":{"end":{"column":4,"line":32},"start":{"column":75,"line":26}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"6","location":{"end":{"column":4,"line":18},"start":{"column":51,"line":15}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"8","location":{"end":{"column":4,"line":24},"start":{"column":66,"line":20}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"11","location":{"end":{"column":43,"line":34},"start":{"column":8,"line":34}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Timeout"},{"id":"19","location":{"end":{"column":31,"line":49},"start":{"column":28,"line":49}},"mutatorName":"UpdateOperator","replacement":"i--","status":"Timeout"},{"id":"12","location":{"end":{"column":4,"line":37},"start":{"column":51,"line":34}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"14","location":{"end":{"column":4,"line":46},"start":{"column":31,"line":43}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"15","location":{"end":{"column":4,"line":52},"start":{"column":53,"line":48}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"13","location":{"end":{"column":4,"line":41},"start":{"column":32,"line":39}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"}],"source":"import { Game } from './game'\n\nlet g: Game = new Game()\n\nbeforeEach(() => {\n  g = new Game()\n})\n\ndescribe('Bowling game', () => {\n  test('should score 0 for gutter game', () => {\n    rollMany(20, 0)\n    expect(g.score()).toBe(0)\n  })\n\n  test('should score 20 for all ones game', () => {\n    rollMany(20, 1)\n    expect(g.score()).toBe(20)\n  })\n\n  test('should score 16 for a spare followed by a 3 ball', () => {\n    rollSpare()\n    g.roll(3)\n    expect(g.score()).toBe(16)\n  })\n\n  test('should score 24 for a strike followed by a 3 and a 4 ball', () => {\n    rollStrike()\n    g.roll(3)\n    g.roll(4)\n    rollMany(16, 0)\n    expect(g.score()).toBe(24)\n  })\n\n  test('should score 300 for perfect game', () => {\n    rollMany(12, 10)\n    expect(g.score()).toBe(300)\n  })\n\n  function rollStrike (): void {\n    g.roll(10)\n  }\n\n  function rollSpare (): void {\n    g.roll(5)\n    g.roll(5)\n  }\n\n  function rollMany (n: number, pins: number): void {\n    for (let i = 0; i < n; i++) {\n      g.roll(pins)\n    }\n  }\n})\n"},"/home/aloysio/Documentos/scoringBowling/src/game.ts":{"language":"typescript","mutants":[{"id":"22","location":{"end":{"column":4,"line":21},"start":{"column":20,"line":5}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed"},{"id":"21","location":{"end":{"column":38,"line":2},"start":{"column":29,"line":2}},"mutatorName":"ArrayDeclaration","replacement":"Array()","status":"Killed"},{"id":"23","location":{"end":{"column":35,"line":8},"start":{"column":25,"line":8}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed"},{"id":"24","location":{"end":{"column":32,"line":8},"start":{"column":31,"line":8}},"mutatorName":"EqualityOperator","replacement":"<=","status":"Killed"},{"id":"25","location":{"end":{"column":32,"line":8},"start":{"column":31,"line":8}},"mutatorName":"EqualityOperator","replacement":">=","status":"Killed"},{"id":"27","location":{"end":{"column":6,"line":19},"start":{"column":46,"line":8}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed"},{"id":"28","location":{"end":{"column":36,"line":9},"start":{"column":11,"line":9}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed"},{"id":"33","location":{"end":{"column":22,"line":10},"start":{"column":21,"line":10}},"mutatorName":"ArithmeticOperator","replacement":"-","status":"Killed"},{"id":"29","location":{"end":{"column":36,"line":9},"start":{"column":11,"line":9}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed"},{"id":"32","location":{"end":{"column":51,"line":10},"start":{"column":9,"line":10}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed"},{"id":"30","location":{"end":{"column":8,"line":12},"start":{"column":38,"line":9}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed"},{"id":"31","location":{"end":{"column":51,"line":10},"start":{"column":9,"line":10}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed"},{"id":"34","location":{"end":{"column":21,"line":11},"start":{"column":9,"line":11}},"mutatorName":"UpdateOperator","replacement":"frameIndex--","status":"Killed"},{"id":"36","location":{"end":{"column":42,"line":12},"start":{"column":18,"line":12}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed"},{"id":"35","location":{"end":{"column":42,"line":12},"start":{"column":18,"line":12}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed"},{"id":"37","location":{"end":{"column":8,"line":15},"start":{"column":44,"line":12}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed"},{"id":"38","location":{"end":{"column":50,"line":13},"start":{"column":9,"line":13}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed"},{"id":"39","location":{"end":{"column":50,"line":13},"start":{"column":9,"line":13}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed"},{"id":"42","location":{"end":{"column":24,"line":14},"start":{"column":9,"line":14}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed"},{"id":"44","location":{"end":{"column":52,"line":16},"start":{"column":9,"line":16}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed"},{"id":"43","location":{"end":{"column":8,"line":18},"start":{"column":14,"line":15}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed"},{"id":"40","location":{"end":{"column":22,"line":13},"start":{"column":21,"line":13}},"mutatorName":"ArithmeticOperator","replacement":"-","status":"Killed"},{"id":"46","location":{"end":{"column":24,"line":17},"start":{"column":9,"line":17}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed"},{"id":"41","location":{"end":{"column":24,"line":14},"start":{"column":9,"line":14}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed"},{"id":"45","location":{"end":{"column":52,"line":16},"start":{"column":9,"line":16}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed"},{"id":"50","location":{"end":{"column":60,"line":24},"start":{"column":59,"line":24}},"mutatorName":"ArithmeticOperator","replacement":"-","status":"Killed"},{"id":"57","location":{"end":{"column":4,"line":38},"start":{"column":50,"line":36}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"51","location":{"end":{"column":4,"line":30},"start":{"column":52,"line":27}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"55","location":{"end":{"column":4,"line":34},"start":{"column":51,"line":32}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"47","location":{"end":{"column":24,"line":17},"start":{"column":9,"line":17}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"54","location":{"end":{"column":35,"line":29},"start":{"column":34,"line":29}},"mutatorName":"ArithmeticOperator","replacement":"-","status":"Timeout"},{"id":"56","location":{"end":{"column":35,"line":33},"start":{"column":34,"line":33}},"mutatorName":"ArithmeticOperator","replacement":"-","status":"Timeout"},{"id":"48","location":{"end":{"column":4,"line":25},"start":{"column":58,"line":23}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"52","location":{"end":{"column":40,"line":28},"start":{"column":39,"line":28}},"mutatorName":"ArithmeticOperator","replacement":"-","status":"Timeout"},{"id":"49","location":{"end":{"column":36,"line":24},"start":{"column":35,"line":24}},"mutatorName":"ArithmeticOperator","replacement":"-","status":"Timeout"},{"id":"53","location":{"end":{"column":35,"line":28},"start":{"column":34,"line":28}},"mutatorName":"ArithmeticOperator","replacement":"-","status":"Timeout"},{"id":"26","location":{"end":{"column":44,"line":8},"start":{"column":37,"line":8}},"mutatorName":"UpdateOperator","replacement":"frame--","status":"Timeout"},{"id":"66","location":{"end":{"column":60,"line":41},"start":{"column":59,"line":41}},"mutatorName":"ArithmeticOperator","replacement":"-","status":"Timeout"},{"id":"67","location":{"end":{"column":4,"line":46},"start":{"column":29,"line":44}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"60","location":{"end":{"column":38,"line":37},"start":{"column":35,"line":37}},"mutatorName":"EqualityOperator","replacement":"!==","status":"Timeout"},{"id":"61","location":{"end":{"column":4,"line":42},"start":{"column":49,"line":40}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"58","location":{"end":{"column":41,"line":37},"start":{"column":12,"line":37}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"68","location":{"end":{"column":34,"line":45},"start":{"column":16,"line":45}},"mutatorName":"UpdateOperator","replacement":"this.currentRoll--","status":"Timeout"},{"id":"65","location":{"end":{"column":36,"line":41},"start":{"column":35,"line":41}},"mutatorName":"ArithmeticOperator","replacement":"-","status":"Timeout"},{"id":"63","location":{"end":{"column":70,"line":41},"start":{"column":12,"line":41}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"59","location":{"end":{"column":41,"line":37},"start":{"column":12,"line":37}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Timeout"},{"id":"62","location":{"end":{"column":70,"line":41},"start":{"column":12,"line":41}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"},{"id":"64","location":{"end":{"column":67,"line":41},"start":{"column":64,"line":41}},"mutatorName":"EqualityOperator","replacement":"!==","status":"Timeout"}],"source":"export class Game {\n  private rolls: number[] = Array(21).fill(0)\n  private currentRoll: number = 0\n\n  score (): number {\n    let score = 0\n    let frameIndex = 0\n    for (let frame = 0; frame < 10; frame++) {\n      if (this.isStrike(frameIndex)) {\n        score += 10 + this.strikeBonus(frameIndex)\n        frameIndex++\n      } else if (this.isSpare(frameIndex)) {\n        score += 10 + this.spareBonus(frameIndex)\n        frameIndex += 2\n      } else {\n        score += this.sumOfBallsInFrame(frameIndex)\n        frameIndex += 2\n      }\n    }\n    return score\n  }\n\n  private sumOfBallsInFrame (frameIndex: number): number {\n    return this.rolls[frameIndex] + this.rolls[frameIndex + 1]\n  }\n\n  private strikeBonus (frameIndex: number): number {\n    return this.rolls[frameIndex + 1] +\n           this.rolls[frameIndex + 2]\n  }\n\n  private spareBonus (frameIndex: number): number {\n    return this.rolls[frameIndex + 2]\n  }\n\n  private isStrike (frameIndex: number): boolean {\n    return this.rolls[frameIndex] === 10\n  }\n\n  private isSpare (frameIndex: number): boolean {\n    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] === 10\n  }\n\n  roll (pins: number): void {\n    this.rolls[this.currentRoll++] = pins\n  }\n}\n"}},"schemaVersion":"1.0","thresholds":{"high":80,"low":60,"break":null}};