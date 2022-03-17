import { Options } from "@popperjs/core";
import {
  deleteDoc,
  DocumentData,
  getFirestore,
  QueryDocumentSnapshot,
  doc,
  DocumentReference,
  UpdateData,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { collection, addDoc, getDocs, updateDoc } from "firebase/firestore";
import { CreatedReport, Report, CreatedOption, Option } from "./types";

export async function addAPI<T>(
  docName: string,
  data: T
): Promise<DocumentReference<T>> {
  const docRef = await addDoc(collection(getFirestore(), docName), data);
  return docRef as DocumentReference<T>;
}
export async function getAPI<T extends { id: string }>(
  docName: string
): Promise<T[]> {
  const docs: QueryDocumentSnapshot<DocumentData>[] = [];
  const querySnapshot = await getDocs(collection(getFirestore(), docName));
  querySnapshot.forEach((doc) => {
    docs.push(doc);
  });
  return docs.map((exercises) => ({
    ...exercises.data(),
    id: exercises.id,
  })) as T[];
}
export async function setAPI<T>(
  docName: string,
  data: T,
  docId: string
): Promise<void> {
  await setDoc(doc(getFirestore(), docName, docId), data);
}
export async function addSchoolReport(report: Report): Promise<void> {
  await addAPI<Report>("SchoolReports", report);
}
export async function getSchoolReport(): Promise<CreatedReport[]> {
  return getAPI<CreatedReport>("SchoolReports");
}
export async function addWorkReport(report: Report): Promise<void> {
  await addAPI<Report>("WorkReports", report);
}
export async function getWorkReport(): Promise<CreatedReport[]> {
  return getAPI<CreatedReport>("WorkReports");
}
export async function addOption(option: Option): Promise<void> {
  await addAPI<Option>("Option", option);
}
export async function getOption(): Promise<CreatedOption[]> {
  return getAPI<CreatedOption>("Option");
}
