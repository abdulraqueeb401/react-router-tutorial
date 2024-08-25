import { deleteContact } from "../contact";
import { redirect } from "react-router-dom";

export async function action({ params }) {
  const { contactId } = params;
  const destroyed = await deleteContact(contactId);
  if (!destroyed) throw new Error("Oh dang, contact wasn't destroyed.");
  return redirect("/");
}
