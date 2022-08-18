import { WriterCreate } from "./WriterCreate";
import { WriterEdit } from "./WriterEdit";
import { ListGuesser, ShowGuesser } from "react-admin";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: ListGuesser,
  create: WriterCreate,
  edit: WriterEdit,
  show: ShowGuesser,
};
