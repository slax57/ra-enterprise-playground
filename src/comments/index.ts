import { CommentCreate } from "./CommentCreate";
import { CommentEdit } from "./CommentEdit";
import { CommentList } from "./CommentList";
import { CommentShow } from "./CommentShow";
// import { EditGuesser, ListGuesser, ShowGuesser } from "react-admin";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: CommentList,
  create: CommentCreate,
  edit: CommentEdit,
  show: CommentShow,
};
// export default {
//   list: ListGuesser,
//   edit: EditGuesser,
//   show: ShowGuesser,
// };
