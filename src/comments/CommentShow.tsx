import {
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from "react-admin";
import { EventsAndCommentsTimeline } from "../comments-component/EventsAndCommentsTimeline";

export const CommentShow = () => (
  <Show aside={<EventsAndCommentsTimeline />}>
    <SimpleShowLayout>
      <TextField source="id" />
      <DateField source="author.undefined" />
      <ReferenceField source="post_id" reference="posts">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="body" />
      <DateField source="created_at" />
    </SimpleShowLayout>
  </Show>
);
