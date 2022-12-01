/**
 * Command, 명령만 할 수있는 함수로 만들어진 클래스, -> Command 패턴
 * 명령으로 만들어진 객체 => command 객체
 * 실행함수, 취소할수 있는 함수를 만든다.
 *
 */

export function score(candidate, medicalExam, scoringGuide) {
  return new Score(candidate, medicalExam, scoringGuide).execute();
}

class Score {
  constructor(candidate, medicalExam, scoringGuide) {
    this.candidate = candidate;
    this.medicalExam = medicalExam;
    this.scoringGuide = scoringGuide;
  }

  execute() {
    let result = 0;
    let healthLevel = 0;
    let highMedicalRiskFlag = false;

    if (this.medicalExam.isSmoker) {
      healthLevel += 10;
      highMedicalRiskFlag = true;
    }
    let certificationGrade = 'regular';
    if (
      this.scoringGuide.stateWithLowCertification(this.candidate.originState)
    ) {
      certificationGrade = 'low';
      result -= 5;
    }
    // lots more code like this
    result -= Math.max(healthLevel - 5, 0);
    return result;
  }
}
export class ScoringGuide {
  stateWithLowCertification(state) {
    return state < 5;
  }
}
