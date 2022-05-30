import { PostCreate } from "./PostCreate";
import { PostEdit } from "./PostEdit";
import { PostList } from "./PostList";
import { PostShow } from "./PostShow";
//import { EditGuesser, ListGuesser, ShowGuesser } from "react-admin";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  list: PostList,
  create: PostCreate,
  edit: PostEdit,
  show: PostShow,
};
// export default {
//   list: ListGuesser,
//   edit: EditGuesser,
//   show: ShowGuesser,
// };
