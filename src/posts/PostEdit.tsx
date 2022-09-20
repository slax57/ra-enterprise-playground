import {
  Edit,
  SimpleForm,
  NumberInput,
  TextInput,
  BooleanInput,
  ArrayInput,
  SimpleFormIterator,
  DateInput,
} from "react-admin";
import { EventsAndCommentsTimeline } from "../comments-component/EventsAndCommentsTimeline";

export const PostEdit = () => (
  <Edit aside={<EventsAndCommentsTimeline />}>
    <SimpleForm>
      <TextInput source="id" disabled />
      <TextInput source="title" />
      <TextInput source="teaser" />
      <TextInput source="body" />
      <NumberInput source="views" />
      <NumberInput source="average_note" />
      <BooleanInput source="commentable" />
      <ArrayInput source="pictures">
        <SimpleFormIterator>
          <TextInput source="name" />
          <TextInput source="url" />
          <TextInput source="metas.title" />
        </SimpleFormIterator>
      </ArrayInput>
      <DateInput source="published_at" />
      <TextInput source="tags" />
      <TextInput source="category" />
      <TextInput source="subcategory" />
      <ArrayInput source="backlinks">
        <SimpleFormIterator>
          <DateInput source="date" />
          <TextInput source="url" />
        </SimpleFormIterator>
      </ArrayInput>
    </SimpleForm>
  </Edit>
);
