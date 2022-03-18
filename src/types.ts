export interface CreatedReport extends Report {
  id: string;
}

export interface Report {
  type: string;
  value: string;
}
export interface CreatedOption extends Option {
  id: string;
}
export interface Option {
  optionName: string;
  azubiName: string;
  azubiYear: string;
  department: string;
  weekFrom: string;
  weekTo: string;
  week: Day[];
}
export interface Day {
  dayName: string;
  value: "work" | "school" | "free" | "";
  hours: string;
}
