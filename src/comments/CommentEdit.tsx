import {
  DateInput,
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "react-admin";
import { EventsAndCommentsTimeline } from "../comments-component/EventsAndCommentsTimeline";

export const CommentEdit = () => (
  <Edit aside={<EventsAndCommentsTimeline />}>
    <SimpleForm>
      <TextInput source="id" />
      <DateInput source="author.undefined" />
      <ReferenceInput source="post_id" reference="posts">
        <SelectInput optionText="id" />
      </ReferenceInput>
      <TextInput source="body" />
      <DateInput source="created_at" />
    </SimpleForm>
  </Edit>
);
