// Components
import "./theme.css";

export * from "./components/Button";
export { tailwindMobiusDefaultClass } from "./tailwindClass";
export * as DefaultCSS from "./theme.css";

export enum Severity {
  PRIMARY = "PRIMARY",
  SECONDARY = "SECONDARY",
  SUCCESS = "SUCCESS",
  ERROR = "ERROR",
  WARNING = "WARNING",
  BASIC = "BASIC"
}

export const SeverityClassMapObject: { [key in Severity]: string } = {
  [Severity.PRIMARY]: "primary",
  [Severity.SECONDARY]: "secondary",
  [Severity.SUCCESS]: "success",
  [Severity.WARNING]: "warning",
  [Severity.ERROR]: "error",
  [Severity.BASIC]: "basic"
};

export const getSeverityClass = (severity: Severity): string => {
  return SeverityClassMapObject[severity] || ""; // Return an empty string if severity is not found
};

export const enum possibleSeverity {
  "bg-mobius_primary" = "bg-mobius_primary",
  "border-mobius_primary" = "border-mobius_primary",
  "text-mobius_primary" = "text-mobius_primary",
  "bg-mobius_secondary" = "bg-mobius_secondary",
  "border-mobius_secondary" = "border-mobius_secondary",
  "text-mobius_secondary" = "text-mobius_secondary",
  "bg-mobius_success" = "bg-mobius_success",
  "border-mobius_success" = "border-mobius_success",
  "text-mobius_success" = "text-mobius_success",
  "bg-mobius_warning" = "bg-mobius_warning",
  "border-mobius_warning" = "border-mobius_warning",
  "text-mobius_warning" = "text-mobius_warning",
  "bg-mobius_error" = "bg-mobius_error",
  "border-mobius_error" = "border-mobius_error",
  "text-mobius_error" = "text-mobius_error",
  "bg-mobius_basic" = "bg-mobius_basic",
  "border-mobius_basic" = "border-mobius_basic",
  "text-mobius_basic" = "text-mobius_basic"
}