import {
  Create,
  SimpleForm,
  Toolbar,
  SaveButton,
  TextInput,
  useGetList,
} from "react-admin";

const getNextValue = (key: string) => {
  const parts = key.split("-");
  const numberPart = Number(parts[1]);
  if (isNaN(numberPart)) {
    // We cannot determine a number, so just return an empty input value to use
    return "";
  }
  const numberPartNext = (numberPart + 1).toString().padStart(3, "0");
  return `${parts[0]}-${numberPartNext}`;
};

export const PostCreate = () => {
  const { data, total, isLoading, error } = useGetList("posts", {
    pagination: { page: 1, perPage: 1 },
    sort: { field: "key", order: "DESC" },
  });

  if (isLoading || error || !data?.[0]?.key) {
    return null;
  }

  return (
    <Create redirect="list">
      <SimpleForm
        toolbar={
          <Toolbar>
            <SaveButton alwaysEnable />
          </Toolbar>
        }
      >
        <TextInput source="key" defaultValue={getNextValue(data[0].key)} />
      </SimpleForm>
    </Create>
  );
};
