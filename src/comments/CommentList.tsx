import {
  Datagrid,
  DateField,
  List,
  ReferenceField,
  TextField,
  FilterList,
  useListFilterContext,
  ReferenceInput,
  AutocompleteInput,
} from "react-admin";
import { useForm, FormProvider } from "react-hook-form";
import get from "lodash/get";
import { Box, Card, CardContent, ListItem } from "@mui/material";
import NewspaperIcon from "@mui/icons-material/Newspaper";

const PostFilter = () => {
  const { filterValues, setFilters } = useListFilterContext();
  const form = useForm();

  const handleChange = (value: any): void => {
    setFilters(
      {
        ...filterValues,
        post_id: value,
      },
      null,
      true
    );
  };

  const handleFormSubmit = (values: any): void => {
    setFilters(
      {
        ...filterValues,
        values,
      },
      null,
      false
    );
  };

  return (
    <FilterList label="Post" icon={<NewspaperIcon />}>
      <ListItem>
        <FormProvider {...form}>
          <form onSubmit={form.handleSubmit(handleFormSubmit)}>
            <ReferenceInput
              reference="posts"
              source="post_id"
              defaultValue={get(filterValues, "post_id")}
            >
              <AutocompleteInput
                optionText="title"
                label="Posts"
                onChange={handleChange}
              />
            </ReferenceInput>
          </form>
        </FormProvider>
      </ListItem>
    </FilterList>
  );
};

const FilterSidebar = () => (
  <Box
    sx={{
      display: {
        xs: "none",
        sm: "block",
      },
      order: -1, // display on the left rather than on the right of the list
      width: "15em",
      marginRight: "1em",
    }}
  >
    <Card>
      <CardContent>
        <PostFilter />
      </CardContent>
    </Card>
  </Box>
);

export const CommentList = () => (
  <List aside={<FilterSidebar />}>
    <Datagrid rowClick="edit">
      <TextField source="id" />
      <DateField source="author.undefined" />
      <ReferenceField source="post_id" reference="posts">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="body" />
      <DateField source="created_at" />
    </Datagrid>
  </List>
);
