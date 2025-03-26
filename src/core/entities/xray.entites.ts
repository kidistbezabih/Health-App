import { XrayModel } from "../../models/xrayModel";


export class XrayEntity {
  constructor(
    bodyPart: string,
    exposureSettings: string,
    imageFilePath: string,
    findings: string,
    diagnosis: string,
    technician: string,
  ) {
  }

  public static fromDatabase(obj: XrayModel): XrayEntity {
    const {
      bodyPart,
      exposureSettings,
      imageFilePath,
      findings,
      diagnosis,
      technician,
  } = obj;

  return new XrayEntity(
    bodyPart as string,
    exposureSettings as string,
    imageFilePath as string,
    findings as string,
    diagnosis as string,
    technician as string
  )
  }
}