export enum Severity {
    PRIMARY = "PRIMARY",
    SECONDARY = "SECONDARY",
    SUCCESS = "SUCCESS",
    ERROR = "ERROR",
    WARNING = "WARNING"
}

export const SeverityClassMapObject: {[key in Severity] : string} = {
    [Severity.PRIMARY] : 'pr',
    [Severity.SECONDARY] : 'sc',
    [Severity.SUCCESS] : 'green',
    [Severity.WARNING] : 'yellow',
    [Severity.ERROR] : 'red',
}

export const getSeverityClass = (severity: Severity): string => {
    return SeverityClassMapObject[severity] || '';  // Return an empty string if severity is not found
};