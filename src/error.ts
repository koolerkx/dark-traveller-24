import {
  CAPTURED_POINT_COOLDOWN_SECONDS,
  USER_MAXIMUM_LEVEL,
} from "./repository/user";

export class CapturedPointInCooldownError extends Error {
  public secondsSincecaptured: number;

  constructor(secondsSincecaptured: number) {
    super(
      `Point in cooldown: ${secondsSincecaptured}s/${CAPTURED_POINT_COOLDOWN_SECONDS}s`
    );
    this.secondsSincecaptured = secondsSincecaptured;
    this.name = "CapturedPointInCooldownError";
  }
}

export class MaximumLevelAchievedError extends Error {
  private level: number;

  constructor(level: number) {
    super(`Maximum level achieved: ${level}/${USER_MAXIMUM_LEVEL}`);
    this.level = level;
    this.name = "MaximumLevelAchievedError";
  }
}
